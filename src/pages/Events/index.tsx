import EventsHero from "../../components/pages/Events/EventsHero";
import EventsWhy from "../../components/pages/Events/EventsWhy";
import EventsTypes from "../../components/pages/Events/EventsTypes";
import EventsTestimonials from "../../components/pages/Events/EventsTestimonials";
import EventsFaq from "../../components/pages/Events/EventsFaq";
import EventsContact from "../../components/pages/Events/EventsContact";

const Events = () => (
  <div className="min-h-screen bg-gray-50">
    <EventsHero />
    <EventsWhy />
    <EventsTypes />
    <EventsTestimonials />
    <EventsFaq />
    <EventsContact />
  </div>
);

export default Events;
