import { ArrowUpRight } from 'lucide-react';
const links = [['Experience','#experience'],['Skills','#skills'],['Projects','#projects'],['Certifications','#certifications'],['Vision','#vision']];
export default function Navbar({ profile }) {
  return <header className="topbar"><a href="#home" className="brand" aria-label="Home"><span className="brand-mark">PS</span><span>PRIYAM<span className="brand-dot">.</span></span></a>
    <nav>{links.map(([label,href]) => <a key={href} href={href}>{label}</a>)}</nav>
    <a className="nav-cta" href={`mailto:${profile.email}`}>Let’s connect <ArrowUpRight size={15}/></a>
  </header>;
}
