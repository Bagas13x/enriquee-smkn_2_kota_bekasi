"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import CustomDropdown from "./ui/CustomDropdown";

export default function Contact(){
    const [selectedService, setSelectedService] = useState("");

    return(
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-center text-5xl md:text-7xl font-black mb-16">
                    Wujudkan ide anda <br />bersama kami.
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <a 
                        href="https://maps.app.goo.gl/4waXKrP1qgJcv7L77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-[25px] overflow-hidden shadow-2xl h-full group cursor-pointer block hover:shadow-3xl transition-shadow duration-300"
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.6476947100011!2d106.99074866803045!3d-6.355796060368484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c22161d4051%3A0x7a0a35b288779341!2sSMKN%202%20Kota%20Bekasi!5e0!3m2!1sen!2sid!4v1770349340982!5m2!1sen!2sid" 
                            className="w-full h                            allowFullScreen="" 
-full" 
                            style={{border: "none"}} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-[25px] pointer-events-none" />
                        <button className="absolute bottom-6 right-6 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/50 text-white font-semibold rounded-full hover:bg-white/40 transition-all duration-300 shadow-lg flex items-center gap-2">
                            Buka Maps
                            <FontAwesomeIcon icon={faExternalLink} className="text-sm"/>
                        </button>
                    </a>

                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border border-gray-200">
                        <form className="flex flex-col gap-6 h-full">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Nama Lengkap
                                </label>
                                <input 
                                    type="text" 
                                    placeholder="Masukkan nama lengkap Anda" 
                                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Pilih Layanan
                                </label>
                                <CustomDropdown 
                                    options={[
                                        { value: "komisi-personal", label: "Komisi Personal" },
                                        { value: "ilustrasi-buku", label: "Ilustrasi Buku cerita anak" },
                                        { value: "desain-poster", label: "Desain poster" },
                                        { value: "mockup", label: "Mockup" }
                                    ]}
                                    value={selectedService}
                                    onChange={setSelectedService}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email" 
                                    placeholder="Masukkan email Anda" 
                                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Deskripsi Proyek
                                </label>
                                <textarea 
                                    placeholder="Jelaskan detail proyek Anda..." 
                                    className="w-full px-4 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200 resize-none h-32"
                                />
                            </div>

                            <button type="submit" className="flex items-center group mt-auto gap-0">
                                <div className="bg-lime-300 text-black font-extrabold py-3 px-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-105 group-active:scale-95 shadow-md group-hover:shadow-lg">
                                    Kirim Pesan
                                </div>
                                <div className="bg-black h-12 w-12 rounded-full flex items-center justify-center -ml-6 border-2 border-white shadow-lg transition-all duration-300 cursor-pointer group-hover:translate-x-2 group-hover:scale-110 group-active:scale-95">
                                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-lg"/>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}