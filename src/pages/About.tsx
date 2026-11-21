import { Compass, Eye, HeartHandshake, Lightbulb, ShieldCheck, Sprout, Target } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Section, SectionHeading } from '../components/Section';
import { CtaBand } from '../components/CtaBand';
import { Media } from '../components/Media';
import { TeamGallery, type Person } from '../components/TeamGallery';
import { company } from '../data/company';
import { media } from '../data/media';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

/**
 * Founders' story — an editable draft supplied by the founders.
 * Keep it free of invented experiences, schools, awards or qualifications.
 */
const aboutDescription = 'SoLeaf is a Singapore-based, female-founded AgriTech software startup developing practical AI solutions for agricultural businesses.';
const aboutFocus = 'Our initial focus is on farm operations and sales intelligence, rather than IoT, robotics or physical agricultural equipment.';
const aboutMission = 'Empower farms with accessible technology that improves sales efficiency, strengthens market connections, and supports sustainable agricultural operations.';
const aboutVision = 'Build a smarter and more commercially resilient agricultural ecosystem through intelligent, connected software.';

const story = [
  'Our journey began with a shared interest in technology and the belief that meaningful innovation should solve real-world problems.',
  'Through our educational journeys from ITE to polytechnic, we developed our technical foundations, explored software development, and discovered opportunities to apply technology beyond the classroom.',
  'That curiosity eventually led us towards agriculture — an industry where practical digital solutions can help businesses improve operations, strengthen customer relationships and make more informed decisions.',
  'As two aspiring female technology entrepreneurs, we founded SoLeaf to explore how artificial intelligence and connected software can support agricultural businesses in Singapore.',
  'We’re still learning, building and refining our solutions with a focus on real operational needs.',
];
const storyClosing =
  'For us, SoLeaf represents more than a technology project. It represents our commitment to applying what we’ve learnt to challenges worth solving.';

const values = [
  { icon: Sprout, title: 'Farm-first', text: 'We start from the realities of agricultural businesses — their time, budgets and ways of working.' },
  { icon: Lightbulb, title: 'Practical', text: 'We favour technology that is useful today over complexity that looks impressive but goes unused.' },
  { icon: Eye, title: 'Honest', text: 'We are clear about what our technology can and cannot do, and where each product stands.' },
  { icon: ShieldCheck, title: 'Responsible', text: 'We treat data with care and design AI that keeps people informed and in control.' },
  { icon: HeartHandshake, title: 'Collaborative', text: 'We build alongside farms, educators and partners, and learn from every conversation.' },
];

const approach = [
  { title: 'Listen first', text: 'Understand real farm workflows before designing a feature.' },
  { title: 'Prototype early', text: 'Test ideas with working prototypes and demo data.' },
  { title: 'Validate with farms', text: 'Treat every challenge as a hypothesis until farms confirm it.' },
  { title: 'Build what helps', text: 'Keep only what makes daily operations genuinely easier.' },
];

/** Milestones in order — no dates are shown until they are confirmed. */
const journeySteps = [
  { label: 'Inspiration', title: 'Where it began', text: 'Our experience with SCCCI and Technopreneurship inspired us to explore turning technical ideas into real-world solutions.', state: 'done' },
  { label: 'Established', title: 'SoLeaf’s venture begins', text: 'Our venture was registered in Singapore in October 2026 to develop our own technology-driven solutions.', state: 'done' },
  { label: 'Exploration', title: 'Our first prototypes', text: 'We explored AI-assisted farm interactions through early proof-of-concept and prototype work.', state: 'done' },
  { label: 'Current focus', title: 'Introducing Evercrop', text: 'Our flagship product aims to connect customer enquiries, stock availability and farm orders.', state: 'current' },
  { label: 'Next', title: 'From MVP to farm pilots', text: 'Refine Evercrop, gather farm feedback and work towards a measurable pilot.', state: 'next' },
] as const;

/** Founders first, then team members, in the order listed in company.ts. */
const people: Person[] = [
  ...company.founders.map((f) => ({
    name: f.name,
    role: f.role,
    note: f.bio ?? undefined,
    linkedin: f.linkedin ?? undefined,
    photo: f.photo ?? undefined,
    founder: true,
  })),
  ...company.team.map((m) => ({ name: m.name, role: m.role, note: m.focus, linkedin: m.linkedin, photo: m.photo })),
];

