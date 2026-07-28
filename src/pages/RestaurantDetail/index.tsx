import { useParams, Link } from "react-router-dom";
import { OUTLETS_DATA } from "../../data/Menu/Outlets.data";
import DetailHero from "../../components/pages/RestaurantDetail/DetailHero";
import DetailInfoBar from "../../components/pages/RestaurantDetail/DetailInfoBar";
import DetailSidebar from "../../components/pages/RestaurantDetail/DetailSidebar";
import DetailContent from "../../components/pages/RestaurantDetail/DetailContent";
import { OUTLETS } from "../../data/home/restaurant/RestaurantsSection.data";

const RestaurantDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const restaurant = OUTLETS.find((r) => r.slug === slug);

  if (!restaurant) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <h1 className="font-serif text-3xl font-bold text-primary-600">Restaurant Not Found</h1>
        <p className="text-gray-500">We couldn't find a restaurant with that name.</p>
        <Link to="/restaurants" className="rounded-lg bg-primary-600 px-6 py-2 text-white hover:bg-primary-700">Back to Restaurants</Link>
      </div>
    );
  }

  const outlet = OUTLETS_DATA.find((o) => o.outletUrl === `/restaurants/${slug}`);

  return (
    <div className="min-h-screen bg-gray-50">
      <DetailHero restaurant={restaurant} />
      <DetailInfoBar restaurant={restaurant} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <DetailSidebar restaurant={restaurant} />
            <DetailContent restaurant={restaurant} menus={outlet?.menus ?? null} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
