import ReservationForm from "../../forms/Reservation/ReservationForm";
import ReservationTerms from "./ReservationTerms";

const ReservationDetails = () => (
  <section className="pb-20">
    <div className="container-custom">
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3"><ReservationForm /></div>
        <div className="lg:col-span-2"><ReservationTerms /></div>
      </div>
    </div>
  </section>
);

export default ReservationDetails;
