"use server";

import {prisma} from "./db";
import {getStripeSession} from "./stripe";
import {getUser} from "@/lib/actionsUsers";
import {redirect} from "next/navigation";
import {stripe} from "./stripe";

export const getDataStripeUser = async (userId: string) => {
    const data = await prisma.subscription.findUnique({
        where: {
            userId: userId
        },
        select: {
            status: true,
            user: {
                select: {
                    stripeCustomerId: true
                }
            }
        }
    })
    return data;
}

export const createSubscription = async () => {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({
        where: {
            id: user?.id,
        },
        select: {
            stripeCustomerId: true
        }
    })
    const subscriptionUrl = await getStripeSession({
        customerId: dbUser?.stripeCustomerId as string,
        domainUrl: "http://localhost:3000",
        priceId: process.env.STRIPE_API_ID as string
    })
    return redirect(subscriptionUrl);
}

export const createCustomerPortal = async () => {
    const user = await getUser();
    const session = await stripe.billingPortal.sessions.create({
        customer: user?.stripeCustomerId as string,
        return_url: "http://localhost:3000/dashboard/payment"
    })
}
