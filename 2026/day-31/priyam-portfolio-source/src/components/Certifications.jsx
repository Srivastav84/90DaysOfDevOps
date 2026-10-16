import { ArrowUpRight, Award, BadgeCheck } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
export default function Certifications({ items, education }) {
  return <section className="section-shell content-section" id="certifications"><SectionHeading eyebrow="LEARNING & FOUNDATIONS" title="Certifications & education" description="Credentials and academic background currently listed on my resume."/>
    <div className="credentials-layout"><div className="cert-list">{items.map(cert=><article className="cert-card" key={cert.name}><div className="credential-icon"><Award size={24}/></div><div className="credential-copy"><p className="card-kicker">{cert.issuer}</p><h3>{cert.name}</h3><p>{cert.validity}</p>{cert.url && <a href={cert.url} target="_blank" rel="noreferrer">View credential <ArrowUpRight size={14}/></a>}</div><BadgeCheck className="verified-icon" size={21}/></article>)}</div>
    <div className="education-card"><p className="eyebrow">EDUCATION</p>{education.map((item,i)=><div className="education-item" key={item.qualification}><div className="education-year">{item.year}</div><div><h3>{item.qualification}</h3><p>{item.institution}</p><span>{item.location} · {item.result}</span></div></div>)}</div></div>
  </section>;
}
