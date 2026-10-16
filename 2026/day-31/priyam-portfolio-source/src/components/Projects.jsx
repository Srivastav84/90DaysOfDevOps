import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
export default function Projects({ items }) {
  return <section className="section-shell content-section" id="projects"><SectionHeading eyebrow="SELECTED WORK" title="Projects" description="Hands-on cloud and DevOps work. Repository links can be added whenever you're ready."/>
    <div className="projects-grid">{items.map((project,i)=><article className="project-card" key={project.name}><div className="project-art"><span className="project-index">PROJECT / 0{i+1}</span><div className="project-art-icon"><Layers3 size={36}/></div><div className="art-lines"/><span className="project-type">{project.type}</span></div><div className="project-body"><p className="card-kicker">{project.period}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><ul className="detail-list">{project.highlights.map((h,j)=><li key={j}>{h}</li>)}</ul><div className="project-footer">{project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> View repository <ArrowUpRight size={15}/></a> : <span className="missing-link"><Github size={16}/> {project.note || 'Repository link to be added'}</span>}</div></div></article>)}</div>
  </section>;
}