export default function About() {
  usePageMeta(pages.about);

  return (
    <>
      <Hero
        eyebrow="About SoLeaf"
        title={
          <>
            From Classrooms to <em className="serif-accent">Cultivating Change.</em>
          </>
        }
        lead={`${aboutDescription} ${aboutFocus}`}
        media={media.aboutStory}
      />

      {/* Story */}
      <Section tone="white" labelledBy="story-title" className="story">
        <div className="story__grid">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 id="story-title" className="h2">
              Founded by two female technology entrepreneurs.
            </h2>
            <p className="muted">
              SoLeaf was founded by {company.founders.map((f) => f.name).join(' and ')}.
            </p>
          </div>
          <div className="story__body">
            {story.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <blockquote className="story__quote">
              <p>{storyClosing}</p>
              <footer>- The founders of SoLeaf</footer>
            </blockquote>
          </div>
        </div>
      </Section>

      {/* Team: founders first, then the wider team, in one scrollable row */}
      <Section tone="beige" labelledBy="team-title">
        <div className="reveal">
          <TeamGallery
            people={people}
            label="SoLeaf team members"
            heading={
              <SectionHeading
                id="team-title"
                eyebrow="Our team"
                title="The people behind SoLeaf."
                intro={`Founded by ${company.founders.map((f) => f.name).join(' and ')}, and growing with a team who share our focus.`}
              />
            }
          />
        </div>
      </Section>

      {/* Mission & vision */}
      <Section tone="forest" labelledBy="mission-title" className="section--texture">
        <h2 id="mission-title" className="sr-only">
          Mission and vision
        </h2>
        <div className="mv-grid">
          <div className="mv-card reveal">
            <span className="mv-card__icon">
              <Target size={22} aria-hidden />
            </span>
            <h3>Our mission</h3>
            <p>{aboutMission}</p>
          </div>
          <div className="mv-card reveal" style={{ ['--delay' as string]: '90ms' }}>
            <span className="mv-card__icon">
              <Compass size={22} aria-hidden />
            </span>
            <h3>Our vision</h3>
            <p>{aboutVision}</p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section tone="ivory" labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="Our values" title="What guides how we build." />
        <ul className="values" role="list">
          {values.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="value reveal" style={{ ['--delay' as string]: `${i * 60}ms` }}>
              <span className="value__icon">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="value__title">{title}</h3>
              <p className="value__text">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Why agriculture */}
      <Section tone="white" labelledBy="why-title">
        <div className="feature-split">
          <Media slot={media.whyAgriculture} className="feature-split__image reveal" zoom />
          <div className="feature-split__copy reveal">
            <p className="eyebrow">Why agriculture?</p>
            <h2 id="why-title" className="h2">
              An essential industry where practical software can help.
            </h2>
            <p>
              Agriculture underpins food security and community wellbeing, yet much of the commercial work — sales,
              enquiries, outreach and planning — is still handled manually. Fresh produce is perishable, so gaps
              between harvest and demand can mean missed sales and avoidable waste.
            </p>
            <p>
              We believe accessible software that doesn’t require costly sensors or years of historical data can
              help close that gap, and give farm teams more confidence in their decisions.
            </p>
          </div>
        </div>
      </Section>

      {/* Approach + responsible AI */}
      <Section tone="ivory" labelledBy="approach-title">
        <div className="two-col">
          <div className="reveal">
            <p className="eyebrow">Our approach to innovation</p>
            <h2 id="approach-title" className="h3">
              Learn, prototype, validate, refine.
            </h2>
            <ol className="approach-list" role="list">
              {approach.map((a, i) => (
                <li key={a.title}>
                  <span aria-hidden>{i + 1}</span>
                  <div>
                    <strong>{a.title}</strong>
                    <p>{a.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal responsible-card">
            <span className="icon-chip">
              <ShieldCheck size={20} aria-hidden />
            </span>
            <h2 className="h3">Responsible AI</h2>
            <p>
              Our AI is designed to assist farm staff, not to replace their judgement. Suggestions are explained,
              editable and acted on only with approval. AI does not set prices, make production decisions or share
              customer data on its own.
            </p>
            <p>
              We aim to collect only the data that is needed, protect it appropriately, and be open about the limits
              of our models.
            </p>
          </div>
        </div>
      </Section>

      {/* Our journey */}
      <Section tone="white" labelledBy="journey-title" className="section--tight">
        <SectionHeading
          id="journey-title"
          eyebrow="Our journey"
          title="From inspiration to innovation."
          intro="What started with a passion for solving real-world problems is growing into a Singapore AgriTech venture building practical software for farms."
        />
        <ol className="timeline timeline--company" role="list">
          {journeySteps.map((s, i) => (
            <li
              key={s.title}
              className={`timeline__item timeline__item--${s.state} reveal`}
              style={{ ['--delay' as string]: `${i * 80}ms` }}
              aria-current={s.state === 'current' ? 'step' : undefined}
            >
              <span className="timeline__dot" aria-hidden />
              <span className="timeline__label">
                {s.label}
                {s.state === 'current' && <span className="sr-only"> (current stage)</span>}
              </span>
              <h3 className="timeline__title">{s.title}</h3>
              <p className="timeline__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand
        id="about-cta-title"
        eyebrow="Partner with SoLeaf"
        title="Let’s Grow Something Meaningful Together."
        text="We would like to hear from farm owners, agricultural businesses, technology partners, schools, industry collaborators, mentors and investors."
        buttonLabel="Partner With SoLeaf"
      />
    </>
  );
}
