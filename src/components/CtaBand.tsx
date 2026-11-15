import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import { company } from '../data/company';
import { Media } from './Media';

interface CtaBandProps {
  eyebrow?: string;
  title?: ReactNode;
  text?: ReactNode;
  id?: string;
  buttonLabel?: string;
}

export function CtaBand({
  eyebrow = 'Partner with Tyllage',
  id = 'cta-title',
  title = 'Talk to Tyllage',
  text = 'We welcome enquiries about Evercrop and farm sales workflows.',
  buttonLabel = 'Contact Tyllage',
}: CtaBandProps) {
  const { email } = company.contact;
  return (
    <section className="cta-band" aria-labelledby={id}>
      <div className="container">
        <div className="cta-band__panel reveal">
          <Media slot="leaves" className="cta-band__bg" />
          <div className="cta-band__copy">
            {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
            <h2 id={id} className="cta-band__title">
              {title}
            </h2>
            <p className="cta-band__text">{text}</p>
            <div className="cta-band__actions">
              <Link to="/contact" className="btn btn--sage">
                {buttonLabel} <ArrowRight size={18} aria-hidden />
              </Link>
              {email && (
                <a className="btn btn--ghost-light" href={`mailto:${email}`}>
                  <Mail size={18} aria-hidden /> {email}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
