import React from 'react'

import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export default async function PageSettings() {
    return (
        <section className="border border-gray-200 rounded-md p-3">
            <h2 className="text-3xl uppercase font-black">Settings</h2>
            <p className="text-lg text-muted-foreground">Paramètres de profil</p>
            <div className="w-12 bg-white my-2 mx-1 h-[1px]"></div>

            <form action="">
                <Input type="hidden" name="id" value="1" />

                <Card>
                    <CardHeader>
                       <CardTitle>Parametres globaux</CardTitle>
                       <CardDescription>Modifiez vos informations puis sauvegardez</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="idUser">ID</Label>
                            <Input type="text" name="idUser" id="idUser" disabled />
                        </div>
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="name">Nom</Label>
                            <Input type="text" name="name" id="name"/>
                        </div>
                        <div className="space-y-1 mb-2">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" name="email" id="email" disabled />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="bg-orange-500 hover:bg-orange-600">Modifier</Button>
                    </CardFooter>
                </Card>
            </form>
            <form action="">
                <Input type="hidden" name="id" value="" />
                <Button type="submit" className="bg-red-500 mx-1 my-1 hover:bg-red-600 text-white">Supprimer mon compte</Button>
            </form>
        </section>
    )
}
