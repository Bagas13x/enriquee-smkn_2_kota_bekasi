import React from "react";
import Link from "next/link";
import Image from "next/image";
import Smkn2 from "@/public/assets/images/smkn2.webp";

const MenuItems = [
    { name: "navbar test 1", href: "#about"}
]

export default function Navbar() {
    return (
        <nav>
            <div>
                <div>
                    <Link href="/">
                        <div>
                            <Image 
                                src={Smkn2}
                                width={40}
                                height={40}
                                alt="Logo SMKN 2 KOTA BEKASI"
                            />

                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center gap-8">
                        <Link 
                        href={"#about"}
                        className="relative font-bold"
                        >

                        Test
                        </Link>
                        <Link href={"#about"}>

                        Test
                        </Link>
                        <Link href={"#about"}>

                        Test
                        </Link>
                        <Link href={"#about"}>

                        Test
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}