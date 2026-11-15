import { Database, LayoutDashboard, Lock, MessageCircle, ShieldCheck, Workflow } from 'lucide-react';
import { CtaBand } from '../components/CtaBand';
import { Hero } from '../components/Hero';
import { Section, SectionHeading } from '../components/Section';
import { media } from '../data/media';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

const layers = [
  { id: 'messaging', icon: MessageCircle, title: 'Messaging and AI', text: 'The planned WhatsApp Business API integration would receive enquiries. The AI assistant would interpret messages and ask for missing order details.' },
  { id: 'order-services', icon: Database, title: 'Order services', text: 'The application would use farm records to check stock and buyer-specific prices, then store structured orders and their validation status.' },
  { id: 'operator-dashboard', icon: LayoutDashboard, title: 'Operator dashboard', text: 'Farm staff would see orders ready for fulfilment and resolve exceptions from a browser-based workspace.' },
  { id: 'responsible-ai', icon: ShieldCheck, title: 'Human oversight', text: 'Routine enquiries could follow the farm’s configured rules. Unclear requests, conflicting stock information and pricing overrides would be escalated for review or approval.' },
  { id: 'data-handling', icon: Lock, title: 'Data handling', text: 'Planned safeguards include role-based access, protection in transit and limits on the data sent to AI services. Retention policies will be defined before commercial use.' },
  { id: 'reliability', icon: Workflow, title: 'Reliable handoffs', text: 'The design calls for validating incoming data, handling duplicate messages and holding failed stock or price checks for staff review.' },
];

const stack = [
  { name: 'React', role: 'Browser dashboard' },
  { name: 'TypeScript', role: 'Typed application code' },
  { name: 'Node.js', role: 'Server runtime' },
  { name: 'Express', role: 'Application services' },
  { name: 'PostgreSQL', role: 'Farm and order records' },
  { name: 'AI APIs', role: 'Enquiry interpretation' },
  { name: 'AWS', role: 'Hosting under evaluation' },
  { name: 'WhatsApp Business API', role: 'Planned messaging integration' },
];

export default function Technology() {
  usePageMeta(pages.technology);

  return (
    <>
      <Hero
        eyebrow="Technology & innovation"
        title={<>Technology that <em className="serif-accent">works for farms.</em></>}
        lead="We build browser-based software, integrate AI and design workflows around the way agricultural businesses operate. Evercrop is where we’re applying that work first."
        media={media.technology}
      />

      <Section tone="white" labelledBy="architecture-title">
        <SectionHeading id="architecture-title" eyebrow="Software engineering at Tyllage" title="Evercrop’s proposed architecture" />
        <ul className="pillars" role="list">
          {layers.map(({ id, icon: Icon, title, text }) => (
            <li key={id} id={id} className="pillar">
              <span className="pillar__icon"><Icon size={22} aria-hidden /></span>
              <h3 className="pillar__title">{title}</h3>
              <p className="pillar__what">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="beige" labelledBy="stack-title" className="section--tight">
        <div className="stack">
          <div className="stack__intro">
            <p className="eyebrow">Technology stack</p>
            <h2 id="stack-title" className="h3">Tools we’re evaluating</h2>
            <p className="muted">These are the technologies we’re considering for Evercrop. The stack may change as we develop the product.</p>
          </div>
          <ul className="stack__list" role="list">
            {stack.map(({ name, role }) => (
              <li key={name}><strong>{name}</strong><span>{role}</span></li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBand id="tech-cta" title="Collaborate on Evercrop" text="We welcome enquiries about integrations and farm sales workflows." />
    </>
  );
}
