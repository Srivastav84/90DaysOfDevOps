import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import profile from './data/profile.json';
import experience from './data/experience.json';
import skills from './data/skills.json';
import projects from './data/projects.json';
import certifications from './data/certifications.json';
import education from './data/education.json';
import SpiderWeb from './effects/spiderWeb.jsx';
import MusicPlayer from './effects/MusicPlayer.jsx';
import { playClickSound } from './effects/clickSound.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Certifications from './components/Certifications.jsx';
import Vision from './components/Vision.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    const handleClick = event => {
      if (event.target.closest('button, .button, .nav-cta, .project-footer a, .social-links a, .footer-email, .back-top, .vision-arrow')) playClickSound();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
  return <><SpiderWeb/><div className="site-wrap"><Navbar profile={profile}/><main><Hero profile={profile}/><div className="stats-strip"><div><strong>300<span>+</span></strong><small>PRODUCTION APIs SUPPORTED</small></div><div><strong>50<span>+</span></strong><small>PRODUCTION INCIDENTS RESOLVED</small></div><div><strong>99<span>%+</span></strong><small>SLA COMPLIANCE REPORTED</small></div><div><strong>30<span>%</span></strong><small>FASTER INCIDENT RESOLUTION REPORTED</small></div></div><Experience items={experience}/><Skills groups={skills}/><Projects items={projects}/><Certifications items={certifications} education={education}/><Vision profile={profile}/><section className="contact-band section-shell"><div><p className="eyebrow">HAVE A CHALLENGE IN MIND?</p><h2>Let’s build something<br/><span>reliable together.</span></h2></div><a className="button button-primary" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17}/></a></section></main><Footer profile={profile}/></div><MusicPlayer/></>;
}
