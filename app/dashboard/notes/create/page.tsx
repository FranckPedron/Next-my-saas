import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {createNote} from "@/lib/actionsNotes";

export default function CreatePage() {
    return (
            <Card>
                <form action={createNote}>
                    <CardHeader>
                        <CardTitle>Nouvelle note</CardTitle>
                        <CardDescription>Ecrivez votre note ici</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-y-5">
                        <div className="gap-y-2 flex flex-col">
                            <Label htmlFor="title">Titre</Label>
                            <Input type="text" id="title" name="title" required placeholder="Titre de la note" ></Input>
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <Label htmlFor="description">Description</Label>
                            <Textarea id="description" name="description"
                                   required placeholder="Description de la note" >
                            </Textarea>
                        </div>
                        <div className="gap-y-2 flex flex-col">
                            <Label htmlFor="completed">En attente | Terminé</Label>
                            <Input type="checkbox" id="completed" name="completed" className="w-6 cursor-pointer"></Input>
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                        <Button type="button" className="bg-red-500 hover:bg-red-600 text-white">
                            <Link href="/dashboard/notes">Annuler</Link>
                        </Button>
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Créer note</Button>
                    </CardFooter>
                </form>
            </Card>
    )
}
