import { Service } from "@/types/services"
import { title } from "process"
import ServiceCard from "./ui/service-card"
import ServiceImage from '@/public/assets/images/service-image.webp'
export default function Services() {
    const servicesm: Service[] = [
        {
            title: "web development",
            description: "lorem ipsum dolor sit amet",
            image: ServiceImage,
            category: ["web", "development"]
        },
        {
            title: "web development",
            description: "lorem ipsum dolor sit amet",
            image: ServiceImage,
            category: ["web", "development"]
        }
    ]
    return (
        <>
            <div className="relative overflow-hidden bg-black min-h-screen px-4 py-6">
                <div className="m-10">
                    <div className="flex items-center justify-center space-x-4 relative z-0 ">
                        <h1 className="relative z-0 text-colorPrimary text-2xl font-bold text-center md:text-5xl">Layanan Kami</h1>
                    </div>
                    <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4"> Kami menawarkan beberapa jasa untuk memnuhi kebutuhan anda. Jelajahi Layanan kami di bawah ini dan Temukan bagaimana kami dapat memnuhi kebutuhan anda.</p>
                    <div className="-top-20 -left-20 absolute pointer-events-none rounded-full border-[120px] border-b-emerald-400 border-l-colorPrimary border-t-emerald-300 blur-[240px]"></div>
                    <div className="-top-20 -right-20 absolute pointer-events-none rounded-full border-[120px] border-b-emerald-400 border-l-colorPrimary border-t-emerald-300 blur-[240px]"></div>
                </div>
                <div className="mt-20">
                    {servicesm.map((service, index) => (
                        <ServiceCard service={service} key={index}/>
                    ))}
                </div>
            </div>
        </>
    )
}