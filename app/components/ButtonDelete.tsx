"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Trash2} from "lucide-react";
import {toast} from "react-toastify";
import {deleteNote} from "@/lib/actionsNotes"

interface DeleteButtonProps {
    id: string;
}

export default function ButtonDelete({id}: DeleteButtonProps) {
    const handleSubmit = ()=> {
        toast.success("Note supprimée !")
    }
    return (
        <form action={deleteNote} onClick={handleSubmit}>
            <Input type="hidden" name="id" value={id}/>
            <Button type="submit" className="bg-red-500 hover:bg-red-600 mt-1"><Trash2/></Button>
        </form>
    )
}
