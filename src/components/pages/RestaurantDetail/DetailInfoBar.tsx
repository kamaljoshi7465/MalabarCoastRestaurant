import { Link } from "react-router-dom";
import type { Restaurant } from "../../../data/restaurants/restaurantsPage.data";

const DetailInfoBar = ({ restaurant }: { restaurant: Restaurant }) => (
  <section className="bg-white shadow-md sticky top-20 z-40">
    <div className="container-custom py-4">
      <div className="flex flex-wrap gap-6 justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-700">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span className="text-sm font-medium">{restaurant.location}</span>
        </div>
        {restaurant.hours && (
          <div className="flex items-center space-x-2 text-gray-700">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="text-sm font-medium">{restaurant.hours.weekday}</span>
          </div>
        )}
        <Link to={`/reservations?outlet=${restaurant.slug}`} className="btn-primary">Book Table</Link>
      </div>
    </div>
  </section>
);

export default DetailInfoBar;
