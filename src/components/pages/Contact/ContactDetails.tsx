import ContactForm from "../../forms/Contact/ContactForm";
import ContactFaq from "./ContactFaq";
import ContactSidebar from "./ContactSidebar";

const ContactDetails = () => (
  <section className="pb-24">
    <div className="container-custom">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <ContactSidebar />
        <div className="lg:col-span-2">
          <ContactForm />
          <ContactFaq />
        </div>
      </div>
    </div>
  </section>
);

export default ContactDetails;
