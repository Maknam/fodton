
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Care with dignity" title="Home Care & Caregiving" text="Reliable, compassionate and professional home-care and caregiving services supporting wellbeing, dignity, safety, independence and quality of life." />
      
<section className="section"><div className="container"><div className="content-grid">
{["Elderly Care & Ageing Support","Personal Care & Daily Living Assistance","Disability & Community Support","Child & Family Support","Companionship & Wellbeing Support","Household & Domestic Assistance","Caregiver Support & Respite Services","Home-Care Assessment & Care Planning"].map(x=><div className="card" key={x}><h3>{x}</h3><p>Professional non-clinical support tailored to the needs of individuals and families.</p><Link href="/contact#appointment" className="link">Request consultation →</Link></div>)}
</div></div></section>

    </>
  );
}
