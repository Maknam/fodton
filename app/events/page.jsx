
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Learn · Exchange · Engage" title="Events & Knowledge" text="FODTON organises and participates in activities that promote professional learning, knowledge exchange, research dissemination and industry engagement." />
      
<section className="section"><div className="container"><div className="content-grid">
{["Professional training events","Workshops","Seminars","Conferences","Webinars","Public lectures","Research presentations","Policy dialogues","Industry forums","Professional development events"].map(x=><div className="card" key={x}><h3>{x}</h3><p>Upcoming schedules and registration information will be published when confirmed.</p></div>)}
</div></div></section>

    </>
  );
}
