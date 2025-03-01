"use server";

import {getUser} from "./actionsUsers";
import { prisma } from "./db";
import {redirect} from "next/navigation";

export const getAllNotes = async (userId: string) =>{
    const data = await prisma.note.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt:"desc"
        }
    });
    return data;
}

export const createNote = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const completed = formData.get("completed");
    const user = await getUser();
    const userId = user?.id as string;

    await prisma.note.create({
        data: {
            userId: userId,
            title: title,
            description: description,
            completed: completed === "on"
        }
    });
    redirect("/dashboard/notes");
}
