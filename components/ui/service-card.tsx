import { Service } from "@/types/services"
import Image from "next/image"
interface ServiceCardProps {
    service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { description, image, title, category } = service;
    return (
        <>
            <div className="group relative flex flex-col md:flex-row w-full md:max-w-3xl my-6 mx-auto p-1 bg-linear-to-bl from-white/10 to-transparent rounded-[2rem] border border-white/10 transition-all duration-500 hover:border-colorPrimary/50">
                <div className=" flex flex-col md:flex-row items-center w-full bg-[#0a0a0a]/80 backdrop-blur-3xl rounded-[1.9rem] p-5 gap-6">
                    <div className="relative size-40 rounded-2xl">
                        <Image src={image} alt={title} width={400} height={400} className="rounded-2xl object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />

                        <div className="absolute w-full inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-transform transition-opacity duration-500 group-hover:scale-110"></div>
                    </div>
                    <div className="flex-1 space-y-3">
                        <div className="flex flex-warp  gap-2">
                            {
                                category && category.map((cat, index) => (
                                    <span key={index} className= "px-3 py-1 text-[10px] uppercase tracking-wider font-bold bg-colorPrimary/20  text-colorPrimary border border-colorPrimary/30 rounded-full">{cat}</span>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex justify-between  items-start">
                        <h2 className="text-2xl font-bold bg-linear-to-r from-white to-lime-300/60 bg-clip-text text-transparent group-hover:text-colorPrimary transition-colors  ">{title}</h2>
                    </div>
                </div>


            </div>
        </>
    )
}