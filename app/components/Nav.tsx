'use client'

import Link from "next/link";
import Image from "next/image";
import LogoApp from "@/public/logo.svg";
import {ThemeToggle} from "@/app/components/ThemeToggle";

export default function Nav() {
    return (
        <nav className="max-w-[1200px] w-full mx-auto h-[80px] flex items-center
        justify-between p-5 border-b border-gray-300">
            <div>
                <Link href="/">
                    <Image width={30} height={30} src={LogoApp} alt="Logo application"/>
                </Link>
            </div>
            <div className="flex items-center gap-4">
                <ThemeToggle/>
            </div>
        </nav>
    )
}

