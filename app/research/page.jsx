
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Evidence & insight" title="Research, Policy & Data Hub" text="Research, data and consultancy services that generate reliable evidence for researchers, students, lecturers, businesses, NGOs, institutions, development organisations and policy makers." />
      
<section className="section"><div className="container"><div className="content-grid">
{["Research design and consultancy","Data collection consultancy","Research databases & resources","Consumer and market surveys","Business and industry research","Public opinion & social surveys","Policy research and analysis","Political survey","Baseline and end-line studies","Needs assessments","Monitoring and evaluation","Impact assessment","Graduate and tracer studies","Institutional research","Data analysis and research support","Research reports and publications","Development and programme consultancy"].map(x=><div className="card" key={x}><h3>{x}</h3><p>Evidence-focused support for research, teaching, policy, business and development planning.</p></div>)}
</div></div></section>

    </>
  );
}
