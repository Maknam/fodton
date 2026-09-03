import { CONTACT_INFO } from "../constants/contact";

export function ContactDetailsSection() {
  return (
    <div>
      <span className="eyebrow">Contact details</span>
      <h2>Visit or contact the Institute.</h2>
      
      <dl className="contact-details">
        <dt>Address</dt>
        <dd>
          {CONTACT_INFO.address.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </dd>
        
        <dt>Telephone</dt>
        <dd>
          <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}>
            {CONTACT_INFO.phone}
          </a>
        </dd>
        
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${CONTACT_INFO.email}`}>
            {CONTACT_INFO.email}
          </a>
        </dd>
        
        <dt>Office Hours</dt>
        <dd>
          {CONTACT_INFO.hours}
          <br />
          {CONTACT_INFO.hoursExpanded}
        </dd>
      </dl>
      
      <aside className="notice" role="note">
        Official meetings are strictly by appointment. This MVP form is frontend-only and will be connected to WordPress/email during implementation.
      </aside>
    </div>
  );
}
