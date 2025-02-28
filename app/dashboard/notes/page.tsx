import Link from "next/link";
import {Button} from "@/components/ui/button";

export default function PageNotes() {
    return (
        <section className="grid items-start gap-y-8">
            <div className="flex md:items-center md:justify-between flex-col md:flex-row px-2">
                <div className="grid gap-1">
                    <h2 className="text-3xl uppercase font-black">Notes</h2>
                    <p className="text-lg text-muted-foreground">Prennez des notes</p>
                    <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600  text-white">
                    <Link href="/dashboard/notes/create">Créer une note</Link>
                </Button>
            </div>
        </section>
    )
}
