"use server";

import {redirect} from "next/navigation";
import {auth} from "@/lib/auth";
import {prisma} from "@/lib/db";
import {revalidatePath} from "next/cache";

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

export const updateUser = async (formData: FormData) => {
    try {
        const userName = formData.get("name") as string;
        const id = formData.get("id") as string;
        if (userName !== null) {
            await prisma.user.update({
                where: {id},
                data: {name: userName}
            });
        }
    } catch (e) {
        console.error("Une erreur est survenue lors de la mise à jour de l'utilisateur", e);
    } finally {
        revalidatePath("/");
    }
}
