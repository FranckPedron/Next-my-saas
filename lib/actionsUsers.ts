"use server";

import {redirect} from "next/navigation";
import { auth } from "@/lib/auth";
import {prisma} from "@/lib/db";

export const getUser = async () => {
    const session = await auth();
    if (!session || !session.user || !session.user.id) {
        redirect("/");
    }
    const id = session.user.id as string;
    const user = await prisma.user.findUnique({
        where: {id}
    });
    return user;
}
