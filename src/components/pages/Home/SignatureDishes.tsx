import { dishes } from "../../../data/home/signatureDishes/signatureDishes.data";
import ViewMoreButton from "../../buttons/ViewMoreButton";
import DishCard from "../../cards/SignatureDishes/SignatureDishesCard";

const SignatureDishes = () => (
  <section className="bg-white px-4 py-12 md:px-8 lg:px-16 lg:py-16">
    <div className="container-custom">
      <div className="mb-10 text-center">
        <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
          Anardana Original&apos;s
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Discover our most celebrated creations, crafted with passion and inspired by traditional Indian flavors
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {dishes.map((dish, index) => (
          <DishCard key={dish.id} dish={dish} delayMs={index * 100} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <ViewMoreButton text="View Full Menu" href="/menu" />
      </div>
    </div>
  </section>
);

export default SignatureDishes;
