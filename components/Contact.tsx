"use client";
import React, { useState, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import CustomDropdown from "./ui/CustomDropdown";
import { Button } from "./ui/button";
import Router from "next/router";
import { redirect } from "next/navigation";

const Options = [
    { value: "komisi-personal", label: "Komisi Personal" },
    { value: "ilustrasi-buku", label: "Ilustrasi Buku cerita anak" },
    { value: "desain-poster", label: "Desain poster" },
    { value: "mockup", label: "Mockup" }
];

export default function Contact(){
    const [selectedService, setSelectedService] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");

    const handleSubmit = () => {
       redirect("https://wa.me/6289699512739?text="+"Nama : " + name + "%0AEmail : " + email + "%0ALayanan yang dipilih : " + selectedService + "%0ADeskripsi Proyek : " + details);
    }
    return(
        <section className="py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h2 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 md:mb-16">
                    Wujudkan ide anda <br />bersama kami.
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    <a 
                        href="https://maps.app.goo.gl/4waXKrP1qgJcv7L77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative rounded-[25px] overflow-hidden shadow-2xl h-64 md:h-96 lg:h-full group cursor-pointer block hover:shadow-3xl transition-shadow duration-300"
                    >
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.6476947100011!2d106.99074866803045!3d-6.355796060368484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c22161d4051%3A0x7a0a35b288779341!2sSMKN%202%20Kota%20Bekasi!5e0!3m2!1sen!2sid!4v1770349340982!5m2!1sen!2sid" 
                            className="w-full h-full"
                            style={{border: "none"}} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen={true}
                        />
                        <div className="absolute inset-0 bg-c-to-b from-transparent via-transparent to-black rounded-[25px] pointer-events-none" />
                        <button className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/30 backdrop-blur-md border border-white/50 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-white/40 transition-all duration-300 shadow-lg flex items-center gap-2">
                            Buka Maps
                            <FontAwesomeIcon icon={faExternalLink} className="text-xs sm:text-sm"/>
                        </button>
                    </a>

                    <div className="bg-linear-to-br from-white to-gray-50 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
                        <form className="flex flex-col gap-4 sm:gap-6 h-full">
                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                    Nama Lengkap
                                </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Masukkan nama lengkap Anda" 
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                    Pilih Layanan
                                </label>
                                <CustomDropdown 
                                    options={Options}
                                    value={selectedService}
                                    onChange={setSelectedService}
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input 
                                    type="email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email" 
                                    placeholder="Masukkan email Anda" 
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200"
                                />
                            </div>

                            <div>
                                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                                    Deskripsi Proyek
                                </label>
                                <textarea 
                                name="details"
                                id="details"
                                onChange={(e) => setDetails(e.target.value)}
                                    placeholder="Jelaskan detail proyek Anda..." 
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border-b-2 border-gray-300 focus:outline-none focus:border-b-black transition duration-200 resize-none h-24 sm:h-32"
                                />
                            </div>

                            <button onClick={handleSubmit} className="flex items-center group mt-auto gap-0 w-fit">
                                <div className="bg-lime-300 text-black font-extrabold py-2 sm:py-3 px-5 sm:px-7 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-105 group-active:scale-95 shadow-md group-hover:shadow-lg text-sm sm:text-base">
                                    Kirim Pesan
                                </div>
                                <div className="bg-black h-10 sm:h-12 w-10 sm:w-12 rounded-full flex items-center justify-center -ml-5 sm:-ml-6 border-2 border-white shadow-lg transition-all duration-300 cursor-pointer group-hover:translate-x-2 group-hover:scale-110 group-active:scale-95">
                                    <FontAwesomeIcon icon={faArrowRight} className="text-white text-base sm:text-lg"/>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}