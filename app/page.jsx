
import Link from "next/link";
import { ChartNoAxesCombined, GraduationCap, Handshake, HeartHandshake } from "lucide-react";
import { services, programmes, research, upcomingEvents } from "./components";

export default function Home() {
  const pathwayDetails = [
    { Icon: GraduationCap, accent: "red", description: "Practical certificate, professional, executive and corporate training designed to build relevant skills and advance careers." },
    { Icon: ChartNoAxesCombined, accent: "blue", description: "Research, data collection, surveys, policy analysis, M&E and evidence-based advisory services." },
    { Icon: HeartHandshake, accent: "green", description: "Compassionate support that promotes wellbeing, dignity, safety and independence for individuals and families." },
    { Icon: Handshake, accent: "gold", description: "Institutional collaboration, capacity building and development-focused consultancy for sustainable growth." },
  ];
  return (
    <>
      <section className="hero">
        <div className="container inner">
          <div className="hero-copy">
            <span className="eyebrow">FODTON Institute · Accra, Ghana</span>
            <h1>Knowledge that builds skills. <span>Evidence that drives impact.</span></h1>
            <p>FODTON Institute of Training and Development equips individuals, businesses and institutions with practical knowledge, professional skills and evidence-based solutions for sustainable growth and development.</p>
            <div className="actions">
              <Link href="/training" className="btn red">Explore Programmes →</Link>
              <Link href="/about" className="btn ghost">Learn About FODTON →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pathways-section">
        <div className="container">
          <div className="heading pathways-heading">
            <div className="copy"><span className="eyebrow">What we do</span><h2>Four pathways to professional and institutional growth.</h2><p>FODTON connects professional education, research, care and institutional support under one practical development platform.</p></div>
          </div>
          <div className="pathways-grid">
            {services.map((service, index) => {
              const { Icon, accent, description } = pathwayDetails[index];
              return (
                <article className={`pathway-card pathway-${accent}`} key={service[0]}>
                  <span className="pathway-number">{service[3]}</span>
                  <div className="pathway-icon" aria-hidden="true"><Icon size={31} strokeWidth={1.9} /></div>
                  <h3>{service[0]}</h3>
                  <p>{description}</p>
                  <Link className="pathway-link" href={service[2]}>Explore <span aria-hidden="true">→</span></Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div className="visual about"></div>
          <div>
            <span className="eyebrow">About FODTON</span>
            <h2>Bridging knowledge and practical application.</h2>
            <p>FODTON supports skills development, lifelong learning, research, innovation and institutional development through practical, industry-responsive programmes and services.</p>
            <p>Our work connects professional education with research, industry needs, entrepreneurship and sustainable development.</p>
            <div className="actions"><Link href="/about" className="btn navy">Learn About FODTON →</Link></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading">
            <div className="copy"><span className="eyebrow">Professional Education</span><h2>Training designed for where you are—and where you want to go.</h2><p>Programmes are offered at different levels to accommodate learners with different backgrounds and professional goals.</p></div>
          </div>
          <div className="program-grid">
            {programmes.map(p=><article className="program-card" key={p[0]}><div className="badge">{p[3]}</div><img src={p[2]} alt={`${p[0]} - Professional training programme at FODTON`}/><div className="body"><h3>{p[0]}</h3><p>{p[1]}</p><Link className="link" href="/training">Learn more →</Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="heading">
            <div className="copy"><span className="eyebrow">Research, Policy & Data</span><h2>Evidence for better decisions.</h2><p>Research, data and consultancy services that support teaching, policy development, business decision-making and development planning.</p></div>
            <Link className="btn ghost" href="/research">Explore Research Services →</Link>
          </div>
          <div className="service-list">{research.map(x=><div className="service-item" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p></div>)}</div>
        </div>
      </section>

      <section className="section cream">
        <div className="container split">
          <div>
            <span className="eyebrow">Home Care & Caregiving</span>
            <h2>Professional care. Delivered with dignity.</h2>
            <p>FODTON provides reliable, compassionate and professional home-care services designed to support wellbeing, safety, independence and quality of life.</p>
            <div className="pill-list">
              {["Elderly Care & Ageing Support","Personal Care & Daily Living","Disability & Community Support","Child & Family Support","Companionship & Wellbeing","Caregiver Support & Respite"].map(x=><div className="pill" key={x}>{x}</div>)}
            </div>
            <div className="actions"><Link href="/home-care" className="btn red">Request Home Care Services →</Link></div>
          </div>
          <div className="visual care"></div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="banner">
            <span className="eyebrow">Partnerships</span>
            <h2>Let’s build impact together.</h2>
            <p>FODTON welcomes collaboration with government agencies, academic institutions, businesses, NGOs, professional associations, research institutions and international organisations.</p>
            <div className="actions"><Link href="/partnerships" className="btn red">Partner With FODTON →</Link><Link href="/contact#appointment" className="btn ghost">Book Appointment →</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
