import Review from "@/types/review";
import Image from "next/image";
interface ReviewCardProps {
    review:Review;
}

export default function ReviewCard({review}:ReviewCardProps) {
    const {name, role, content, avatar} = review;

    return(
        <div className="border-colorPrimary bg-colorPrimary/40 group  relative p-6 rounded-2xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border hover:border-white/30">
            <div className=" inset-0 bg-linear-to-r rounded-2xl  group-hover:opacity-100 transition-opacity duration-500">
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="relative ">
                            <div className="rounded-full bg-linear-to-r from-blue400 to-purple-500 p-0.5">
                                <Image src={avatar} alt={name} width={48} height={48} className="w-full h-full rounded-full object-cover bg-gray-900" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 "></div>
                        </div>
                        <div className="">
                            <h3 className="font-semibold text-black">{name}</h3>
                            <p className="text-sm text-black/60">{role}</p>
                        </div>
                    </div>
                </div>
                <p className="text-black/80 text-justify leading-relaxed line-clamp">{content}</p>
            </div>
            </div>
        </div>
    )
}