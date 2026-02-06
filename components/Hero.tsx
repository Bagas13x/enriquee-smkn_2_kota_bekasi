"use client";

import React, { useEffect, useState } from "react";
import Slides1 from "@/public/assets/images/slides/slides1.webp";
import Slides2 from "@/public/assets/images/slides/slides2.webp";
import Slides3 from "@/public/assets/images/slides/slides3.webp";
import Link from "next/link";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const slides = [
  {
    title: "Title 1",
    image: Slides1,
    badge: "Mountain View",
  },
  {
    title: "Mountain View 2",
    image: Slides2,
    badge: "Kata-kata slide 2",
  },
  {
    title: "Mountain View 3",
    image: Slides3,
    badge: "Kata-kata slide 3",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const internal = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(internal);
  });

  return (
    <>
      <section className="relative min-h-screen bg-black flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${slide.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75" />
        
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-16 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="min-h-[70vh] flex items-center">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 absolute"}`}
                >
                  <span className="inline-block mb-5 bg-lime-400 text-black px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm">
                    {slide.badge}
                  </span>

                  <h1 className="text-white font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight max-w-xl mb-8">
                    {slide.title}
                  </h1>

                  <div className="grid grid-cols-2 sm:flex gap-3 w-full sm:w-auto">
                    <Link
                      href={"#contact"}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black rounded-full px-4 py-3 hover:bg-gray-100 transition font-semibold"
                    >
                      Kontak
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </Link>

                    <Link
                      href={"#contact"}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-800 text-white rounded-full px-4 py-3 hover:bg-gray-700 transition font-semibold border border-gray-600"
                    >
                      Testimoni
                      <FontAwesomeIcon
                        icon={faUpRightFromSquare}
                        className="w-3 h-3 sm:w-4 sm:h-4"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        <div className="absolute bottom-24 sm:bottom left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
            <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
                
              index === currentSlide ? "w-8 bg-white" : "w-2.5 bg-gray-400"}`}
            aria-label={`Go to slide ${index + 1}`}
            >
            
            </button>
        ))}    
        </div>
      </section>
    </>
  );
}
