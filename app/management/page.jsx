import { PageHero } from "../components";

const board = [
  { name: "Dr. Richard Tawiah", detail: "University of Melbourne, Australia" },
  { name: "Mr. Enock Antwi Ankomah", detail: "Professional education, training and human development specialist, UK" },
  { name: "Mr. John Apraku", detail: "Professional education, cybersecurity and entrepreneurship specialist, USA" },
];

const management = [
  { role: "Coordinator, Professional Education, Training & Quality Assurance", name: "Ms. Alice Pokuaa", detail: "Professional Educator, Vocational Training & Skills Development, Ghana", image: "/team/alice-pokuaa.jpeg" },
  { role: "Finance & Administration Officer", name: "Appointment details to be confirmed" },
  { role: "Marketing, Communications & Business Development Officer", name: "Appointment and biography details to be confirmed" },
  { role: "Research, Innovation & International Relations Officer", name: "Mr. Samuel Osei Duffour", detail: "Biomedical Physics and Artificial Intelligence professional, Germany" },
];

function ProfileCard({ person }) {
  return (
    <article className="team">
      {person.image ? <img className="team-photo" src={person.image} alt={`${person.name}, ${person.role}`} /> : <div className="photo" aria-hidden="true">Photo to be supplied</div>}
      <div className="body"><p className="team-role">{person.role}</p><h3>{person.name}</h3>{person.detail && <p>{person.detail}</p>}</div>
    </article>
  );
}

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Leadership & expertise" title="Management Team" text="FODTON's governance and professional management structure supports quality training, administration, communications, research, innovation and partnerships." />
      <section className="section"><div className="container">
        <div className="heading"><div className="copy"><span className="eyebrow">Executive leadership</span><h2>Founder & Chief Executive Officer</h2></div></div>
        <div className="team-grid team-grid-featured"><ProfileCard person={{ role: "Founder & Chief Executive Officer", name: "Dr. Charles Dwumfour Osei", detail: "Christian Service University, Ghana", image: "/team/charles-dwumfour-osei.png" }} /></div>
      </div></section>
      <section className="section soft"><div className="container">
        <div className="heading"><div className="copy"><span className="eyebrow">Governance</span><h2>Board of Directors</h2></div></div>
        <div className="team-grid">{board.map((person) => <ProfileCard key={person.name} person={{ ...person, role: "Board Member" }} />)}</div>
      </div></section>
      <section className="section"><div className="container">
        <div className="heading"><div className="copy"><span className="eyebrow">Operations</span><h2>Professional Management Team</h2></div></div>
        <div className="team-grid">{management.map((person) => <ProfileCard key={person.role} person={person} />)}</div>
      </div></section>
    </>
  );
}
