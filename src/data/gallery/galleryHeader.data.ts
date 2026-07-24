export const GALLERY_HEADER_DATA = {
  eyebrow: "A Visual Journey",
  title: "The",
  titleAccent: "Gallery",
  description:
    "Step into our restaurants, dishes, and the moments that make Malabar Coast, Malabar Coast.",
  image: "https://cdn.anardana.in/images/gallery/food/Malabar Coast%20Food%20Group%2001.jpg",
};

export const GALLERY_FILTERS = ["all", "summer", "food", "drinks", "ambiance"];

export type GalleryCategory = (typeof GALLERY_FILTERS)[number];

export const GALLERY_IMAGES: { src: string; alt: string; category: Exclude<GalleryCategory, "all"> }[] = [
  { src: "https://cdn.anardana.in/images/gallery/food/Momos%20Platter.webp", alt: "Momos Platter", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/food/KNVT1397-1-scaled.jpg", alt: "Special Platter", category: "food" },
  { src: "https://cdn.anardana.in/images/outlets/mid-town/601c6900-602b-4522-a649-efbebc47559f.webp", alt: "Malabar Coast DLF MidTown Plaza", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/outlets/m3m/f0d72c96-deae-4b9a-917c-062fe099b2c8.webp", alt: "Malabar Coast M3M IFC", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/outlets/chd/DSC03953-HDR%20Topaz%20Bloom%202x%20scale.jpg", alt: "Malabar Coast City Emporium Mall", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/gallery/food/Chicken%20Hakka%20Noodles.JPG", alt: "Chicken Hakka Noodles", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/food/05.jpg", alt: "Curry Special", category: "summer" },
  { src: "https://cdn.anardana.in/images/gallery/drinks/Flowers-Berry-Sangria.jpg", alt: "Flowers Berry Sangria", category: "drinks" },
  { src: "https://cdn.anardana.in/images/gallery/food/Chicken%20Khruchan%20Bao%20Taco.JPG", alt: "Chicken Khruchan Bao Taco", category: "food" },
  { src: "https://cdn.anardana.in/images/outlets/ranchi/ae99c045-504f-4867-bf68-1734e9a773d2.webp", alt: "Malabar Coast Ranchi", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/gallery/food/Dal%20Muradabadi.webp", alt: "Dal Muradabadi", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/food/Bombay%20Kulfi.webp", alt: "Bombay Kulfi", category: "summer" },
  { src: "https://cdn.anardana.in/images/gallery/food/Honey%20Chilli%20Pops.jpg", alt: "Honey Chilli Pops", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/food/Gulkand%20Paan%20Tikki.JPG", alt: "Gulkand Paan Tikki", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/drinks/Smoked%20Old%20Fashioned.webp", alt: "Smoked Old Fashioned", category: "drinks" },
  { src: "https://cdn.anardana.in/images/gallery/food/Dal%20Makhani.jpg", alt: "Dal Makhani", category: "food" },
  { src: "https://cdn.anardana.in/images/outlets/mid-town/32a8a357-1c6f-4654-b102-eb72b1a0ef5e.webp", alt: "Malabar Coast DLF MidTown Plaza", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/gallery/drinks/Spice%20Route%20Mule.webp", alt: "Spice Route Mule", category: "drinks" },
  { src: "https://cdn.anardana.in/images/gallery/food/25.jpg", alt: "Regional Specialty", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/food/Nutri%20Keema%20Kaleji.webp", alt: "Nutri Keema Kaleji", category: "food" },
  { src: "https://cdn.anardana.in/images/gallery/drinks/Citrus%20Flower%20Gem.webp", alt: "Citrus Flower Gem", category: "drinks" },
  { src: "https://cdn.anardana.in/images/gallery/food/Beetroot%20Kakori%20Kebab%2002.webp", alt: "Beetroot Kakori Kebab", category: "food" },
  { src: "https://cdn.anardana.in/images/outlets/vasant-kunj/de5bb9bf-0698-4efc-b312-fe8f0d73a264.webp", alt: "Malabar Coast Ambience Mall", category: "ambiance" },
  { src: "https://cdn.anardana.in/images/gallery/drinks/01-2.jpg", alt: "Signature Cocktail", category: "drinks" },
];
