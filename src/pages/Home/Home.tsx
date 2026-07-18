import CraftedDrinksCarousel from "../../components/pages/Home/Crafteddrinkscarousel";
import HeroScroller from "../../components/pages/Home/HeroScroller";
import RestaurantsSection from "../../components/pages/Home/RestaurantsSection/RestaurantsSection";
import SignatureDishes from "../../components/pages/Home/SignatureDishes";

const Home = () => (
  <>
    <HeroScroller />
    <RestaurantsSection />
    <SignatureDishes />
    <CraftedDrinksCarousel />
  </>
);

export default Home;
