import { DATA } from "../data";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="brand">
        <span className="dot"></span>
        <span>Glacis Decoder · v1</span>
      </div>
      <div className="meta">
        <span><b>{DATA.meta.totalJobs}</b> jobs</span>
        <span><b>{DATA.meta.competitors}</b> competitors</span>
        <span>6mo window</span>
        <span>May 2026</span>
      </div>
    </div>
  );
}
