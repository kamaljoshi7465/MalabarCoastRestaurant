import img01 from "../../assets/images/Gellery/gallery_01.webp"
import img02 from "../../assets/images/Gellery/gallery_02.webp";
import img03 from "../../assets/images/Gellery/gallery_03.webp";
import img04 from "../../assets/images/Gellery/gallery_04.webp";
import img05 from "../../assets/images/Gellery/gallery_05.webp";
import img06 from "../../assets/images/Gellery/gallery_06.webp";
import img07 from "../../assets/images/Gellery/gallery_07.webp";
import img08 from "../../assets/images/Gellery/gallery_08.webp";
import img09 from "../../assets/images/Gellery/gallery_09.webp";
import img10 from "../../assets/images/Gellery/gallery_10.webp";
import img11 from "../../assets/images/Gellery/gallery_11.webp";
import img12 from "../../assets/images/Gellery/gallery_12.webp";
import img13 from "../../assets/images/Gellery/gallery_13.webp";
import img14 from "../../assets/images/Gellery/gallery_14.webp";
import img15 from "../../assets/images/Gellery/gallery_15.webp";
import img16 from "../../assets/images/Gellery/gallery_16.webp";
import img17 from "../../assets/images/Gellery/gallery_17.webp";
import img18 from "../../assets/images/Gellery/gallery_18.webp";
import img19 from "../../assets/images/Gellery/gallery_19.webp";
import img20 from "../../assets/images/Gellery/gallery_20.webp";
import img21 from "../../assets/images/Gellery/gallery_21.webp";
import img22 from "../../assets/images/Gellery/gallery_22.webp";
import img23 from "../../assets/images/Gellery/gallery_23.webp";
import img24 from "../../assets/images/Gellery/gallery_24.webp";
import img25 from "../../assets/images/Gellery/gallery_25.webp";
import img26 from "../../assets/images/Gellery/gallery_26.webp";
import img27 from "../../assets/images/Gellery/gallery_27.webp";
import img28 from "../../assets/images/Gellery/gallery_28.webp";
import img29 from "../../assets/images/Gellery/gallery_29.webp";
import img30 from "../../assets/images/Gellery/gallery_30.webp";
import img31 from "../../assets/images/Gellery/gallery_31.webp";
import img32 from "../../assets/images/Gellery/gallery_32.webp";
import img33 from "../../assets/images/Gellery/gallery_33.webp";
import img34 from "../../assets/images/Gellery/gallery_34.webp";
import img35 from "../../assets/images/Gellery/gallery_35.webp";
import img36 from "../../assets/images/Gellery/gallery_36.webp";
import img37 from "../../assets/images/Gellery/gallery_37.webp";
import img38 from "../../assets/images/Gellery/gallery_38.webp";
import img39 from "../../assets/images/Gellery/gallery_39.webp";
import img40 from "../../assets/images/Gellery/gallery_40.webp";
import img41 from "../../assets/images/Gellery/gallery_41.webp";
import img42 from "../../assets/images/Gellery/gallery_42.webp";
import img43 from "../../assets/images/Gellery/gallery_43.webp";
import img44 from "../../assets/images/Gellery/gallery_44.webp";
import img45 from "../../assets/images/Gellery/gallery_45.webp";
import img46 from "../../assets/images/Gellery/gallery_46.webp";
import img47 from "../../assets/images/Gellery/gallery_47.webp";
import img48 from "../../assets/images/Gellery/gallery_48.webp";
import img49 from "../../assets/images/Gellery/gallery_49.webp";
import img50 from "../../assets/images/Gellery/gallery_50.webp";
import img51 from "../../assets/images/Gellery/gallery_51.webp";
import img52 from "../../assets/images/Gellery/gallery_52.webp";
import img53 from "../../assets/images/Gellery/gallery_53.webp";
import img54 from "../../assets/images/Gellery/gallery_54.webp";
import img55 from "../../assets/images/Gellery/gallery_55.webp";
import img56 from "../../assets/images/Gellery/gallery_56.webp";
import img57 from "../../assets/images/Gellery/gallery_57.webp";
import img58 from "../../assets/images/Gellery/gallery_58.webp";
import img59 from "../../assets/images/Gellery/gallery_59.webp";
import img60 from "../../assets/images/Gellery/gallery_60.webp";
import img61 from "../../assets/images/Gellery/gallery_61.webp";
import img62 from "../../assets/images/Gellery/gallery_62.webp";
import img63 from "../../assets/images/Gellery/gallery_63.webp";
import img64 from "../../assets/images/Gellery/gallery_64.webp";
import img65 from "../../assets/images/Gellery/gallery_65.webp";
import img66 from "../../assets/images/Gellery/gallery_66.webp";
import img67 from "../../assets/images/Gellery/gallery_67.webp";
import img68 from "../../assets/images/Gellery/gallery_68.webp";
import img69 from "../../assets/images/Gellery/gallery_69.webp";
import img70 from "../../assets/images/Gellery/gallery_70.webp";

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
  { src: img48, alt: "Image", category: "" },
  { src: img49, alt: "Image", category: "" },
  { src: img50, alt: "Image", category: "" },
  { src: img51, alt: "Image", category: "" },
  { src: img52, alt: "Image", category: "" },
  { src: img53, alt: "Image", category: "" },
  { src: img54, alt: "Image", category: "" },
  { src: img55, alt: "Image", category: "" },
  { src: img56, alt: "Image", category: "" },
  { src: img57, alt: "Image", category: "" },
  { src: img58, alt: "Image", category: "" },
  { src: img59, alt: "Image", category: "" },
  { src: img60, alt: "Image", category: "" },
  { src: img61, alt: "Image", category: "" },
  { src: img62, alt: "Image", category: "" },
  { src: img63, alt: "Image", category: "" },
  { src: img64, alt: "Image", category: "" },
  { src: img65, alt: "Image", category: "" },
  { src: img66, alt: "Image", category: "" },
  { src: img67, alt: "Image", category: "" },
  { src: img68, alt: "Image", category: "" },
  { src: img69, alt: "Image", category: "" },
  { src: img70, alt: "Image", category: "" },
];
