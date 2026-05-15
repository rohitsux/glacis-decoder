"use client";

import { useState, useMemo } from "react";
import { DATA, Competitor, FocusKey } from "../data";

const SORTS: { key: "total" | FocusKey; label: string }[] = [
  { key: "total", label: "Total hires" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI" },
  { key: "customer", label: "CS / SE" },
  { key: "data", label: "Data" },
  { key: "gtm", label: "GTM" },
];

function wedgeIdxFor(focusKey: string): number {
  if (focusKey === "customer") return 1;
  if (focusKey === "data") return 2;
  if (focusKey === "backend") return 3;
  return 0;
}

function CompetitorCard({ c, rank }: { c: Competitor; rank: number }) {
  const topAreas = Object.entries(c.focus)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 4) as [FocusKey, number][];
  const max = topAreas[0][1];

  return (
    <div className={"cc" + (c.defunct ? " defunct" : "")}>
      <div className="cc-head">
        <div>
          <div className="cc-name">
            <span className="glyph">{c.glyph}</span>{c.name}
          </div>
          <div className="cc-tag">{c.tag}</div>
        </div>
        <div className="cc-badges">
          {c.yc && <span className="cc-badge">YC {c.yc}</span>}
          {c.valuation && <span className="cc-badge">{c.valuation}</span>}
          {c.defunct && <span className="cc-badge">RIP</span>}
        </div>
      </div>

      <div className="cc-total">
        <span className="lbl">Hires · 6mo · rank #{rank}</span>
        {c.totalHires}
      </div>

      <div className="cc-bars">
        {topAreas.map(([k, v]) => {
          const w = wedgeIdxFor(k);
          return (
            <div key={k} className={"bar" + (w ? " wedge-" + w : "")}>
              <div className="b-lbl">
                <span>{DATA.focusLabels[k] || k}</span>
                <span className="b-track">
                  <span className="b-fill" style={{ width: `${(v / max) * 100}%` }}></span>
                </span>
              </div>
              <span className="b-count">{v}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function CompetitorGrid() {
  const [sortKey, setSortKey] = useState<"total" | FocusKey>("total");

  const sorted = useMemo(() => {
    const arr = [...DATA.competitors];
    if (sortKey === "total") {
      arr.sort((a, b) => b.totalHires - a.totalHires);
    } else {
      arr.sort((a, b) => (b.focus[sortKey] || 0) - (a.focus[sortKey] || 0));
    }
    return arr;
  }, [sortKey]);

  return (
    <section className="sec">
      <div className="sec-head">
        <div className="sec-num">
          § 03 — Per-competitor breakdown
          <b>The receipts</b>
        </div>
        <div>
          <h2 className="sec-title">
            Where each of the 10 is <em>actually</em> spending its hiring budget.
          </h2>
          <p className="sec-sub">
            Top 4 focus areas per company. Bars highlighted by wedge color
            (navy · CS/SE, amber · Data, teal · Backend) show where the gap
            against Glacis is largest.
          </p>
        </div>
      </div>

      <div className="grid-controls">
        <span className="count">
          {sorted.length} companies · sorted by{" "}
          {SORTS.find((s) => s.key === sortKey)!.label.toLowerCase()}
        </span>
        <div className="sort-group">
          <span className="lbl">Sort</span>
          {SORTS.map((s) => (
            <button
              key={s.key}
              className={"sort-btn" + (sortKey === s.key ? " on" : "")}
              onClick={() => setSortKey(s.key)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {sorted.map((c, i) => (
          <CompetitorCard key={c.slug} c={c} rank={i + 1} />
        ))}
      </div>
    </section>
  );
}
