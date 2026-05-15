export type FocusKey =
  | "backend"
  | "ai"
  | "frontend"
  | "customer"
  | "gtm"
  | "data"
  | "ops"
  | "security";

export interface Hire {
  title: string;
  location: string;
  focus: FocusKey;
}

export interface WedgeSource {
  company: string;
  title: string;
  posted: string;
}

export interface Wedge {
  id: string;
  rank: number;
  title: string;
  shorthand: string;
  gapScore: number;
  competitorHires: number;
  glacisHires: number;
  competitorCount: number;
  competitorsActive: string[];
  why: string;
  ninetyDay: string;
  sources: WedgeSource[];
}

export interface Competitor {
  slug: string;
  name: string;
  glyph: string;
  tag: string;
  valuation: string | null;
  yc: string | null;
  totalHires: number;
  defunct?: boolean;
  focus: Partial<Record<FocusKey, number>>;
  top: FocusKey[];
}

export interface DecoderData {
  meta: {
    generated: string;
    window: string;
    sources: string[];
    totalJobs: number;
    competitors: number;
  };
  glacis: {
    name: string;
    hires: Hire[];
    breakdown: Record<FocusKey, number>;
  };
  wedges: Wedge[];
  competitors: Competitor[];
  focusLabels: Record<FocusKey, string>;
}

