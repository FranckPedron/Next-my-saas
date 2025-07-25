import {headers} from "next/headers";
import Stripe from "stripe";
import {stripe} from "@/lib/stripe";
import {prisma} from "@/lib/db";

export async function POST(req: Request) {
    const body = await req.text();
    const signature = (await headers()).get("stripe-signature") as string;
    let event: Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET as string
        )
    } catch (e: unknown) {
        return new Response("Error webhook stripe", {status: 400})
    }
    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        )
        const customerId = String(session.customer);

        const user = await prisma.user.findUnique({
            where: {
                stripeCustomerId: customerId
            }
        });
        if (!user) throw new Error("L'utilisateur n'existe pas");

        await prisma.subscription.create({
            data: {
                stripeSubscriptionid: customerId,
                userId: user.id,
                currentPeriodStart: subscription.current_period_start,
                currentPeriodEnd: subscription.current_period_end,
                status: subscription.status,
                planId: subscription.items.data[0].plan.id,
                interval: subscription.items.data[0].plan.interval,
            }
        })
    }
    if(event.type === "invoice.payment_succeeded") {
        const subscription = await stripe.subscriptions.retrieve(
            session.subscription as string
        );
        await prisma.subscription.update({
            where: {
                stripeSubscriptionid: subscription.id
            },
            data: {
                planId: subscription.items.data[0].plan.id,
                currentPeriodStart: subscription.current_period_start,
                currentPeriodEnd: subscription.current_period_end,
                status: subscription.status
            }
        })
    }
    return new Response(null, {status: 200});
}
