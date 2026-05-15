import { DATA } from "../data";

export function LogoStrip() {
  return (
    <div className="strip">
      <div className="label">
        <b>10 companies analyzed</b><br />
        sources: {DATA.meta.sources.join(" · ")}
      </div>
      <div className="marks">
        {DATA.competitors.map((c) => (
          <span key={c.slug} className={"wordmark" + (c.defunct ? " defunct" : "")}>
            <span className="glyph">{c.glyph}</span>{c.name}
          </span>
        ))}
      </div>
    </div>
  );
}
