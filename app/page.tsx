'use client'
import Image from "next/image";
import logoApp from "@/public/logo.svg";
import {Cursor, Typewriter} from "react-simple-typewriter";
import ButtonProvider from "@/app/components/ButtonProvider";

export default function Home() {

    return (
        <section className="w-full h-screen flex justify-center items-center flex-col gap-2">
            <Image src={logoApp} alt="Logo application" width={100} height={100}
                  className=" mb-4 object-contain"/>
            <h1 className="text-4xl md:text-6xl font-black mb-2 uppercase text-center flex items-center">
                <Typewriter typeSpeed={50} words={["Bienvenue", "Welcome", "Bienvenido"]} loop={0}/>
                <span><Cursor/></span>
            </h1>
            <p></p>
            <ButtonProvider/>
        </section>
    );
}
