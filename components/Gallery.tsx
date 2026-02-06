"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const GALLERY_CONFIG = {
  gap: 19,
  largeHeight: 530,
  smallHeight: 220,
  containerMaxWidth: 1400,
};

const Images = [
  { src: "/assets/images/gallery/giphy1.gif", alt: "Gallery Image 1" },
  { src: "/assets/images/gallery/giphy2.gif", alt: "Gallery Image 2" },
  { src: "/assets/images/gallery/giphy3.gif", alt: "Gallery Image 3" },
  { src: "/assets/images/gallery/giphy4.gif", alt: "Gallery Image 4" },
  { src: "/assets/images/gallery/giphy10.gif", alt: "Gallery Image 5" },
  { src: "/assets/images/gallery/giphy8.gif", alt: "Gallery Image 6" },
  { src: "/assets/images/gallery/giphy9.gif", alt: "Gallery Image 7" },
];

export default function Gallery() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % Images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + Images.length) % Images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === "Escape") closeModal();
        else if (e.key === "ArrowRight") nextImage();
        else if (e.key === "ArrowLeft") prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="bg-white min-h-screen">
      <div
        style={{
          maxWidth: `${GALLERY_CONFIG.containerMaxWidth}px`,
          margin: "0 auto",
          padding: "2rem 1.5rem",
        }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
          Gallery
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(8, 1fr)",
            gap: `${GALLERY_CONFIG.gap}px`,
            width: "100%",
            marginBottom: "3rem",
            aspectRatio: "16 / 9",
          }}
        >
          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 2",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(0)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[0].src}
              alt={Images[0].alt}
              fill
              loading="eager"
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 2",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(1)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[1].src}
              alt={Images[1].alt}
              fill
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 2",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(2)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[2].src}
              alt={Images[2].alt}
              fill
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 2",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(3)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[3].src}
              alt={Images[3].alt}
              fill
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 4",
              gridRow: "span 1",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(4)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[4].src}
              alt={Images[4].alt}
              fill
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 1",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(5)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[5].src}
              alt={Images[5].alt}
              fill
              className="object-cover"
            />
          </div>

          <div
            style={{
              position: "relative",
              gridColumn: "span 2",
              gridRow: "span 1",
              borderRadius: "16px",
              overflow: "hidden",
              backgroundColor: "#e5e7eb",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
            onClick={() => openModal(6)}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            <Image
              src={Images[6].src}
              alt={Images[6].alt}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.push("#")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-lime-300/60 hover:bg-lime-300/80 backdrop-blur-md border border-lime-300 text-gray-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg text-sm md:text-base hover:scale-105 active:scale-95"
            style={{
              boxShadow: isHovered
                ? "inset 0 1px 2px rgba(255,255,255,0.5), 0 12px 40px rgba(190, 220, 55, 0.5)"
                : "inset 0 1px 2px rgba(255,255,255,0.5), 0 8px 32px rgba(190, 220, 55, 0.3)",
            }}
          >
            Selengkapnya
            <div
              className="bg-gray-900 rounded-full p-3 transition-all duration-300"
              style={{
                transform: isHovered
                  ? "translateY(4px) scale(1.1)"
                  : "translateY(0) scale(1)",
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
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </button>
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-400 transition"
              >
                ✕
              </button>

              <Image
                src={Images[selectedImage].src}
                alt={Images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />

              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-3xl hover:text-gray-400 transition hidden md:block"
              >
                ❮
              </button>

              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-3xl hover:text-gray-400 transition hidden md:block"
              >
                ❯
              </button>

              <div className="text-center text-white mt-4">
                {selectedImage + 1} / {Images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
