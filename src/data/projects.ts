import { MEOD_PROTOTYPE_URL } from './company';

export type ProjectStatus = 'Earlier prototype' | 'Concept / Proposed Workstream';

export interface Project {
  id: string;
  name: string;
  shortName: string;
  status: ProjectStatus;
  /**
   * Whether the project appears anywhere on the public website (pages,
   * footer, metadata). Internal workstreams stay recorded here but hidden.
   */
  public: boolean;
  summary: string;
  focusAreas: string[];
  /** Public link to a working prototype. `null` when nothing is public yet. */
  link: string | null;
  linkLabel?: string;
  note: string;
}

export const projects: Project[] = [
  {
    id: 'meod-farm',
    name: 'MEOD Farm exploration',
    shortName: 'MEOD Farm',
    status: 'Earlier prototype',
    public: true,
    summary:
      'An earlier proof of concept explored customer engagement, harvest pre-orders and learning-journey enquiries in an urban farm context.',
    focusAreas: [
      'AI-assisted farm operations',
      'Customer engagement',
      'Harvest pre-orders',
      'Sales and marketing workflows',
      'Learning journey support',
      'Demand visibility',
    ],
    link: MEOD_PROTOTYPE_URL,
    linkLabel: 'View the prototype',
    note: 'The demo uses simulated data. The farm reference identifies the exploration context only and implies no commercial relationship or endorsement.',
  },
  {
    // Internal workstream — not shown on the public website for now.
    id: 'comcrop',
    name: 'ComCrop exploration',
    shortName: 'ComCrop',
    status: 'Concept / Proposed Workstream',
    public: false,
    summary:
      'An earlier concept exploring how farms and buyers could coordinate demand and allocate harvests.',
    focusAreas: [
      'Demand coordination',
      'Harvest allocation',
      'Market routes',
      'Commercial opportunities',
      'Buyer intelligence',
    ],
    link: null,
    note: 'Early concept under exploration. No partnership agreements or commercial outcomes are implied.',
  },
];

/** Projects that may appear on the public website. */
export const publicProjects = projects.filter((p) => p.public);
