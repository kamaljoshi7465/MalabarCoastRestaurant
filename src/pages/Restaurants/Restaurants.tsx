import { useState } from "react";
import RestaurantsHeader from "../../components/pages/Restaurants/RestaurantsHeader";
import RestaurantsFilters from "../../components/pages/Restaurants/RestaurantsFilters";
import RestaurantCards from "../../components/pages/Restaurants/RestaurantCards";
import UpcomingRestaurants from "../../components/pages/Restaurants/UpcomingRestaurants";

const Restaurants = () => {
  const [city, setCity] = useState("All");
  const [vibe, setVibe] = useState("All");
  return <>
    <RestaurantsHeader />
    <RestaurantsFilters city={city} vibe={vibe} onCityChange={setCity} onVibeChange={setVibe} />
    <RestaurantCards city={city} vibe={vibe} />
    <UpcomingRestaurants /></>;
};

export default Restaurants;
