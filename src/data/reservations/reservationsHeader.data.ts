import { OUTLETS } from "../home/restaurant/RestaurantsSection.data";
import BaseImage from "../../assets/images/Home/Hero/malabar-hero-1.webp";
import Image1 from "../../assets/images/Restaurents/gurugram.webp";
import Image2 from "../../assets/images/Restaurents/noida.webp";
import Image3 from "../../assets/images/Restaurents/indore.webp";

export const RESERVATIONS_HEADER_DATA = {
  eyebrow: "Malabar Coast",
  title: "Reserve Your",
  titleAccent: "Table",
  description: `Book your dining experience at any of our ${OUTLETS.length} unique restaurants`,
  caption: "Crafted with passion since 2019",
  backgroundImage: BaseImage,
  galleryImages: [
    Image1,
    Image2,
    Image3,
  ],
};
