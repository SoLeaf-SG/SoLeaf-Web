import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { CtaBand } from '../components/CtaBand';
import { EvercropWorkflow } from '../components/EvercropWorkflow';
import { FollowJourney } from '../components/FollowJourney';
import { Media } from '../components/Media';
import { Section, SectionHeading } from '../components/Section';
import { StageBadge } from '../components/StageBadge';
import { evercrop } from '../data/company';
import { media } from '../data/media';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Home() {
  usePageMeta(pages.home);

  return (
    <>
      <Hero
        variant="home"
        eyebrow="SoLeaf · Singapore Agritech"
        title={<>Connecting farms with <em className="hero__title-accent">the people they feed.</em></>}
        lead="We build practical technology that helps farms simplify operations, connect with buyers and make fresh local produce more accessible."
        media={media.hero}
        actions={
          <>
            <Link to="/contact" className="btn btn--sage">
              Contact SoLeaf
            </Link>
            <Link to="/about" className="btn btn--ghost-light">
              About SoLeaf <ArrowRight size={18} aria-hidden />
            </Link>
          </>
        }
      />

      <Section tone="ivory" labelledBy="purpose-title" className="section--tight-bottom">
        <div className="feature-split">
          <Media slot={media.purpose} className="feature-split__image" />
          <div className="feature-split__copy">
            <p className="eyebrow">Why we build</p>
            <h2 id="purpose-title" className="h2">Farm sales should be <em className="serif-accent">easier to manage.</em></h2>
            <p>When a buyer asks what’s available, farm teams may have to search chats, check stock and confirm prices before they can record an order. We’re building software to make that work easier to handle.</p>
          </div>
        </div>
      </Section>

      <Section tone="ivory" labelledBy="evercrop-intro" className="section--product-intro">
        <div className="product-intro">
          <div className="product-intro__copy">
            <SectionHeading
              id="evercrop-intro"
              eyebrow={<><span>Our flagship product</span><StageBadge stage="mvp" /></>}
              title={<>{evercrop.name} <span>by SoLeaf</span></>}
              intro={evercrop.tagline}
            />
            <p>Evercrop is an AI-powered farm sales platform designed to connect customer enquiries, inventory availability and order management.</p>
            <div className="product-intro__actions">
              <Link to="/platform" className="btn btn--primary">Explore Evercrop <ArrowRight size={18} aria-hidden /></Link>
            </div>
          </div>
          <EvercropWorkflow />
        </div>
      </Section>

      <Section tone="beige" labelledBy="home-story-title">
        <div className="feature-split">
          <Media slot={media.founders} className="feature-split__image" />
          <div className="feature-split__copy">
            <p className="eyebrow">About SoLeaf</p>
            <h2 id="home-story-title" className="h2">From classrooms to <em className="serif-accent">cultivating change.</em></h2>
            <p>Felicia Tan and Shernell Ho founded SoLeaf in Singapore to apply their software skills to agricultural businesses.</p>
            <Link to="/about" className="btn btn--outline">Meet the team <ArrowRight size={18} aria-hidden /></Link>
          </div>
        </div>
      </Section>

      <FollowJourney />

      <CtaBand
        id="home-cta"
        title="Talk to us about your farm’s workflow"
        text="We welcome feedback from farm teams and enquiries from potential collaborators."
      />
    </>
  );
}
