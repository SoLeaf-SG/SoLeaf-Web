import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CtaBand } from '../components/CtaBand';
import { EvercropWorkflow } from '../components/EvercropWorkflow';
import { Hero } from '../components/Hero';
import { Section, SectionHeading } from '../components/Section';
import { StageBadge } from '../components/StageBadge';
import { evercrop } from '../data/company';
import { media } from '../data/media';
import { journey } from '../data/platform';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Platform() {
  usePageMeta(pages.platform);

  return (
    <>
      <Hero
        eyebrow={<><span>{evercrop.brandName}</span><StageBadge stage="mvp" /></>}
        title={<>AI-powered sales <em className="serif-accent">for farms.</em></>}
        lead="Evercrop is designed to turn customer conversations into validated orders using the farm’s own stock records, pricing and approval rules."
        media={media.founders}
        actions={<Link to="/contact" className="btn btn--primary">Talk to Tyllage <ArrowRight size={18} aria-hidden /></Link>}
      />

      <Section tone="white" id="core-capabilities" labelledBy="workflow-title">
        <SectionHeading id="workflow-title" eyebrow="Proposed capabilities" title="Six steps from enquiry to order." />
        <ol className="pillars" role="list">
          {journey.map(({ title, text, icon: Icon }) => (
            <li key={title} className="pillar">
              <span className="pillar__icon"><Icon size={22} aria-hidden /></span>
              <h3 className="pillar__title">{title}</h3>
              <p className="pillar__what">{text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="forest" labelledBy="validation-title" className="section--texture">
        <div className="control">
          <div>
            <p className="eyebrow eyebrow--light">AI that supports farm teams</p>
            <h2 id="validation-title" className="h2">A reply is only the start.</h2>
            <p className="control__lead">Evercrop’s proposed workflow checks stock and prices, records the order and routes exceptions to farm staff.</p>
            <p className="control__lead">Evercrop combines “Ever” and “Crop”, reflecting our goal of helping farms use customer records and order history to build relationships across harvests.</p>
          </div>
          <EvercropWorkflow />
        </div>
      </Section>

      <Section tone="ivory" id="development-status" labelledBy="status-title">
        <SectionHeading id="status-title" eyebrow="Development status" title="Where Evercrop stands." />
        <ol className="timeline timeline--development" role="list">
          <li className="timeline__item">
            <span className="timeline__dot" aria-hidden />
            <span className="timeline__label">Earlier prototype</span>
            <h3 className="timeline__title"><Link to="/projects#meod-farm">Farm sales exploration</Link></h3>
            <p className="timeline__text">Explored harvest pre-orders and farm-visit enquiries using demo data.</p>
          </li>
          <li className="timeline__item timeline__item--current" aria-current="step">
            <span className="timeline__dot" aria-hidden />
            <span className="timeline__label">In development</span>
            <h3 className="timeline__title">Evercrop MVP</h3>
            <p className="timeline__text">We’re building the workflow from enquiry to fulfilment. Commercial deployments are unconfirmed.</p>
          </li>
          <li className="timeline__item timeline__item--next">
            <span className="timeline__dot" aria-hidden />
            <span className="timeline__label">Planned integration</span>
            <h3 className="timeline__title">WhatsApp Business API</h3>
            <p className="timeline__text">The integration would bring customer enquiries into Evercrop.</p>
          </li>
        </ol>
      </Section>

      <CtaBand id="platform-cta" title="Tell us how your team sells today" text="We welcome conversations with farms and potential collaborators." />
    </>
  );
}
