import { journey } from '../data/platform';

export function EvercropWorkflow() {
  return (
    <figure className="evercrop-flow">
      <figcaption>
        <strong>From enquiry to fulfilment</strong>
        <span>Proposed Evercrop workflow</span>
      </figcaption>
      <ol role="list" aria-label="Proposed order workflow">
        {journey.map(({ title, icon: Icon }) => (
          <li key={title}>
            <span className="evercrop-flow__icon" aria-hidden="true"><Icon size={18} /></span>
            <span className="evercrop-flow__step">{title}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
