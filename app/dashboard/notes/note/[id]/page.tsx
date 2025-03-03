import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {getNote, updateNote} from "@/lib/actionsNotes";

export default async function NoteDetailPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const note = await getNote(id);
    return (
        <Card>
            <form action={updateNote}>
                <input type="hidden" name="id" value={note?.id as string}/>
                <CardHeader>
                    <CardTitle>Nouvelle note</CardTitle>
                    <CardDescription>Ecrivez votre note ici</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-y-5">
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="title">Titre</Label>
                        <Input type="text" id="title" name="title" required placeholder="Titre de la note"
                               defaultValue={note?.title as string}></Input>
                    </div>
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="description">Description</Label>
                        <Textarea id="description" name="description"
                                  required placeholder="Description de la note"
                                  defaultValue={note?.description as string}
                        >
                        </Textarea>
                    </div>
                    <div className="gap-y-2 flex flex-col">
                        <Label htmlFor="completed">En attente | Terminé</Label>
                        <Input type="checkbox" id="completed" name="completed"
                               className="w-6 cursor-pointer"
                               defaultChecked={note?.completed as boolean}/>
                    </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                    <Button type="button" className="bg-red-500 hover:bg-red-600 text-white">
                        <Link href="/dashboard/notes">Annuler</Link>
                    </Button>
                    <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Modifier
                        note</Button>
                </CardFooter>
            </form>
        </Card>
    )
}
