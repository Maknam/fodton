import Link from "next/link";
import { CONTACT_INFO } from "./constants/contact";

const logoSrc = "/fodton-logo.png";

     





/* ======================================================
   HEADER
====================================================== */

export function Header() {
  return (
    <div className="site-header">
      <div className="topbar">
        <div className="container inner">
          <div className="meta">
            <span>{CONTACT_INFO.addressShort}</span>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\D/g, "")}`}>
              {CONTACT_INFO.phone}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`}>
              {CONTACT_INFO.email}
            </a>
          </div>
          <span>
            {CONTACT_INFO.hours} · {CONTACT_INFO.hoursExpanded}
          </span>
        </div>
      </div>

      <header className="nav">
        <div className="container inner">

          {/* LOGO */}
          <Link className="brand" href="/">
            <img src={logoSrc} alt="FODTON Institute" />
          </Link>

          {/* NAVIGATION */}
          <nav className="navlinks">

            <Link href="/">Home</Link>

            {/* SERVICES DROPDOWN */}
            <div className="nav-dropdown">
              <button className="nav-dropdown-trigger" type="button">
                Services
                <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu services-dropdown">
                <Link href="/training">
                  <span className="dropdown-icon dropdown-icon-blue">01</span>
                  <div>
                    <strong>Professional Executive Certificate Training Programmes</strong>
                    <small>Certificate, professional, executive and corporate training programmes.</small>
                  </div>
                </Link>
                <Link href="/research">
                  <span className="dropdown-icon dropdown-icon-red">02</span>
                  <div>
                    <strong>Research, Data Collection & Policy Consultancy</strong>
                    <small>Research design, surveys, data collection, monitoring & evaluation and policy consultancy.</small>
                  </div>
                </Link>
                <Link href="/home-care">
                  <span className="dropdown-icon dropdown-icon-green">03</span>
                  <div>
                    <strong>Home Care & Caregiving</strong>
                    <small>Professional caregiving, elderly support, personal care and family care services.</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* ABOUT DROPDOWN */}
            <div className="nav-dropdown">
              <button className="nav-dropdown-trigger" type="button">
                About
                <span className="dropdown-arrow">⌄</span>
              </button>
              <div className="dropdown-menu">
                <Link href="/about">
                  <div>
                    <strong>Who We Are</strong>
                    <small>Learn about FODTON, our vision, mission and values.</small>
                  </div>
                </Link>
                <Link href="/management">
                  <div>
                    <strong>Management Team</strong>
                    <small>Meet the leadership, management team and experts.</small>
                  </div>
                </Link>
                <Link href="/events">
                  <div>
                    <strong>Events & Knowledge</strong>
                    <small>Workshops, seminars, conferences and professional events.</small>
                  </div>
                </Link>
                <Link href="/media">
                  <div>
                    <strong>Media</strong>
                    <small>News, gallery, videos and publications.</small>
                  </div>
                </Link>
              </div>
            </div>

            {/* PARTNERSHIP LINK */}
            <Link href="/partnerships">Partnership</Link>

            {/* CONTACT LINK */}
            <Link href="/contact">Contact</Link>

          </nav>

          {/* CTA BUTTON */}
          <Link href="/contact#appointment" className="navcta primary">
            Book Appointment
          </Link>

          {/* MOBILE NAVIGATION */}
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span>Menu</span>
              <span className="menu-icon" aria-hidden="true"></span>
            </summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              <Link href="/">Home</Link>
              <span className="mobile-menu-label">Services</span>
              <Link href="/training">Professional Training</Link>
              <Link href="/research">Research &amp; Data</Link>
              <Link href="/home-care">Home Care &amp; Caregiving</Link>
              <span className="mobile-menu-label">About</span>
              <Link href="/about">Who We Are</Link>
              <Link href="/management">Management Team</Link>
              <Link href="/events">Events &amp; Knowledge</Link>
              <Link href="/media">Media</Link>
              <Link href="/partnerships">Partnership</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/contact#appointment" className="mobile-menu-cta">
                Book Appointment
              </Link>
            </nav>
          </details>

        </div>
      </header>
    </div>
  );
}


/* ======================================================
   FOOTER
====================================================== */

