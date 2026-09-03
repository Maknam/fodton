
import Link from "next/link";
import { PageHero } from "../components";

export default function Page() {
  return (
    <>
      <PageHero eyebrow="News, stories & knowledge" title="Media" text="Stay informed about FODTON's activities, programmes, research, events, partnerships and institutional developments." />
      
<section className="section"><div className="container"><div className="content-grid">
{[
["News & Updates","Latest institutional activities and announcements."],
["Gallery","Photos from training programmes, events, meetings and institutional activities."],
["Videos","Training highlights, interviews, webinars, presentations and institutional videos."],
["Publications","Selected reports, research outputs, articles, policy briefs and knowledge resources."]
].map(x=><div className="card" key={x[0]}><h3>{x[0]}</h3><p>{x[1]}</p><span className="link">Content coming from FODTON →</span></div>)}
</div></div></section>

    </>
  );
}
