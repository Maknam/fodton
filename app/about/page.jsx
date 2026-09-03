
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Who we are" title="About FODTON" text="FODTON Institute of Training and Development Ltd is a professional development and capacity-building organisation supporting skills development, lifelong learning, research, innovation and institutional development." />
      
<section className="section"><div className="container split">
<div><span className="eyebrow">Our purpose</span><h2>Connecting professional education with practical development.</h2><p>FODTON provides practical and industry-responsive training programmes while generating research, data and knowledge for individuals, businesses, institutions, researchers, development organisations and policy makers.</p></div>
<div className="card"><h3>Vision</h3><p>To become a leading Centre of excellence in training, capacity building, homecare delivery services and professional development in Ghana and beyond.</p><h3>Mission</h3><p>To advance professional education, skills development, research and capacity building through high-quality, practical and industry-responsive programmes and services, while providing reliable and compassionate homecare and caregiving support.</p></div>
</div></section>
<section className="section soft"><div className="container"><div className="heading"><div className="copy"><span className="eyebrow">Core Values</span><h2>How we work.</h2></div></div><div className="cards4">
{["Excellence","Integrity","Innovation","Professionalism","Inclusiveness"].map(x=><div className="card" key={x}><h3>{x}</h3><p>A core value guiding FODTON's professional education, research, consultancy and care services.</p></div>)}
</div></div></section>

    </>
  );
}
