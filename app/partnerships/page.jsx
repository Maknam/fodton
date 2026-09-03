
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Collaboration for development" title="Partnerships" text="FODTON believes sustainable development requires collaboration among education, industry, government, research institutions, civil society and development organisations." />
      
<section className="section"><div className="container"><div className="content-grid">
{["Government agencies","Academic & educational institutions","Businesses & industry","NGOs & development organisations","Professional associations","Regulatory bodies","Research institutions","International organisations","Training & development partners"].map(x=><div className="card" key={x}><h3>{x}</h3><p>Potential partner for joint training, research, consultancy, capacity building and development initiatives.</p></div>)}
</div><div style={{marginTop:"30px"}} className="banner"><h2>Areas of Collaboration</h2><p>Professional Training · Corporate Training · Research · Data & Surveys · Consultancy · Capacity Building · Innovation · Development Projects · International Collaboration</p><Link href="/contact#appointment" className="btn red">Start a Partnership Discussion →</Link></div></div></section>

    </>
  );
}
