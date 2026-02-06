import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 pb-16 border-b border-gray-700">
                    <div className="flex flex-col">
                        <h2 className="text-[24px] font-bold mb-6">Enriquee Studio</h2>
                        <p>kami adalah studio kreatif yang percaya bahwa desain bukan soal estetika, tapi soal bagaimana pesan dapat tersampaikan dengan visual yang baik.</p>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[13px] font-bold tracking-widest mb-8 text-gray-300">
                            NAVIGATION
                        </h3>
                        <nav className="space-y-4">
                            <a href="#" className="block text-[14px] text-gray-400 hover:text-white transition">
                                Tentang Kami
                            </a>
                            <a href="#" className="block text-[14px] text-gray-400 hover:text-white transition">
                                Karya
                            </a>
                            <a href="#" className="block text-[14px] text-gray-400 hover:text-white transition">
                                Layanan
                            </a>
                            <a href="#" className="block text-[14px] text-gray-400 hover:text-white transition">
                                Testimoni
                            </a>
                        </nav>
                    </div>

                    <div className="flex flex-col">
                        <h3 className="text-[13px] font-bold tracking-widest mb-8 text-gray-300">
                            CONNECT WITH US
                        </h3>
                        <div className="flex gap-4">
                            <a 
                                href="https://www.instagram.com/smkn2.kotabks/"  target="blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition duration-300"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://id.linkedin.com/school/smkn2kotabekasi/" target="blank"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:bg-white hover:text-black transition duration-300"
                                aria-label="LinkedIn"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <p className="text-center text-gray-400">© 2026 Enriquee Studio. All rights reserved.</p>
            </div>
        </footer>
    );
}