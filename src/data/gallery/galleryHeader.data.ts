import img01 from "../../assets/images/Gellery/image-1.webp"
import img02 from "../../assets/images/Gellery/image-2.webp";
import img03 from "../../assets/images/Gellery/image-3.webp";
import img04 from "../../assets/images/Gellery/image-4.webp";
import img05 from "../../assets/images/Gellery/image-5.webp";
import img06 from "../../assets/images/Gellery/image-6.webp";
import img07 from "../../assets/images/Gellery/image-7.webp";
import img08 from "../../assets/images/Gellery/image-8.webp";
import img09 from "../../assets/images/Gellery/image-9.webp";
import img10 from "../../assets/images/Gellery/image-10.webp";
import img11 from "../../assets/images/Gellery/image-11.webp";
import img12 from "../../assets/images/Gellery/image-12.webp";
import img13 from "../../assets/images/Gellery/image-13.webp";
import img14 from "../../assets/images/Gellery/image-14.webp";
import img15 from "../../assets/images/Gellery/image-15.webp";
import img16 from "../../assets/images/Gellery/image-16.webp";
import img17 from "../../assets/images/Gellery/image-17.webp";
import img18 from "../../assets/images/Gellery/image-18.webp";
import img19 from "../../assets/images/Gellery/image-19.webp";
import img20 from "../../assets/images/Gellery/image-20.webp";
import img21 from "../../assets/images/Gellery/image-21.webp";
import img22 from "../../assets/images/Gellery/image-22.webp";
import img23 from "../../assets/images/Gellery/image-23.webp";
import img24 from "../../assets/images/Gellery/image-24.webp";
import img25 from "../../assets/images/Gellery/image-25.webp";
import img26 from "../../assets/images/Gellery/image-26.webp";
import img27 from "../../assets/images/Gellery/image-27.webp";
import img28 from "../../assets/images/Gellery/image-28.webp";
import img29 from "../../assets/images/Gellery/image-29.webp";
import img30 from "../../assets/images/Gellery/image-30.webp";
import img31 from "../../assets/images/Gellery/image-31.webp";
import img32 from "../../assets/images/Gellery/image-32.webp";
import img33 from "../../assets/images/Gellery/image-33.webp";
import img34 from "../../assets/images/Gellery/image-34.webp";
import img35 from "../../assets/images/Gellery/image-35.webp";
import img36 from "../../assets/images/Gellery/image-36.webp";
import img37 from "../../assets/images/Gellery/image-37.webp";
import img38 from "../../assets/images/Gellery/image-38.webp";
import img39 from "../../assets/images/Gellery/image-39.webp";
import img40 from "../../assets/images/Gellery/image-40.webp";
import img41 from "../../assets/images/Gellery/image-41.webp";
import img42 from "../../assets/images/Gellery/image-42.webp";
import img43 from "../../assets/images/Gellery/image-43.webp";
import img44 from "../../assets/images/Gellery/image-44.webp";
import img45 from "../../assets/images/Gellery/image-45.webp";
import img46 from "../../assets/images/Gellery/image-46.webp";
import img47 from "../../assets/images/Gellery/image-47.webp";

export const GALLERY_HEADER_DATA = {
  eyebrow: "A Visual Journey",
  title: "The",
  titleAccent: "Gallery",
  description:
    "Step into our restaurants, dishes, and the moments that make Malabar Coast, Malabar Coast.",
  image: img04,
};

export const GALLERY_FILTERS = ["all", "summer", "food", "drinks", "ambiance"];

export type GalleryCategory = (typeof GALLERY_FILTERS)[number];

export const GALLERY_IMAGES: { src: string; alt: string; category: Exclude<GalleryCategory, "all"> }[] = [
  { src: img01, alt: "Image", category: "" },
  { src: img02, alt: "Image", category: "" },
  { src: img03, alt: "Image", category: "" },
  { src: img04, alt: "Image", category: "" },
  { src: img05, alt: "Image", category: "" },
  { src: img06, alt: "Image", category: "" },
  { src: img07, alt: "Image", category: "" },
  { src: img08, alt: "Image", category: "" },
  { src: img09, alt: "Image", category: "" },
  { src: img10, alt: "Image", category: "" },
  { src: img11, alt: "Image", category: "" },
  { src: img12, alt: "Image", category: "" },
  { src: img13, alt: "Image", category: "" },
  { src: img14, alt: "Image", category: "" },
  { src: img15, alt: "Image", category: "" },
  { src: img16, alt: "Image", category: "" },
  { src: img17, alt: "Image", category: "" },
  { src: img18, alt: "Image", category: "" },
  { src: img19, alt: "Image", category: "" },
  { src: img20, alt: "Image", category: "" },
  { src: img21, alt: "Image", category: "" },
  { src: img22, alt: "Image", category: "" },
  { src: img23, alt: "Image", category: "" },
  { src: img24, alt: "Image", category: "" },
  { src: img25, alt: "Image", category: "" },
  { src: img26, alt: "Image", category: "" },
  { src: img27, alt: "Image", category: "" },
  { src: img28, alt: "Image", category: "" },
  { src: img29, alt: "Image", category: "" },
  { src: img30, alt: "Image", category: "" },
  { src: img31, alt: "Image", category: "" },
  { src: img32, alt: "Image", category: "" },
  { src: img33, alt: "Image", category: "" },
  { src: img34, alt: "Image", category: "" },
  { src: img35, alt: "Image", category: "" },
  { src: img36, alt: "Image", category: "" },
  { src: img37, alt: "Image", category: "" },
  { src: img38, alt: "Image", category: "" },
  { src: img39, alt: "Image", category: "" },
  { src: img40, alt: "Image", category: "" },
  { src: img41, alt: "Image", category: "" },
  { src: img42, alt: "Image", category: "" },
  { src: img43, alt: "Image", category: "" },
  { src: img44, alt: "Image", category: "" },
  { src: img45, alt: "Image", category: "" },
  { src: img46, alt: "Image", category: "" },
  { src: img47, alt: "Image", category: "" },
];
