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
    <div className="flex-shrink-0 w-full px-3 md:w-1/3">
      <div className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative h-80 overflow-hidden">
          <img
            src={drink.image}
            alt={drink.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="absolute right-4 top-4">
            <span className="rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {drink.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="mb-2 text-2xl font-bold text-white">{drink.name}</h3>
            <p className="text-sm text-white/90" />
          </div>
        </div>
      </div>
    </div>
  );
}
