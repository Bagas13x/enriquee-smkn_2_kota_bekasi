"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function About() {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white" id="about">
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

              
                
                  
                </div>
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
  );
}
