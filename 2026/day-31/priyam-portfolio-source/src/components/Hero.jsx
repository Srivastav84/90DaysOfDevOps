import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from 'lucide-react';
export default function Hero({ profile }) {
  return <section className="hero section-shell" id="home">
    <div className="hero-copy"><div className="availability"><span className="pulse-dot"/> OPEN TO CLOUD & DEVOPS OPPORTUNITIES</div>
      <p className="eyebrow">HELLO, I’M</p><h1>{profile.name.split(' ')[0]} <span>{profile.name.split(' ').slice(1).join(' ')}</span></h1>
      <h2 className="hero-role">{profile.role}</h2><p className="hero-intro">{profile.intro}</p>
      <div className="hero-meta"><span><MapPin size={15}/>{profile.location}</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
      <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowDown size={16}/></a><a className="button button-quiet" href={`mailto:${profile.email}`}>Contact me <ArrowUpRight size={16}/></a><a className="button button-quiet" href={profile.resumeFile} target="_blank" rel="noreferrer">View resume <ArrowUpRight size={16}/></a></div>
      <div className="social-links">{profile.github && <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>}<span className="social-placeholder">Add your GitHub & LinkedIn links in <code>profile.json</code></span></div>
    </div>
    <div className="hero-visual"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-core"><div className="core-symbol">&lt;/&gt;</div><p>BUILD · AUTOMATE · OBSERVE</p><span>Cloud-native mindset</span></div><div className="float-tag tag-top"><span className="tag-dot cyan"/> API MANAGEMENT</div><div className="float-tag tag-right"><span className="tag-dot purple"/> CLOUD & DEVOPS</div><div className="float-tag tag-bottom"><span className="tag-dot green"/> CONTINUOUS IMPROVEMENT</div><div className="visual-caption">SYSTEMS THAT SCALE.<br/><span>OPERATIONS THAT FLOW.</span></div></div>
    <div className="hero-index"><span>01 / 06</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>;
}
