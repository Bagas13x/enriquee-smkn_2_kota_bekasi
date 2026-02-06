import Profile from '@/public/assets/images/review/profile.webp'
import ReviewCard from "@/components/ui/review-card";
import Profile1 from '@/public/assets/images/review/avatar-1.webp'
import Profile2 from '@/public/assets/images/review/avatar-2.webp'


export default function ReviewPage() {
    const reviews = [
        {
            name: "Afis Rizky",
            role: "Konten Kreator",
            content: "Wow Desain di sini sangat keren dan profesional! Saya sangat puas dengan hasilnya. Terima kasih banyak!",
            avatar: Profile
        },
         {
            name: "Falah Maulina",
            role: "Business Owner",
            content: "Ini adalah layanan yang luar biasa! Sangat direkomendasikan. dan juga sangat membantu saya dalam mengembangkan proyek saya. serta timnya sangat responsif dan profesional.",
            avatar: Profile1
        },
         {
            name: "Fatiah Nurul",
            role: "Business Owner",
            content: "Ini adalah pengalaman terbaik yang pernah saya miliki dengan sebuah layanan desain. Hasilnya melebihi harapan saya! dan juga sangat membantu saya dalam mengembangkan bisnis saya.",
            avatar: Profile2
        },
        {
            name: "Afis Rizky",
            role: "Konten Kreator",
            content: "Wow Desain di sini sangat keren dan profesional! Saya sangat puas dengan hasilnya. Terima kasih banyak!",
            avatar: Profile
        },
         {
            name: "Falah Maulina",
            role: "Business Owner",
            content: "Ini adalah layanan yang luar biasa! Sangat direkomendasikan. dan juga sangat membantu saya dalam mengembangkan proyek saya. serta timnya sangat responsif dan profesional.",
            avatar: Profile1
        },
         {
            name: "Fatiah Nurul",
            role: "Business Owner",
            content: "Ini adalah pengalaman terbaik yang pernah saya miliki dengan sebuah layanan desain. Hasilnya melebihi harapan saya! dan juga sangat membantu saya dalam mengembangkan bisnis saya.",
            avatar: Profile2
        }
    ]
    return (
        <>
        <div className="px-4 my-10" id="testimonials">
            <div className="flex flex-col text-center justify-center mt-10">
                <div className="px-2 mb-4 py-1 bg-colorPrimary/70 rounded-full backdrop-blur-2xl w-fit mx-auto">
                    <p className="text-lime-500 font-bold ">Testimoni</p>
                </div>
                <h1 className="font-extrabold text-5xl">Kata Klien Kami</h1>
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {reviews.map((review, index) => (
                       <ReviewCard key={index} review={review} />
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}