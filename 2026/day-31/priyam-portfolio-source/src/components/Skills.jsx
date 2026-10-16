import { Code2 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
export default function Skills({ groups }) {
  return <section className="section-shell content-section" id="skills"><SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies" description="Tools and concepts from my resume and DevOps project work."/>
    <div className="skills-grid">{groups.map((group,i)=><article className="skill-card" key={group.group}><div className="skill-card-head"><span className="skill-number">0{i+1}</span><Code2 size={18}/></div><h3>{group.group}</h3><div className="skill-tags">{group.items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
  </section>;
}
