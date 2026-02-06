import { Service } from "@/types/services"
import { title } from "process"
import ServiceCard from "./ui/service-card"
import ServiceImage from '@/public/assets/images/service-image.webp'
import BukuCerita from '@/public/assets/images/buku_cerita_anak .webp'
import Mockup from '@/public/assets/images/mockup.webp'
import Poster from '@/public/assets/images/poster.webp'
import Hand from '@/public/assets/images/hand-writing.webp'

export default function Services() {
    const servicesm: Service[] = [
        {
            title: "Desain Buku Cerita Anak",
            description: "Kami menyediakan layanan desain buku cerita anak yang menarik dan edukatif. Tim kami akan bekerja sama dengan Anda untuk menciptakan ilustrasi yang memukau dan tata letak yang sesuai dengan usia target pembaca.",
            image: BukuCerita,
            category: ["desain", "Illustrasi"]
        },
        {
            title: "Mockup Desain",
            description: "Kami menawarkan layanan pembuatan mockup desain yang realistis untuk membantu Anda memvisualisasikan produk akhir sebelum produksi. Mockup kami dirancang dengan detail tinggi untuk memberikan gambaran yang jelas tentang bagaimana desain Anda akan terlihat di dunia nyata.",
            image: Mockup,
            category: ["Desain", "website"]
        },{
            title: "Desain Poster",
            description: "Kami menyediakan layanan desain poster yang kreatif dan menarik untuk berbagai keperluan, seperti promosi acara, iklan produk, atau kampanye sosial. Tim desainer kami akan bekerja sama dengan Anda untuk menciptakan poster yang efektif dalam menyampaikan pesan Anda kepada audiens target.",
            image: Poster,
            category: ["Desain", "Ilustrasi"]
        },
        {
            title: "Personal Commission Art",
            description: "Personalisasi seni komisi adalah layanan di mana Anda dapat memesan karya seni yang dibuat khusus sesuai dengan preferensi dan kebutuhan Anda. Tim seniman kami akan bekerja sama dengan Anda untuk menciptakan karya seni yang unik dan bermakna, mulai dari potret pribadi hingga ilustrasi khusus untuk proyek tertentu.",
            image: Hand,
            category: ["Desain", "Ilustrasi"]   
        }

    ]
    return (
        <>
        <div id="services">
            <div className="relative overflow-hidden bg-black min-h-screen px-4 py-2 md:py-6">
                <div className="m-4 md:m-10">
                    <div className="flex items-center justify-center space-x-4 relative z-0 ">
                        <h1 className="relative z-0 text-colorPrimary text-2xl font-bold text-center md:text-5xl">Layanan Kami</h1>
                    </div>
                    <p className="text-center text-gray-300 max-w-2xl mx-auto mt-4"> Kami menawarkan beberapa jasa untuk memnuhi kebutuhan anda. Jelajahi Layanan kami di bawah ini dan Temukan bagaimana kami dapat memnuhi kebutuhan anda.</p>
                    <div className="-top-20 -left-20 absolute pointer-events-none rounded-full border-[120px] border-b-emerald-400 border-l-colorPrimary border-t-emerald-300 blur-[240px]"></div>
                    <div className="-top-20 -right-20 absolute pointer-events-none rounded-full border-[120px] border-b-emerald-400 border-l-colorPrimary border-t-emerald-300 blur-[240px]"></div>
                </div>
                <div className="mt-6 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {(() => {
                        const half = Math.ceil(servicesm.length / 2);
                        const left = servicesm.slice(0, half);
                        const right = servicesm.slice(half);
                        return (
                            <>
                                <div className="flex flex-col gap-6">
                                    {left.map((service, index) => (
                                        <ServiceCard service={service} key={index} />
                                    ))}
                                </div>
                                <div className="flex flex-col gap-6">
                                    {right.map((service, index) => (
                                        <ServiceCard service={service} key={index + half} />
                                    ))}
                                </div>
                            </>
                        );
                    })()}
                </div>
            </div>
            </div>
        </>
    )
}