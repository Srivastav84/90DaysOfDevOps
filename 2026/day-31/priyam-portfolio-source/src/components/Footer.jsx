import { ArrowUp, Mail } from 'lucide-react';
export default function Footer({ profile }) {
  return <footer className="footer section-shell"><a className="brand" href="#home"><span className="brand-mark">PS</span><span>PRIYAM<span className="brand-dot">.</span></span></a><p>Built with curiosity. Improved one iteration at a time.</p><a className="footer-email" href={`mailto:${profile.email}`}><Mail size={15}/>{profile.email}</a><a className="back-top" href="#home">BACK TO TOP <ArrowUp size={14}/></a><span className="copyright">© {new Date().getFullYear()} Priyam Srivastav</span></footer>;
}
