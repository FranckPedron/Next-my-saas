import Link from "next/link";
import {Button} from "@/components/ui/button";
import {getUser} from "@/lib/actionsUsers";
import {getAllNotes} from "@/lib/actionsNotes";
import {File, FilePenLine} from "lucide-react";
import {Card} from "@/components/ui/card";
import ButtonDelete from "@/app/components/ButtonDelete"

export default async function PageNotes() {
    const user = await getUser();
    const data = await getAllNotes(user?.id as string);
    return (
        <section className="grid items-start gap-y-8">
            <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2">
                <div className="grid gap-1">
                    <h2 className="text-3xl uppercase font-black">Notes</h2>
                    <p className="text-lg text-muted-foreground">Prennez des notes</p>
                    <div className="w-12 bg-white my-2 mx-1 h-px"></div>
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600  text-white">
                    <Link href="/dashboard/notes/create">Créer une note</Link>
                </Button>
            </div>

            {data.length < 1 ? (
                <div className="flex flex-col min-h-[400px] items-center justify-center rounded-md border border-dashed p-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-orange-500 bg-opacity-20 mb-4">
                        <File className="text-orange-900"/>
                    </div>
                    <p className="text-lg text-white">Vous n'avez aucune note</p>
                    <p className="text-muted-foreground text-sm">Commencez à créer des notes</p>
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white mt-4">
                        <Link href={"/dashboard/notes/create"}>Créer une nouvelle note</Link>
                    </Button>
                </div>
            ) : (
                <div className="flex flex-col space-y-4">
                    {data?.map((note, index) => (
                        <Card key={index} className="flex items-center justify-between p-4">
                            <div>
                                <h2 className="text-orange-500 text-xl font-bold">{note.title}</h2>
                                <p className="text-sm text-muted-foreground">
                                    écrit le {new Intl.DateTimeFormat("fr-FR", {
                                        dateStyle: 'full'
                                }).format(new Date(note.createdAt))}
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button type="button" className="bg-yellow-500 hover:bg-yellow-600 mt-4 text-white mb-3">
                                    <Link href={`notes/note/${note.id}`}>
                                        <FilePenLine className="w-4"/>
                                    </Link>
                                </Button>
                                <ButtonDelete id={note.id}/>
                            </div>
                        </Card>
                    ))}
                </div>
            )}
        </section>
    )
}
