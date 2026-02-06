import { StaticImageData } from "next/image";

export interface Service {
    title:string;
    description:string;
    image:String | StaticImageData;
    category?:string[];
}