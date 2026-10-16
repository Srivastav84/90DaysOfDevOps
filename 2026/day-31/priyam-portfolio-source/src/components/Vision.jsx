import { ArrowUpRight, Compass } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';
export default function Vision({ profile }) {
  const isPlaceholder = profile.vision.startsWith('ADD YOUR OWN VISION');
  return <section className="section-shell content-section vision-section" id="vision"><SectionHeading eyebrow="WHAT COMES NEXT" title="Vision" description="A direction to grow toward — in your own words."/>
    <div className="vision-panel"><div className="vision-icon"><Compass size={30}/></div><div><p className="eyebrow">MY NORTH STAR</p><p className={isPlaceholder ? 'vision-copy placeholder-copy' : 'vision-copy'}>{profile.vision}</p>{isPlaceholder && <p className="edit-hint">Personalize this section in <code>src/data/profile.json</code>.</p>}</div><a className="vision-arrow" href={`mailto:${profile.email}`} aria-label="Contact me"><ArrowUpRight size={22}/></a></div>
  </section>;
}
