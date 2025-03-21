"use server";

import {getUser} from "./actionsUsers";
import {prisma} from "./db";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export const getAllNotes = async (userId: string) => {
    const data = await prisma.note.findMany({
        where: {
            userId: userId,
        },
        orderBy: {
            createdAt: "desc"
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

export const deleteNote = async (formData: FormData) => {
    const id = formData.get("id") as string;
    await prisma.note.delete({
        where: {id}
    });
    revalidatePath("/");
}

export const getNote = async (id: string) => {
    const note = await prisma.note.findUnique({
        where: {id}
    });
    return note;
}

export const updateNote = async (formData: FormData) => {
    try {
        const id = formData.get("id") as string;
        const title = formData.get("title") as string;
        const description = formData.get("description") as string;
        const completed = formData.get("completed");
        if (title !== null || description !== null) {
            await prisma.note.update({
                where: {id},
                data: {
                    title,
                    description,
                    completed: completed === "on"
                }
            });
        }
    } catch (e) {
        console.error("Erreur lors de la modification de la note", e);
    } finally {
        redirect("/dashboard/notes");
    }
}
