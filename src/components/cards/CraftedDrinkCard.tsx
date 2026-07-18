type Drink = {
  name: string;
  category: string;
  image: string;
};

type CraftedDrinkCardProps = {
  drink: Drink;
};

export default function CraftedDrinkCard({ drink }: CraftedDrinkCardProps) {
  return (
    <div className="w-1/3 flex-shrink-0 px-2">
      <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-32 overflow-hidden sm:h-40 md:h-56 lg:h-80">
          <img
            src={drink.image}
            alt={drink.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute right-2 top-2 sm:right-3 sm:top-3 lg:right-4 lg:top-4">
            <span className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-1.5 py-0.5 text-[8px] font-semibold text-white backdrop-blur-sm sm:px-2 sm:py-1 sm:text-[10px] lg:px-3 lg:py-1.5 lg:text-xs">
              {drink.category}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 lg:p-6">
            <h3 className="line-clamp-2 text-[10px] font-bold leading-tight text-white sm:text-sm md:text-lg lg:mb-2 lg:text-2xl">
              {drink.name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
