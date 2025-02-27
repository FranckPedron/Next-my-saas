import {Input} from '@/components/ui/input';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Button} from '@/components/ui/button';
import {getUser, updateUser} from "@/lib/actionsUsers";
import Image from "next/image";

export default async function PageSettings() {
    const user = await getUser();

    return (
        <section className="border border-gray-200 rounded-md p-3">
            <h2 className="text-3xl uppercase font-black">Settings</h2>
            <p className="text-lg text-muted-foreground">Paramètres de profil</p>
            <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>

            <form action={updateUser} >
                <Input type="hidden" name="id" value={user?.id}/>

                <Card>
                    <CardHeader>
                        <CardTitle>Parametres globaux</CardTitle>
                        <CardDescription>Modifiez vos informations puis sauvegardez</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {user?.image && (
                            <Image width={100} height={100} src={user?.image} alt={user?.name || "Photo de profil"}
                                   className="w-16 h-16 object-contain mb-4 rounded-full"/>
                        )}
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="idUser">ID</Label>
                            <Input type="text" name="idUser" id="idUser" disabled defaultValue={user?.id || ''}/>
                        </div>
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="name">Nom</Label>
                            <Input type="text" name="name" id="name" defaultValue={user?.name || ''}/>
                        </div>
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" id="email" disabled defaultValue={user?.email || ''}/>
                        </div>
                    </CardContent>

                    <CardFooter>
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">Modifier</Button>
                    </CardFooter>
                </Card>
            </form>

            <form action="">
                <Input type="hidden" name="id" value=""/>
                <Button type="submit" className="bg-red-500 mx-1 my-1 hover:bg-red-600 text-white">Supprimer mon
                    compte</Button>
            </form>
        </section>
    )
}
