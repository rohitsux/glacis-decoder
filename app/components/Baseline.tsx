import { DATA } from "../data";

export function Baseline() {
  const g = DATA.glacis;
  return (
    <div className="baseline">
      <div className="blk-l">
        <div className="k">Baseline · Glacis</div>
        <div className="v">
          4 current hires.<br />
          50% AI · 50% <em>GTM</em>.
        </div>
      </div>
      <div className="blk-r">
        {g.hires.map((h, i) => (
          <div key={i} className="hire-row">
            <div className="t">{h.title}</div>
            <div className="loc">{h.location}</div>
            <div className={"fc " + h.focus}>{DATA.focusLabels[h.focus]}</div>
          </div>
        ))}
        <div className="gap-summary">
          Glacis hiring signal: <b>50% AI/infra, 50% GTM</b>. Zero hires on{" "}
          <span className="zero">Customer Success</span>,{" "}
          <span className="zero">Data Engineering</span>,{" "}
          <span className="zero">Backend Platform</span>,{" "}
          <span className="zero">Security/Compliance</span>. The first three are
          the wedges above; the fourth is one Glacis probably defers to series-A.
        </div>
      </div>
    </div>
  );
}
