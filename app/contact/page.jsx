
import { PageHero } from "../components";
import { ContactDetailsSection } from "./ContactDetailsSection";
import { AppointmentForm } from "./AppointmentForm";

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact FODTON"
        title="Let's start the conversation."
        text="Contact FODTON for professional training, research and consultancy, home-care services, corporate training or partnerships."
      />
      <section className="section" id="appointment">
        <div className="container form-wrap">
          <ContactDetailsSection />
          <AppointmentForm />
        </div>
      </section>
    </>
  );
}
