import type { OutletMenus } from "../../../data/Menu/Outlets.data";
import type { Restaurant } from "../../../data/restaurants/restaurantsPage.data";

type Props = { restaurant: Restaurant; menus: OutletMenus | null };

type MenuCardProps = { href: string | null; title: string; description: string; icon: React.ReactNode };

const MenuCard = ({ href, title, description, icon }: MenuCardProps) => {
  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-white/20 rounded-lg">{icon}</div>
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white/70 group-hover:text-white transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <div className="flex items-center text-white font-semibold text-sm">
        <span>View Menu</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </>
  );

  const cls = "bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white hover:bg-white/20 rounded-xl p-6 transition-all duration-300 group";

  return href
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{content}</a>
    : <div className={`${cls} opacity-50 cursor-not-allowed`}>{content}</div>;
};

const DetailContent = ({ restaurant, menus }: Props) => (
  <div className="lg:col-span-2 space-y-6">
    {/* Menus */}
    <div className="bg-gradient-to-br from-primary-600 to-gold-600 rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-serif font-bold text-white mb-2">Our Menus</h2>
      <p className="text-white/80 text-sm mb-6">Explore our food and drink offerings</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MenuCard
          href={menus?.food ?? null}
          title="Food Menu"
          description="Explore our delicious food offerings, from appetizers to desserts"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          }
        />
        <MenuCard
          href={menus?.drink ?? null}
          title="Drink Menu"
          description="Discover our signature cocktails, wines, and beverages"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          }
        />
        <MenuCard
          href={menus?.botanical ?? null}
          title="Botanical Menu"
          description="Fresh seasonal flavours inspired by nature"
          icon={
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          }
        />
      </div>
    </div>

    {/* Order Online */}
    {(restaurant.swiggyUrl || restaurant.zomatoUrl) && (
      <div className="bg-white rounded-xl p-6 shadow-md border-2 border-primary-100">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-2">Order Online</h2>
        <p className="text-gray-600 text-sm mb-6">Get your favorite dishes delivered to your doorstep</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurant.swiggyUrl && (
            <a href={restaurant.swiggyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-[#ff5707] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group">
              <div className="flex items-center space-x-3">
                <img src="https://cdn.anardana.in/logos/partners/swiggy_logo.png" alt="Swiggy" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-lg font-bold text-white">Swiggy</h3>
                  <p className="text-white/80 text-xs">Order Now</p>
                </div>
              </div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white text-xl group-hover:translate-x-1 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
          {restaurant.zomatoUrl && (
            <a href={restaurant.zomatoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-[#ff3044] rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group">
              <div className="flex items-center space-x-3">
                <img src="https://cdn.anardana.in/logos/partners/zomato_logo.png" alt="Zomato" className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-lg font-bold text-white">Zomato</h3>
                  <p className="text-white/80 text-xs">Order Now</p>
                </div>
              </div>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-white text-xl group-hover:translate-x-1 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    )}

    {/* Gallery */}
    {restaurant.gallery && restaurant.gallery.length > 0 && (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {restaurant.gallery.map((src, i) => (
            <div key={i} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <img src={src} alt={`${restaurant.name} - Image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">Click to enlarge</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default DetailContent;