export function Footer() {

  const addressLines = CONTACT_INFO.address.split("\n");

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* BRAND */}
          <div>

            <Link className="brand" href="/">
              <img
                src={logoSrc}
                alt="FODTON Institute"
              />
            </Link>

            <p>
              Professional education, training, research,
              consultancy and capacity development for
              individuals, businesses and institutions in
              Ghana and beyond.
            </p>

          </div>


          {/* EXPLORE */}
          <div>

            <h4>Explore</h4>

            <p>
              <Link href="/about">
                About FODTON
              </Link>

              <br />

              <Link href="/management">
                Management Team
              </Link>

              <br />

              <Link href="/partnerships">
                Partnerships
              </Link>

              <br />

              <Link href="/media">
                Media
              </Link>
            </p>

          </div>


          {/* SERVICES */}
          <div>

            <h4>Services</h4>

            <p>

              <Link href="/training">
                Professional Training
              </Link>

              <br />

              <Link href="/research">
                Research & Data
              </Link>

              <br />

              <Link href="/home-care">
                Home Care & Caregiving
              </Link>

              <br />

              <Link href="/events">
                Events & Knowledge
              </Link>

            </p>

          </div>


          {/* CONTACT */}
          <div>

            <h4>Contact</h4>

            <p>
              {addressLines.map((line, idx) => (
                <span key={idx}>
                  {line}

                  {idx < addressLines.length - 1 && (
                    <br />
                  )}
                </span>
              ))}
            </p>

            <p>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
              >
                {CONTACT_INFO.phone}
              </a>

              <br />

              <a
                href={`mailto:${CONTACT_INFO.email}`}
              >
                {CONTACT_INFO.email}
              </a>

            </p>

          </div>

        </div>


        <div className="footnote">
          © 2026 FODTON Institute of Training and Development Ltd.
          Website by MaknamCrest Digital Services.
        </div>

      </div>

    </footer>
  );
}


/* ======================================================
   PAGE HERO
====================================================== */

export function PageHero({
  eyebrow,
  title,
  text
}) {

  return (
    <section className="page-hero">

      <div className="container">

        <span className="eyebrow">
          {eyebrow}
        </span>

        <h1>
          {title}
        </h1>

        <p>
          {text}
        </p>

      </div>

    </section>
  );
}


/* ======================================================
   SERVICES DATA
====================================================== */

export const services = [

  [
    "Professional Training",
    "Practical, industry-responsive certificate, professional, executive and corporate training.",
    "/training",
    "01"
  ],

  [
    "Research & Data",
    "Research design, data collection, surveys, policy analysis, M&E and evidence-based advisory services.",
    "/research",
    "02"
  ],

  [
    "Home Care & Caregiving",
    "Reliable, compassionate support that promotes wellbeing, dignity, safety and independence.",
    "/home-care",
    "03"
  ],

  [
    "Consultancy & Partnerships",
    "Capacity building, institutional collaboration and development-focused consultancy.",
    "/partnerships",
    "04"
  ],

];


/* ======================================================
   PROGRAMMES
====================================================== */

export const programmes = [

  [
    "Certificate Programmes",
    "Foundation and practical skills for individuals seeking knowledge and entry-level competencies.",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
    "Foundation"
  ],

  [
    "Professional Certificate",
    "Career-oriented programmes designed to develop practical professional and business competencies.",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=80",
    "Professional"
  ],

  [
    "Executive Certificate",
    "Advanced programmes for professionals, managers, entrepreneurs, supervisors and leaders.",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    "Executive"
  ],

];


/* ======================================================
   RESEARCH
====================================================== */

export const research = [

  [
    "Research design & consultancy",
    "Develop research frameworks, design methodologies, and provide expert guidance for institutional research projects."
  ],

  [
    "Data collection consultancy",
    "Support survey design, fieldwork management, and data quality assurance for primary research."
  ],

  [
    "Consumer & market surveys",
    "Understand market dynamics, consumer behavior, and competitive landscapes to inform strategic business decisions."
  ],

  [
    "Policy research & analysis",
    "Analyze policy environments, develop evidence-based policy recommendations, and support policy advocacy."
  ],

  [
    "Monitoring & evaluation",
    "Design M&E frameworks, conduct impact assessments, and provide evidence for program effectiveness."
  ],

  [
    "Impact assessment",
    "Measure social, economic and institutional impact of programs and interventions."
  ],

];


/* ======================================================
   EVENTS
====================================================== */

export const upcomingEvents = [

  [
    "Professional Training Workshop",
    "Hands-on workshop covering practical training design, delivery methods and participant engagement strategies.",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1000&q=80",
    "WORKSHOP"
  ],

  [
    "Research & Policy Dialogue",
    "Open forum for researchers, policymakers and practitioners to discuss evidence-based policy solutions.",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80",
    "DIALOGUE"
  ],

  [
    "Institutional Partners Forum",
    "Networking and collaboration event for institutional partners, government agencies and development organizations.",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80",
    "FORUM"
  ],

];