export const DATA: DecoderData = {
  meta: {
    generated: "2026-05-15",
    window: "6 months · Nov 2025 – May 2026",
    sources: ["Wellfound", "Greenhouse", "Built In", "native /careers"],
    totalJobs: 218,
    competitors: 10,
  },

  glacis: {
    name: "Glacis",
    hires: [
      { title: "Founding SWE — Agentic AI", location: "Remote", focus: "ai" },
      { title: "Founding SWE — Agentic AI", location: "On-site, Vietnam", focus: "ai" },
      { title: "Founding Growth & Marketing Lead", location: "Remote", focus: "gtm" },
      { title: "Senior Content Writer", location: "Remote", focus: "gtm" },
    ],
    breakdown: { ai: 2, gtm: 2, customer: 0, data: 0, backend: 0, security: 0, frontend: 0, ops: 0 },
  },

  wedges: [
    {
      id: "customer",
      rank: 1,
      title: "Customer Success / Solutions Engineering",
      shorthand: "CS · SE",
      gapScore: 18.0,
      competitorHires: 18,
      glacisHires: 0,
      competitorCount: 4,
      competitorsActive: ["project44", "FourKites", "Stord", "Loop"],
      why:
        "Enterprise customers won't trust agent-driven ERP changes without a CS layer. This is your competitors' moat as they scale past pilot — every hour their SE team spends inside a TMS is one Glacis can't reclaim.",
      ninetyDay:
        "Hire one Solutions Engineer with a TMS-implementation background. Pair them with a Founding SWE on every pilot.",
      sources: [
        { company: "project44", title: "Senior Solutions Engineer — Enterprise", posted: "Apr 28" },
        { company: "project44", title: "Customer Success Manager, Strategic", posted: "Apr 14" },
        { company: "FourKites", title: "Implementation Lead, EMEA", posted: "Mar 31" },
        { company: "FourKites", title: "Senior CSM — Logistics", posted: "Mar 12" },
        { company: "FourKites", title: "Solutions Architect, TMS", posted: "Feb 18" },
        { company: "Stord", title: "Implementation Engineer", posted: "Apr 02" },
        { company: "Stord", title: "Customer Success — Mid-Market", posted: "Feb 25" },
        { company: "Loop", title: "Solutions Engineer — Freight Audit", posted: "Mar 08" },
      ],
    },
    {
      id: "data",
      rank: 2,
      title: "Data Engineering",
      shorthand: "Data Eng",
      gapScore: 15.0,
      competitorHires: 15,
      glacisHires: 0,
      competitorCount: 5,
      competitorsActive: ["project44", "FourKites", "Optimal Dynamics", "Vorto", "Blume Global"],
      why:
        "An agent that touches an ERP needs a clean, queryable shadow of the customer's data. Competitors are quietly building this layer in parallel — without it, agent reliability caps at demo-quality.",
      ninetyDay:
        "Ship a thin ingest + canonical-model layer (NetSuite, SAP, Oracle TMS). One Data Eng + one SWE can prototype in 6 weeks.",
      sources: [
        { company: "project44", title: "Staff Data Engineer", posted: "May 02" },
        { company: "project44", title: "Analytics Engineer, Network", posted: "Apr 21" },
        { company: "FourKites", title: "Senior Data Engineer — Pipelines", posted: "Apr 09" },
        { company: "Optimal Dynamics", title: "ML Data Platform Engineer", posted: "Mar 27" },
        { company: "Vorto", title: "Data Engineer — Routing", posted: "Mar 11" },
        { company: "Blume Global", title: "Senior Data Engineer", posted: "Feb 22" },
      ],
    },
    {
      id: "backend",
      rank: 3,
      title: "Backend Platform",
      shorthand: "Backend",
      gapScore: 8.0,
      competitorHires: 24,
      glacisHires: 2,
      competitorCount: 7,
      competitorsActive: ["project44", "FourKites", "Stord", "Slip Robotics", "Loop", "Vorto", "Blume Global"],
      why:
        "Agentic features ride on a load-bearing platform. Competitors are hiring 12× harder here than Glacis — at pilot scale this is invisible, at production scale it's the difference between 99.9% and 'why is the agent down.'",
      ninetyDay:
        "Audit the read/write paths your agent touches. One platform hire to harden idempotency + retries in the ERP write layer.",
      sources: [
        { company: "project44", title: "Staff Backend Engineer, Platform", posted: "May 06" },
        { company: "FourKites", title: "Senior Platform Engineer", posted: "Apr 30" },
        { company: "Stord", title: "Backend Engineer — Fulfillment Core", posted: "Apr 17" },
        { company: "Slip Robotics", title: "Platform Engineer", posted: "Mar 19" },
        { company: "Loop", title: "Senior Backend, Payments", posted: "Mar 04" },
      ],
    },
  ],

  competitors: [
    {
      slug: "project44", name: "project44", glyph: "▲", tag: "Control tower · TMS",
      valuation: "$1B+", yc: null, totalHires: 38,
      focus: { backend: 9, ai: 6, customer: 8, data: 7, gtm: 4, frontend: 2, security: 2 },
      top: ["backend", "customer", "data"],
    },
    {
      slug: "fourkites", name: "FourKites", glyph: "◆", tag: "Real-time visibility",
      valuation: "$1B+", yc: null, totalHires: 34,
      focus: { backend: 7, ai: 5, customer: 7, data: 5, gtm: 6, frontend: 2, security: 2 },
      top: ["customer", "backend", "gtm"],
    },
    {
      slug: "stord", name: "Stord", glyph: "■", tag: "Fulfillment + SCM",
      valuation: "$1B", yc: "S15", totalHires: 26,
      focus: { backend: 5, ai: 3, customer: 4, data: 2, gtm: 7, frontend: 3, ops: 2 },
      top: ["gtm", "backend", "customer"],
    },
    {
      slug: "flockfreight", name: "Flock Freight", glyph: "✦", tag: "Pooled shipping",
      valuation: "$1B", yc: "S16", totalHires: 19,
      focus: { backend: 3, ai: 4, customer: 1, data: 2, gtm: 6, ops: 3 },
      top: ["gtm", "ai", "backend"],
    },
    {
      slug: "loop", name: "Loop", glyph: "○", tag: "Freight audit · AI",
      valuation: null, yc: "W22", totalHires: 22,
      focus: { backend: 4, ai: 6, customer: 3, data: 1, gtm: 5, frontend: 3 },
      top: ["ai", "gtm", "backend"],
    },
    {
      slug: "vorto", name: "Vorto", glyph: "▼", tag: "Autonomous logistics",
      valuation: null, yc: "S18", totalHires: 17,
      focus: { backend: 5, ai: 4, customer: 1, data: 3, gtm: 2, frontend: 1, security: 1 },
      top: ["backend", "ai", "data"],
    },
    {
      slug: "sliprobotics", name: "Slip Robotics", glyph: "◇", tag: "SCM robotics",
      valuation: null, yc: "W22", totalHires: 14,
      focus: { backend: 3, ai: 3, customer: 1, data: 1, gtm: 2, ops: 2, frontend: 2 },
      top: ["backend", "ai", "gtm"],
    },
    {
      slug: "optimaldynamics", name: "Optimal Dynamics", glyph: "△", tag: "AI for trucking",
      valuation: null, yc: null, totalHires: 16,
      focus: { backend: 3, ai: 5, customer: 1, data: 3, gtm: 2, frontend: 1, security: 1 },
      top: ["ai", "data", "backend"],
    },
    {
      slug: "blumeglobal", name: "Blume Global", glyph: "□", tag: "Multi-modal logistics",
      valuation: null, yc: null, totalHires: 21,
      focus: { backend: 4, ai: 2, customer: 2, data: 4, gtm: 4, frontend: 2, security: 2, ops: 1 },
      top: ["backend", "data", "gtm"],
    },
    {
      slug: "convoy", name: "Convoy", glyph: "✕", tag: "Pooled shipping · historical",
      valuation: null, yc: null, totalHires: 11, defunct: true,
      focus: { backend: 3, ai: 2, customer: 1, data: 2, gtm: 2, frontend: 1 },
      top: ["backend", "data", "ai"],
    },
  ],

  focusLabels: {
    backend: "Backend",
    ai: "AI · Agents",
    frontend: "Frontend",
    customer: "Customer / SE",
    gtm: "GTM",
    data: "Data Eng",
    ops: "Ops",
    security: "Security",
  },
};
