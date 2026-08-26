import CraftedDrinksCarousel from "../../components/pages/Home/Crafteddrinkscarousel";
import FoodStories from "../../components/pages/Home/FoodStories";
import HeroScroller from "../../components/pages/Home/HeroScroller";
// import NewsletterSignup from "../../components/pages/Home/Newslettersignup";
import RestaurantsSection from "../../components/pages/Home/RestaurantsSection/RestaurantsSection";
import SignatureDishes from "../../components/pages/Home/SignatureDishes";
import Testimonials from "../../components/pages/Home/Testimonials";
import WhyChoose from "../../components/pages/Home/Whychoose";

const Home = () => (
  <>
    <HeroScroller />
    <RestaurantsSection />
    <SignatureDishes />
    <CraftedDrinksCarousel />
    <FoodStories />
    <WhyChoose />
    <Testimonials />
    {/* <NewsletterSignup /> */}
  </>
);

export default Home;
