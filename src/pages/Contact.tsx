import { ArrowUpRight, Cpu, Handshake, Landmark, Mail, Sprout } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { ContactForm } from '../components/ContactForm';
import { InstagramIcon, LinkedInIcon } from '../components/Icons';
import { company } from '../data/company';
import { media } from '../data/media';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

const audiences = [
  { icon: Sprout, title: 'Farms and agricultural businesses', text: 'Share how you handle customer enquiries, stock and orders.' },
  { icon: Cpu, title: 'Technology collaborators', text: 'Get in touch about software, data and messaging integrations.' },
  { icon: Handshake, title: 'Industry and venture enquiries', text: 'Start a conversation about the company and its development plans.' },
];

export default function Contact() {
  usePageMeta(pages.contact);
  const { email, phone, address, uen } = company.contact;

  return (
    <>
      <Hero
        eyebrow="Contact SoLeaf"
        title={<>Let’s grow something <em className="serif-accent">together.</em></>}
        lead="Tell us how your farm handles enquiries and orders, ask about Evercrop, or start a conversation about collaborating."
        media={media.contact}
      />

      <Section tone="white" labelledBy="audiences-title" className="section--tight">
        <h2 id="audiences-title" className="h3 audiences__title reveal">
          Who we would like to work with
        </h2>
        <ul className="audience-grid" role="list">
          {audiences.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="audience reveal" style={{ ['--delay' as string]: `${i * 50}ms` }}>
              <span className="audience__icon">
                <Icon size={22} aria-hidden />
              </span>
              <strong>{title}</strong>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="ivory" labelledBy="enquiry-title">
        <div className="contact-layout">
          <div className="contact-layout__form reveal">
            <h2 id="enquiry-title" className="h3">
              Send an enquiry
            </h2>
            <p className="muted">Share a little about your organisation and what you’d like to discuss.</p>
            <ContactForm />
          </div>

          <aside className="contact-layout__aside reveal" aria-label="Other ways to connect">
            {email && (
              <div className="aside-card aside-card--dark">
                <span className="aside-card__icon">
                  <Mail size={22} aria-hidden />
                </span>
                <h3>Email the SoLeaf team</h3>
                <p>Send us a note about Evercrop, your farm’s sales workflow, or working together.</p>
              </div>
            )}

            <div className="aside-card">
              <h3>Follow SoLeaf</h3>
              <ul className="aside-links" role="list">
                <li>
                  <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <span className="aside-links__icon">
                      <LinkedInIcon size={18} />
                    </span>
                    <span>
                      <strong>LinkedIn</strong>
                      <span>Company updates and news</span>
                    </span>
                    <ArrowUpRight size={16} aria-hidden />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                {company.social.instagram && (
                  <li>
                    <a href={company.social.instagram} target="_blank" rel="noopener noreferrer">
                      <span className="aside-links__icon">
                        <InstagramIcon size={18} />
                      </span>
                      <span>
                        <strong>Instagram</strong>
                        <span>Our startup journey</span>
                      </span>
                      <ArrowUpRight size={16} aria-hidden />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="aside-card aside-card--plain">
              <Landmark size={20} aria-hidden />
              <div>
                <h3>Registered business</h3>
                <p>
                  <strong>SoLeaf LLP</strong>
                  <br />
                  {company.entityType}, registered in {company.country}
                  {uen && (
                    <>
                      <br />
                      UEN: {uen}
                    </>
                  )}
                  {phone && (
                    <>
                      <br />
                      <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                    </>
                  )}
                </p>
                {address && <address>{address}</address>}
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
