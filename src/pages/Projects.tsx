import { useState } from 'react';
import { ArrowUpRight, Check, ClipboardCheck, FlaskConical, Info, MonitorPlay } from 'lucide-react';
import { Hero } from '../components/Hero';
import { Section } from '../components/Section';
import { evercrop } from '../data/company';
import { CtaBand } from '../components/CtaBand';
import { Media } from '../components/Media';
import { publicProjects } from '../data/projects';
import { media } from '../data/media';
import { pages } from '../data/seo';
import { usePageMeta } from '../hooks/usePageMeta';

function PrototypePreview({ url, name }: { url: string; name: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <figure className="browser reveal">
      <div className="browser__bar" aria-hidden>
        <span />
        <span />
        <span />
        <span className="browser__url">{url.replace(/^https?:\/\//, '')}</span>
      </div>
      <div className="browser__screen">
        {loaded ? (
          <iframe
            src={url}
            title={`${name} prototype (interactive preview)`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="browser__placeholder">
            <Media slot={media.projectMeod} className="browser__bg" />
            <div className="browser__cta">
              <MonitorPlay size={28} aria-hidden />
              <p>Load an interactive preview of the prototype. It opens the prototype site inside this page.</p>
              <button type="button" className="btn btn--primary btn--sm" onClick={() => setLoaded(true)}>
                Load prototype preview
              </button>
            </div>
          </div>
        )}
      </div>
      <figcaption className="browser__caption">
        <Info size={14} aria-hidden /> Historical prototype preview using demo data.
      </figcaption>
    </figure>
  );
}

export default function Projects() {
  usePageMeta(pages.projects);

  return (
    <>
      <Hero
        eyebrow="Projects & prototypes"
        title={<>Where our technology <em className="serif-accent">takes root.</em></>}
        lead={`${evercrop.brandName}, our flagship product in development, builds on earlier exploration of farm sales and operations.`}
        media={media.projectMeod}
      />

      {publicProjects.map((project) => (
        <div key={project.id} id={project.id} className="project-anchor">
          <Section tone="white" labelledBy={`${project.id}-title`} className="section--tight-bottom">
            <div className="project-head reveal">
              <div>
                <p className="status-badge status-badge--prototype">
                  <span className="sr-only">Status: </span>
                  {project.status}
                </p>
                <h2 id={`${project.id}-title`} className="h2">
                  {project.name}
                </h2>
                <p className="prose-lead">{project.summary}</p>
              </div>
              {project.link && (
                <a className="btn btn--primary" href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.linkLabel ?? 'Visit'} <ArrowUpRight size={18} aria-hidden />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>

            <div className="notice reveal" role="note">
              <Info size={18} aria-hidden />
              <p>{project.note}</p>
            </div>

            <div className="case-grid">
              <div className="case-block">
                <span className="case-block__icon"><FlaskConical size={22} aria-hidden /></span>
                <h3>What we explored</h3>
                <p>With demo data, we explored how an urban farm could manage customer enquiries, harvest pre-orders and farm visits in one place.</p>
              </div>
              <div className="case-block case-block--accent">
                <span className="case-block__icon"><ClipboardCheck size={22} aria-hidden /></span>
                <h3>What we’re building now</h3>
                <p>Evercrop is designed to check stock and pricing, then turn customer enquiries into orders farm staff can fulfil.</p>
              </div>
            </div>
          </Section>

          <Section tone="ivory" labelledBy={`${project.id}-capabilities`} className="section--tight">
            <div className="capabilities-split">
              <div className="reveal">
                <p className="eyebrow">Key prototype capabilities</p>
                  <h2 id={`${project.id}-capabilities`} className="h3">
                  What the prototype explores
                  </h2>
                <ul className="project-focus" role="list">
                  {project.focusAreas.map((area) => (
                    <li key={area}>
                      <Check size={18} aria-hidden /> {area}
                    </li>
                  ))}
                </ul>
              </div>
              {project.link && <PrototypePreview url={project.link} name={project.shortName} />}
            </div>
          </Section>
        </div>
      ))}

      <CtaBand
        id="projects-cta-title"
        title="Discuss your farm’s sales workflow"
        text="Share how your team handles customer enquiries and orders today."
      />
    </>
  );
}
