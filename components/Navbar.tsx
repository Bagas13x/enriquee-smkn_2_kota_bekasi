"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Smkn2 from "@/public/assets/images/smkn2.webp";
import { Button } from "./ui/button";
import { faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menuItems = [
    { name: "navbar 1", href: "#about"},
    { name: "navbar 2", href: "#about"},
    { name: "navbar 3", href: "#about"},
    { name: "navbar 4", href: "#about"},
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-6 md:px-8 lg:px-16 transition-all duration-300">
            <div className="mx-auto max-w-7xl">
                <div className="px-8 py-3 flex justify-between items-center transition-all duration-300">
                    <Link href="/" className="flex items-center">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                            <Image 
                                src={Smkn2}
                                width={40}
                                height={40}
                                alt="Logo SMKN 2 KOTA BEKASI"
                                className="object-cover"
                                priority
                            />

                        </div>
                    </Link>
                    <div className="hidden lg:flex items-center gap-8">
                        {menuItems.map((item, index) => (
                            <Link 
                            href={item.href}
                            key={index}
                            className="relative font-bold text-sm tracking-wide py-2 transition-colors duration-300 group text-white"
                            
                            >

                                {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <Button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden w-10 h-10 flex items-center justify-center bg-transparent hover:bg-transparent transition-colors duration-300 text-white"
                    >
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} 
                        className="w-6 h-6"/>
                    </Button>
                </div>

                {isMenuOpen && (
                    <div className="lg:hidden mt-4 backdrop-blur-xl bg-white/90 rounded-2xl p-6 border-gray-200/50">
                        <div className="flex flex-col gap-2">
                            {menuItems.map((item, index) => (
                                <Link
                                key={index}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-700 hover:text-white hover:bg-gray-100 font-medium py-3 px-4 rounded-2xl transition-all"
                                >
                                    {item.name}
                                </Link>
                            )
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}