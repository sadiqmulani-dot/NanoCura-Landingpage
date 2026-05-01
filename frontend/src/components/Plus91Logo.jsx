/**
 * Plus91 Technologies logo badge.
 * The provided artwork ships with a black background, so we wrap it in a
 * dark surface whenever it is placed on light sections.
 *
 * Variants:
 *   - "dark"   → black pill, for light backgrounds (header, hero, pricing).
 *   - "plain"  → no surface, for already-dark sections (footer).
 */
const PLUS91_LOGO =
  "https://customer-assets.emergentagent.com/job_medixcel-hospitals/artifacts/y452o2s4_plus91-logo-High-res1-1-1024x491%20%282%29.png";

export default function Plus91Logo({
  variant = "dark",
  size = "md",
  showLabel = true,
  className = "",
}) {
  const sizes = {
    sm: { wrapper: "h-6", img: "h-12 w-[80px]", text: "text-[10px]" },
    md: { wrapper: "h-8", img: "h-16 w-[110px]", text: "text-[11px]" },
    lg: { wrapper: "h-10", img: "h-20 w-[140px]", text: "text-xs" },
    xl: { wrapper: "h-14", img: "h-28 w-[200px]", text: "text-sm" },
  };
  const s = sizes[size] || sizes.md;

  const inner = (
    <span
      className={`block overflow-hidden ${s.wrapper} relative`}
      style={{ width: s.img.split(" ")[1].replace("w-[", "").replace("]", "") }}
    >
      <img
        src={PLUS91_LOGO}
        alt="Plus91 Technologies"
        draggable={false}
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none ${s.img} object-contain select-none`}
      />
    </span>
  );

  if (variant === "plain") {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        {inner}
        {showLabel && (
          <span className={`${s.text} font-mono-tech uppercase tracking-[0.18em] text-slate-300`}>
            Plus91 Technologies
          </span>
        )}
      </div>
    );
  }

  // dark pill on light surface
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-[#0A1F3D] border border-slate-800 px-3 py-1.5 shadow-sm ${className}`}
      data-testid="plus91-badge"
    >
      {inner}
      {showLabel && (
        <span className={`${s.text} font-mono-tech uppercase tracking-[0.18em] text-slate-200`}>
          Powered by Plus91
        </span>
      )}
    </div>
  );
}
