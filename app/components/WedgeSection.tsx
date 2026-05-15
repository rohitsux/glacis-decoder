"use client";

import { useState, CSSProperties } from "react";
import { DATA, Wedge } from "../data";

const WEDGE_ACCENTS = [
  { var: "--c-navy", bg: "--c-navy-bg", name: "navy" },
  { var: "--c-amber", bg: "--c-amber-bg", name: "amber" },
  { var: "--c-teal", bg: "--c-teal-bg", name: "teal" },
];

function WedgeCard({ wedge, idx }: { wedge: Wedge; idx: number }) {
  const [open, setOpen] = useState(idx === 0);
  const accent = WEDGE_ACCENTS[idx];
  const style = {
    "--accent": `var(${accent.var})`,
    "--accent-bg": `var(${accent.bg})`,
  } as CSSProperties;

  return (
    <article className={"wedge" + (open ? " open" : "")} style={style}>
      <div>
        <div className="rank">{String(idx + 1).padStart(2, "0")}</div>
        <div className="rank-meta">
          Wedge · gap {wedge.gapScore.toFixed(1)}<br />
          accent · {accent.name}
        </div>
      </div>
      <div className="body">
        <h3>{wedge.title}</h3>

        <div className="stats">
          <div className="stat accent">
            <div className="k">Competitor hires</div>
            <div className="v">{wedge.competitorHires}<span className="vs">/ 6mo</span></div>
          </div>
          <div className="stat">
            <div className="k">Glacis hires</div>
            <div className="v">{wedge.glacisHires}</div>
          </div>
          <div className="stat">
            <div className="k">Active competitors</div>
            <div className="v">{wedge.competitorCount}<span className="vs">of 10</span></div>
          </div>
          <div className="stat">
            <div className="k">Gap score</div>
            <div className="v">{wedge.gapScore.toFixed(1)}</div>
          </div>
        </div>

        <p className="why">{wedge.why}</p>

        <div className="ninety">
          <div className="k">90-day capture</div>
          <div className="v">{wedge.ninetyDay}</div>
        </div>

        <div className="active-comp">
          <span className="clbl">Hiring here →</span>
          {wedge.competitorsActive.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>

        <button className="expand" onClick={() => setOpen((v) => !v)}>
          <span className="arrow">›</span>
          {open ? "Hide" : "See"} {wedge.sources.length} source jobs
        </button>

        <div className="sources">
          <div className="sources-inner">
            {wedge.sources.map((s, i) => (
              <div key={i} className="src-row">
                <div className="co">{s.company}</div>
                <div className="tt">{s.title}</div>
                <div className="dt">{s.posted}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export function WedgeSection() {
  return (
    <section className="sec">
      <div className="sec-head">
        <div className="sec-num">
          § 02 — Wedges
          <b>The actual value</b>
        </div>
        <div>
          <h2 className="sec-title">
            Three things <em>2 or more</em> competitors are hiring for, that Glacis isn&apos;t.
          </h2>
          <p className="sec-sub">
            Ranked by gap score — competitor-intensity divided by Glacis hires + 1.
            Higher means a larger asymmetry. Each card carries its evidence and a
            90-day capture suggestion.
          </p>
        </div>
      </div>
      <div className="wedges">
        {DATA.wedges.map((w, i) => (
          <WedgeCard key={w.id} wedge={w} idx={i} />
        ))}
      </div>
    </section>
  );
}
