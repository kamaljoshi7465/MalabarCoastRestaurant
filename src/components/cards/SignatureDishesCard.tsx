import type { FC } from "react";
import { TAG_STYLES, type Dish } from "../../data/home/signatureDishes/signatureDishes.data";
import TagButton from "../buttons/TagButton";

interface DishCardProps {
  dish: Dish;
  delayMs: number;
}

const DishCard: FC<DishCardProps> = ({ dish, delayMs }) => (
  <div className="card group overflow-hidden" style={{ animationDelay: `${delayMs}ms` }}>
    <div className="relative h-72 overflow-hidden">
      <img
        src={dish.image}
        alt={dish.name}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute left-3 top-3">
        <TagButton text="Signature" className="bg-gold-500 text-white" />
      </div>
    </div>

    <div className="p-4">
      <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-primary-600">
        {dish.name}
      </h3>
      <p className="mb-3 text-xs text-gray-600 line-clamp-3">{dish.description}</p>
      <div className="flex flex-wrap gap-1.5">
        <div className="flex flex-wrap gap-2">
          <div className="flex flex-wrap gap-1.5">
            {dish.tag.map((t) => (
              <TagButton key={t} text={t} className={`${TAG_STYLES[t]} capitalize`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DishCard;
