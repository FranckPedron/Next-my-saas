import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {getUser} from "@/lib/actionsUsers";
import Image from "next/image";
import BadgePremium from "@/public/badge-premium.svg";

export default function PagePayment() {
    const itemsPremium = [
        {name: "Fonctionnalités avancées"},
        {name: "Support prioritaire"},
        {name: "Mises à jour régulières"},
        {name: "Sauvegardes automatiques"},
        {name: "Sécurité renforcée"},
        {name: "Statistiques détaillées"}
    ]
    return (
        <div className="max-w-lg mx-auto space-x-4 mt-3">
            <Card className="flex flex-col">
                <CardContent className="py-8">
                    <div>
                        <h3 className="text-md font-black uppercase bg-orange-900 bg-opacity-20 text-orange-500 p-3 rounded-md inline">Pass premium</h3>
                    </div>
                    <div className="mt-4 text-6xl font-black">
                        <span>19,99€</span> <span className="text-sm text-muted-foreground">/mois</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">Profitez d'une expérience unique avec le pass Premium</p>
                    <div className="flex-1 flex flex-col justify-between px-6 py-4 bg-secondary rounded-lg m-1 space-t-6 p-3 mt-4">
                        <ul className="space-y-3">
                            {itemsPremium.map((item, index) => (
                                <li key={index} className="flex items-center space-x-2">
                                    <Image src={BadgePremium} alt="Badge premium" width={24} height={24}/>
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                        <form action="" className="w-full mt-4">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Devenez membre Premium</Button>
                        </form>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
