import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
export default function Experience({ items }) {
  return <section className="section-shell content-section" id="experience"><SectionHeading eyebrow="THE JOURNEY SO FAR" title="Experience" description="Production operations, API lifecycle management and release support."/>
    <div className="timeline">{items.map((job,i)=><article className="timeline-card" key={job.company+job.period}><div className="timeline-marker"><BriefcaseBusiness size={17}/></div><div className="timeline-top"><div><p className="card-kicker">{job.company}</p><h3>{job.role}</h3></div><span className="period"><CalendarDays size={14}/>{job.period}</span></div><p className="job-location"><MapPin size={14}/>{job.location}</p><ul className="detail-list">{job.highlights.map((h,j)=><li key={j}>{h}</li>)}</ul></article>)}</div>
  </section>;
}
