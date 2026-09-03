import Link from "next/link";
import { PageHero } from "../components";
import { centres } from "./programme-data";

const executive = [
  "AI-assisted teaching, curriculum development & educational presentation",
  "Online radio, television, news and sports presentation",
  "Corporate communications and reputation management",
  "Entrepreneurship, innovation & SME management",
  "International trade & export business development",
  "Home care services management & administration",
  "Project leadership and strategic management",
  "Development economics, policy and planning",
  "NGO, development and nonprofit management",
  "Governance, risk and compliance",
  "Political leadership, governance and public policy",
  "Food safety, quality and standards management",
  "Restaurant, catering, hospitality and food-industry leadership",
];

const workshops = [
  [
    "AI & Digital Technology",
    "Generative AI, ChatGPT, workplace productivity, academic research, digital fundraising, WordPress, website security, social media and digital advertising",
  ],
  [
    "Business & Finance",
    "Excel, bookkeeping, financial literacy, banking, FinTech, office administration, procurement, inventory, export and trade documentation",
  ],
  [
    "Education & Health",
    "Classroom management, digital teaching, assessment, inclusive education, counselling, first aid, infection prevention, mental health and nutrition",
  ],
  [
    "Agriculture & Project Management",
    "Farm costing, smart farming, agrifood processing, project planning, budgeting, proposal writing, grants, M&E and agile delivery",
  ],
  [
    "Governance, Food & Hospitality",
    "Data protection, ethics, human rights, leadership, HACCP, food hygiene, costing, baking, customer service and housekeeping",
  ],
];

const corporate = [
  "Corporate AI & Digital Transformation",
  "Corporate Finance & Banking",
  "Corporate Leadership & Management",
  "Corporate Procurement & Supply Chain",
  "NGO & Development Institutions",
  "Schools & Educational Institutions",
  "Healthcare Institutions",
  "Hospitality & Food Industry",
  "Agriculture & Agribusiness",
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Professional education"
        title="Certificate & Training Programmes"
        text="Career development, professional skills, technical competence, executive development and customised institutional training."
      />

      <section className="section">
        <div className="container">
          <div className="heading">
            <div className="copy">
              <span className="eyebrow">Professional education</span>
              <h2>
                Professional Certificate Short Courses & Continuing Professional
                Development (CPD) Programmes
              </h2>
              <p>Career Development | Professional Skills | Technical Competence</p>
            </div>
          </div>

          <div className="training-centres">
            {centres.map((centre, index) => (
              <details
                className="training-centre"
                key={centre.name}
                open={index === 0}
              >
                <summary>
                  <span className="training-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{centre.name}</h3>
                  <span className="training-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="training-categories">
                  {centre.categories.map((category) => (
                    <section className="training-category" key={category.name}>
                      <h4>{category.name}</h4>
                      <ul>
                        {category.programmes.map((programme) => (
                          <li key={programme}>{programme}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="heading">
            <div className="copy">
              <span className="eyebrow">
                Leadership · Management · Strategy
              </span>
              <h2>Executive Certificate Programmes</h2>
              <p>
                Focused development for managers, institutional leaders,
                entrepreneurs and experienced professionals.
              </p>
            </div>
          </div>

          <div className="content-grid compact-grid">
            {executive.map((item) => (
              <div className="card" key={item}>
                <h3>Executive Certificate</h3>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="heading">
            <div className="copy">
              <span className="eyebrow">
                Practical skills · Refresher training
              </span>
              <h2>Workshops & Seminars</h2>
            </div>
          </div>

          <div className="content-grid">
            {workshops.map(([title, body]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="heading">
            <div className="copy">
              <span className="eyebrow">Made for your organisation</span>
              <h2>Customised Corporate & Institutional Training</h2>
              <p>
                Staff development and organisational capacity-building programmes
                can be tailored to sector needs, team size and institutional
                objectives.
              </p>
            </div>
          </div>

          <div className="corporate-grid">
            {corporate.map((item) => (
              <div className="service-item" key={item}>
                <h3>{item}</h3>
              </div>
            ))}
          </div>

          <div className="actions">
            <Link href="/contact#appointment" className="btn red">
              Discuss your training needs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
