
// Central image asset map. Keys match the `image` fields used across data/site.ts
import DrArundhati from "../components/assets/Dr.-Arundhati.png";
import DrAbhijit from "../components/assets/Dr-Abhijit.png";
import DrRajender from "../components/assets/Dr.-Rajender.png";
import Heroimage from "../components/assets/hero-section.png";
import AboutImage from "../../public/Home-section-Image.jpg"
import Maa1 from "../../public/renu-gogoi.jpg";
import Maa2 from "../../public/renu-handique.jpg";
import Maa3 from "../../public/renu-tamuli.jpg";
export const IMAGES: Record<string, string> = {
  IMG_HERO_DOCTOR: Heroimage,
IMG_ABOUT: AboutImage,
  IMG_SERVICE: "/389e398f-b81d-48fd-9712-879355eab034.jpg",

  IMG_DOC_RENU: DrArundhati,
  IMG_DOC_ARJUN: DrAbhijit,
  IMG_DOC_PRIYA: DrRajender,

   // Founders ke liye images add kiye (About page ke liye)
  FOUNDER_1: Maa1,
  FOUNDER_2: Maa2,
  FOUNDER_3: Maa3,
  
  IMG_BLOG1: "/e7bf433d-ee54-4bef-86c0-4b2d4bfe407e.jpg",
  IMG_BLOG2: "/c0c53917-3395-4fa8-8eb5-30a3670b9f20.jpg",
  IMG_BLOG3: "/59b75085-9f56-4014-ad1a-d7476e3018e9.jpg"
};

// Doctor images resolve directly; service/blog images fall back to a shared visual.
export function img(key: string): string {
  if (IMAGES[key]) return IMAGES[key];
  if (key.startsWith('IMG_DOC')) return IMAGES.IMG_DOC_RENU;
  if (key.startsWith('IMG_BLOG')) return IMAGES.IMG_BLOG1;
  if (key.startsWith('IMG_T')) return IMAGES.IMG_ABOUT;
  return IMAGES.IMG_SERVICE;
}