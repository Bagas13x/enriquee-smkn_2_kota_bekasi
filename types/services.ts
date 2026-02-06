import { StaticImageData } from "next/image";

export interface Service {
    title:string;
    description:string;
    image:string | StaticImageData;
    category?:string[];
}