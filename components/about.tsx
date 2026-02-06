"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12 lg:mb-16">
          Tentang Kami
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Large Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-md row-span-2">
            <Image
              src="/assets/images/about/giphy-3.gif"
              alt="About Us Image"
              width={1200}
              height={1000}
              className="w-full h-[400px] md:h-[500px] lg:h-full object-cover"
              priority
            />
          </div>

          {/* Right - Image with Button */}
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="relative rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/assets/images/about/giphy-2.gif"
                alt="Our Team Image"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />

              <button
                onClick={() => router.push("/contact")}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="absolute top-4 right-4 bg-lime-400/30 hover:bg-lime-400/50 backdrop-blur-md border border-lime-400/50 text-gray-900 font-bold px-5 py-2.5 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg text-sm md:text-base hover:scale-105 active:scale-95"
                style={{
                  boxShadow: isHovered
                    ? "inset 0 1px 2px rgba(255,255,255,0.5), 0 12px 40px rgba(184, 212, 56, 0.4)"
                    : "inset 0 1px 2px rgba(255,255,255,0.5), 0 8px 32px rgba(31,38,135,0.37)",
                }}
              >
                Kontak
                <div
                  className="bg-gray-900 rounded-full p-3 transition-all duration-300"
                  style={{
                    transform: isHovered
                      ? "rotate(45deg) scale(1.1)"
                      : "rotate(0deg) scale(1)",
                  }}
                >
                  <svg
                    className="w-4 h-4 text-lime-400 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Description Text */}
            <div className="text-gray-800 text-sm md:text-base leading-relaxed text-justify">
              <p>
                Dari detail sederhana sampai animasi unik yang interaktif, kami bantu brand kamu tampil lebih ekspresif. Visal yang bergerak, komunikatif, dan punya identitas sendiri.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
