import { StaticImageData } from "next/image";

export default interface Review {
    name: string;
    role: string;
    content: string;
    avatar: string | StaticImageData;
}
