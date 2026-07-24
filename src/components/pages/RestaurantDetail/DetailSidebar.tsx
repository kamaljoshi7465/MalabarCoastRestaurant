import type { Restaurant } from "../../../data/restaurants/restaurantsPage.data";

const DetailSidebar = ({ restaurant }: { restaurant: Restaurant }) => (
  <div className="lg:col-span-1 space-y-6">
    {/* Contact Information */}
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mt-1 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Address</p>
            <p className="text-sm text-gray-600">{restaurant.address}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mt-1 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
            <a href={`tel:${restaurant.phone}`} className="text-sm text-primary-600 hover:underline">{restaurant.phone}</a>
          </div>
        </div>
        {restaurant.email && (
          <div className="flex items-start space-x-3">
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 mt-1 flex-shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
              <a href={`mailto:${restaurant.email}`} className="text-sm text-primary-600 hover:underline">{restaurant.email}</a>
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Opening Hours */}
    {restaurant.hours && (
      <div className="bg-white rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Opening Hours</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-semibold text-gray-900">Monday - Friday</p>
            <p className="text-sm text-gray-600">{restaurant.hours.weekday}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-900">Saturday - Sunday</p>
            <p className="text-sm text-gray-600">{restaurant.hours.weekend}</p>
          </div>
        </div>
      </div>
    )}

    {/* Amenities */}
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">Amenities</h2>
      <div className="flex flex-wrap gap-2">
        {restaurant.amenities.map((a) => (
          <span key={a} className="px-3 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium">{a}</span>
        ))}
      </div>
    </div>

    {/* Specialties */}
    <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-primary-50 rounded-xl p-6 shadow-md border border-gold-200">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gold-200/30 to-transparent rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary-200/30 to-transparent rounded-full blur-xl" />
      <div className="relative">
        <div className="flex items-center space-x-2 mb-4">
          <svg className="w-6 h-6 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <h2 className="text-2xl font-serif font-bold text-gray-900">Our Specialties</h2>
        </div>
        <p className="text-sm text-gray-600 mb-6">Signature dishes that define our culinary excellence</p>
        <div className="grid grid-cols-1 gap-3">
          {restaurant.specialties.map((s, i) => (
            <div key={s} className="group relative bg-white/60 backdrop-blur-sm hover:bg-white/80 rounded-lg p-4 transition-all duration-300 hover:shadow-md border border-gold-100/50 hover:border-gold-300">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-primary-500 flex items-center justify-center shadow-sm">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-base font-semibold text-gray-800 group-hover:text-primary-700 transition-colors">{s}</p>
                  <div className="mt-1 h-0.5 bg-gradient-to-r from-gold-400 to-transparent w-0 group-hover:w-full transition-all duration-500" />
                </div>
                <svg className="w-5 h-5 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gold-200/50">
          <p className="text-xs text-center text-gray-500 italic">Chef's recommendations - must try!</p>
        </div>
      </div>
    </div>
  </div>
);

export default DetailSidebar;
