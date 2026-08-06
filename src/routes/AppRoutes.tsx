import { Routes, Route } from 'react-router-dom'

import MainLayout from "../layouts/MainLayout";

import Home from '../pages/Home'
import Menu from '../pages/Menu'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Gallery from '../pages/Gallery'
import Reservations from '../pages/Reservations'
import Restaurants from '../pages/Restaurants'
import NotFound from '../pages/NotFound'
import Team from '../pages/Team';
import Privacy from '../pages/Privacy';
import Terms from '../pages/Terms';
import Cookie from '../pages/Cookie';
import Shipping from '../pages/Shipping';
import Refund from '../pages/Refund';
import RestaurantDetail from '../pages/RestaurantDetail';
import Careers from '../pages/Careers';
import Stories from '../pages/Stories';
import StoryDetails from '../pages/StoryDetail';
import Events from '../pages/Events';
import SuperAdminDashboard from '../pages/Superadmin/dashboard';
import SuperAdminRestaurants from '../pages/Superadmin/restaurants';
import SuperAdminBookings from '../pages/Superadmin/bookings';
import SuperAdminRestaurantDetail from '../pages/Superadmin/restaurantDetail';
import RestaurantOverview from '../pages/RestaurantAdmin/dashboard';
import RestaurantBookings from '../pages/RestaurantAdmin/bookings';
import RestaurantSlots from '../pages/RestaurantAdmin/slots';
import RestaurantAnalytics from '../pages/RestaurantAdmin/analytics';
import RestaurantLogin from '../pages/Auth/RestaurantLogin';
// import RestaurantSignup from '../pages/Auth/RestaurantSignup';
import SuperAdminLogin from '../pages/Auth/SuperAdminLogin';
// import SuperAdminSignup from '../pages/Auth/SuperAdminSignup';
import { RequireRestaurantAuth, RequireSuperAdminAuth } from './RequireAuth';

const AppRoutes = () => (
  <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/teams" element={<Team />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/restaurants" element={<Restaurants />} />
      <Route path="/restaurants/:slug" element={<RestaurantDetail />} />
      <Route path="/events" element={<Events />} />
      <Route path="/stories" element={<Stories />} />
      <Route path="/stories/:slug" element={<StoryDetails />} />
      <Route path="/careers" element={<Careers />} />
    </Route>

    <Route path="/terms" element={<Terms />} />
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/cookie-policy" element={<Cookie />} />
    <Route path="/shipping-policy" element={<Shipping />} />
    <Route path="/refund-policy" element={<Refund />} />

    <Route path="/restaurant-login" element={<RestaurantLogin />} />
    {/* <Route path="/restaurant-signup" element={<RestaurantSignup />} /> */}
    <Route path="/super-admin-login" element={<SuperAdminLogin />} />
    {/* <Route path="/super-admin-signup" element={<SuperAdminSignup />} /> */}

    <Route element={<RequireSuperAdminAuth />}>
      <Route path="/super-admin-dashboard" element={<SuperAdminDashboard />} />
      <Route path="/super-admin-dashboard/restaurants" element={<SuperAdminRestaurants />} />
      <Route path="/super-admin-dashboard/restaurants/:restaurantId" element={<SuperAdminRestaurantDetail />} />
      <Route path="/super-admin-dashboard/bookings" element={<SuperAdminBookings />} />
    </Route>

    <Route element={<RequireRestaurantAuth />}>
      <Route path="/restaurant-dashboard" element={<RestaurantOverview />} />
      <Route path="/restaurant-dashboard/bookings" element={<RestaurantBookings />} />
      <Route path="/restaurant-dashboard/slots" element={<RestaurantSlots />} />
      <Route path="/restaurant-dashboard/analytics" element={<RestaurantAnalytics />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
