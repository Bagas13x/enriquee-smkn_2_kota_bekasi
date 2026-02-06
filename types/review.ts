import { StaticImageData } from "next/image";

export interface Review {
    name:string ,
    role:string, 
    content:string,
    avatar:StaticImageData
}
