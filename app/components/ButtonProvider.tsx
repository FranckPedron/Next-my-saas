import {Button} from "@/components/ui/button";

export default function ButtonProvider() {
    return (
        <div className="flex flex-col space-y-4">
            <Button>Continuer avec Google</Button>
            <Button>Continuer avec Github</Button>
        </div>
    )
}
