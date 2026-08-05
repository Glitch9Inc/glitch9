// ─────────────────────────────────────────────────────────────
// Generated key art for the titles that have no illustration yet.
//
// These are hand-authored SVG compositions, not placeholders — but
// they are meant to be replaced. When real art exists, swap the
// component for an <img> in sections/Titles.jsx; nothing else needs
// to change.
//
// Everything is deterministic: the seeded RNG below means the stars,
// windows and rain land in the same place on every render and in
// every build.
// ─────────────────────────────────────────────────────────────

function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let x = Math.imul(a ^ (a >>> 15), 1 | a)
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296
  }
}

const r2 = (n, d = 2) => Number(n.toFixed(d))

/* ═══════════════════════════════════════════════════════════
   Galaxxy Idols — idol management, in space
   ═══════════════════════════════════════════════════════════ */
export function GalaxxyArt({ className = '' }) {
  const rand = rng(19870417)

  const stars = Array.from({ length: 190 }, () => ({
    x: r2(rand() * 1200),
    y: r2(rand() * 800),
    r: r2(rand() * 1.5 + 0.25),
    o: r2(rand() * 0.75 + 0.12),
  }))

  const sparkles = [
    { x: 210, y: 150, s: 20 },
    { x: 880, y: 110, s: 13 },
    { x: 470, y: 250, s: 9 },
    { x: 1050, y: 330, s: 16 },
    { x: 150, y: 430, s: 11 },
  ]

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="Galaxxy Idols key art — a stage light over a planet horizon"
    >
      <defs>
        <radialGradient id="gx-sky" cx="35%" cy="30%" r="95%">
          <stop offset="0%" stopColor="#2A1B57" />
          <stop offset="52%" stopColor="#140E33" />
          <stop offset="100%" stopColor="#07061A" />
        </radialGradient>
        <radialGradient id="gx-neb-a" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B48CFF" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B48CFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gx-neb-b" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF3D9A" stopOpacity="0.36" />
          <stop offset="100%" stopColor="#FF3D9A" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gx-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5FE8FF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5FE8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gx-beam2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FF3D9A" stopOpacity="0.26" />
          <stop offset="100%" stopColor="#FF3D9A" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gx-planet" x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#3B2A78" />
          <stop offset="100%" stopColor="#0C0A24" />
        </linearGradient>
        <linearGradient id="gx-rim" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#FF3D9A" stopOpacity="0" />
          <stop offset="30%" stopColor="#FF3D9A" stopOpacity="1" />
          <stop offset="58%" stopColor="#FFC2DF" stopOpacity="1" />
          <stop offset="80%" stopColor="#B48CFF" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#5FE8FF" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gx-rimglow" x1="0" y1="0" x2="1" y2="0.6">
          <stop offset="0%" stopColor="#FF3D9A" stopOpacity="0" />
          <stop offset="45%" stopColor="#FF3D9A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#5FE8FF" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#gx-sky)" />

      {/* nebulae */}
      <ellipse cx="300" cy="230" rx="430" ry="280" fill="url(#gx-neb-a)" />
      <ellipse cx="930" cy="170" rx="360" ry="235" fill="url(#gx-neb-b)" />
      <ellipse cx="640" cy="470" rx="520" ry="180" fill="url(#gx-neb-a)" opacity="0.5" />

      {/* stars */}
      <g fill="#F2F0FF">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} opacity={s.o} />
        ))}
      </g>

      {/* stage beams */}
      <polygon points="250,-40 330,-40 620,760 380,760" fill="url(#gx-beam)" />
      <polygon points="880,-40 950,-40 1020,760 800,760" fill="url(#gx-beam2)" />

      {/* orbital rings */}
      <g
        fill="none"
        stroke="#B48CFF"
        transform="rotate(-14 700 700)"
        strokeWidth="1"
      >
        <ellipse cx="700" cy="700" rx="560" ry="168" opacity="0.4" />
        <ellipse cx="700" cy="700" rx="440" ry="124" opacity="0.24" />
        <ellipse cx="700" cy="700" rx="700" ry="214" opacity="0.15" />
      </g>

      {/* planet — the horizon arc sits high enough to read above the caption */}
      <g>
        <circle cx="700" cy="880" r="360" fill="url(#gx-planet)" />
        <path
          d="M340 880a360 360 0 0 1 720 0"
          fill="none"
          stroke="url(#gx-rimglow)"
          strokeWidth="18"
          opacity="0.5"
        />
        <path
          d="M340 880a360 360 0 0 1 720 0"
          fill="none"
          stroke="url(#gx-rim)"
          strokeWidth="4"
        />
      </g>

      {/* sparkles */}
      <g stroke="#F2F0FF" strokeWidth="1.1" opacity="0.75">
        {sparkles.map((s, i) => (
          <g key={i}>
            <line x1={s.x - s.s} y1={s.y} x2={s.x + s.s} y2={s.y} />
            <line x1={s.x} y1={s.y - s.s} x2={s.x} y2={s.y + s.s} />
          </g>
        ))}
      </g>

      {/* faint far horizon */}
      <rect x="0" y="452" width="1200" height="1" fill="#B48CFF" opacity="0.16" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════════════
   CityChat — a bartending sim about listening
   ═══════════════════════════════════════════════════════════ */
export function CityChatArt({ className = '' }) {
  const rand = rng(20240611)

  // three depth layers of skyline
  const layer = (count, baseY, minH, maxH, seedShift) => {
    const rr = rng(20240611 + seedShift)
    let x = -40
    const out = []
    while (x < 1240) {
      const w = rr() * 70 + 34
      const h = rr() * (maxH - minH) + minH
      out.push({ x: r2(x), y: r2(baseY - h), w: r2(w), h: r2(h), rr: rr() })
      x += w + rr() * 14 + 4
    }
    return out.slice(0, count)
  }

  const far = layer(40, 470, 60, 210, 3)
  const mid = layer(30, 530, 90, 300, 11)
  const near = layer(22, 606, 120, 260, 29)

  const windows = []
  mid.forEach((b, bi) => {
    const rr = rng(777 + bi)
    for (let wy = b.y + 14; wy < b.y + b.h - 10; wy += 22) {
      for (let wx = b.x + 8; wx < b.x + b.w - 10; wx += 16) {
        if (rr() > 0.62)
          windows.push({
            x: r2(wx),
            y: r2(wy),
            c: rr() > 0.72 ? '#5FE8FF' : rr() > 0.4 ? '#FF9ECB' : '#FFD79A',
            o: r2(rr() * 0.65 + 0.25),
          })
      }
    }
  })

  const rain = Array.from({ length: 130 }, () => {
    const x = r2(rand() * 1400 - 120)
    const y = r2(rand() * 720)
    const len = r2(rand() * 46 + 18)
    return { x, y, len, o: r2(rand() * 0.16 + 0.05) }
  })

  const signs = [
    { x: 168, y: 212, w: 12, h: 150, c: '#FF3D9A' },
    { x: 402, y: 168, w: 9, h: 120, c: '#5FE8FF' },
    { x: 690, y: 234, w: 13, h: 168, c: '#FF3D9A' },
    { x: 962, y: 190, w: 9, h: 132, c: '#B48CFF' },
  ]

  return (
    <svg
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-label="CityChat key art — a rainy neon skyline seen from behind a bar"
    >
      <defs>
        <linearGradient id="cc-sky" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#150F3A" />
          <stop offset="55%" stopColor="#241246" />
          <stop offset="100%" stopColor="#0B0824" />
        </linearGradient>
        <radialGradient id="cc-moon" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#5FE8FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#5FE8FF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="cc-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B1240" />
          <stop offset="100%" stopColor="#07061A" />
        </linearGradient>
        <linearGradient id="cc-counter" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5FE8FF" stopOpacity="0" />
          <stop offset="35%" stopColor="#5FE8FF" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#FF3D9A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF3D9A" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="cc-lamp" cx="50%" cy="14%" r="72%">
          <stop offset="0%" stopColor="#FFD79A" stopOpacity="0.42" />
          <stop offset="38%" stopColor="#FFB870" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFB870" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="800" fill="url(#cc-sky)" />
      <circle cx="1010" cy="118" r="210" fill="url(#cc-moon)" opacity="0.7" />
      <circle cx="1010" cy="118" r="42" fill="#E8F6FF" opacity="0.13" />

      {/* skyline — far */}
      <g fill="#241A52" opacity="0.55">
        {far.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h + 260} />
        ))}
      </g>

      {/* skyline — mid, with windows */}
      <g fill="#150E38">
        {mid.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h + 200} />
        ))}
      </g>
      <g>
        {windows.map((w, i) => (
          <rect
            key={i}
            x={w.x}
            y={w.y}
            width="5"
            height="8"
            fill={w.c}
            opacity={w.o}
          />
        ))}
      </g>

      {/* neon sign strips */}
      <g>
        {signs.map((s, i) => (
          <g key={i}>
            <rect
              x={s.x - 5}
              y={s.y - 5}
              width={s.w + 10}
              height={s.h + 10}
              fill={s.c}
              opacity="0.16"
            />
            <rect
              x={s.x}
              y={s.y}
              width={s.w}
              height={s.h}
              fill={s.c}
              opacity="0.85"
            />
          </g>
        ))}
      </g>

      {/* skyline — near */}
      <g fill="#0A0726">
        {near.map((b, i) => (
          <rect key={i} x={b.x} y={b.y} width={b.w} height={b.h + 160} />
        ))}
      </g>

      {/* rain */}
      <g stroke="#CFE6FF" strokeWidth="1">
        {rain.map((d, i) => (
          <line
            key={i}
            x1={d.x}
            y1={d.y}
            x2={d.x + d.len * 0.32}
            y2={d.y + d.len}
            opacity={d.o}
          />
        ))}
      </g>

      {/* pendant lamp */}
      <line x1="176" y1="0" x2="176" y2="96" stroke="#3A3570" strokeWidth="2" />
      <path d="M148 96h56l20 30h-96z" fill="#0F0B2E" stroke="#4A4180" strokeWidth="1" />
      <ellipse cx="176" cy="220" rx="168" ry="150" fill="url(#cc-lamp)" />
      <circle cx="176" cy="130" r="4" fill="#FFE7BE" opacity="0.95" />

      {/* bar counter */}
      <rect x="0" y="600" width="1200" height="200" fill="url(#cc-bar)" />
      <rect x="0" y="600" width="1200" height="2" fill="url(#cc-counter)" />

      {/* glassware silhouettes */}
      <g fill="#0F0B2E" stroke="#5FE8FF" strokeWidth="1.2" opacity="0.6">
        <path d="M286 600l18 50h30l18-50z" />
        <line x1="319" y1="650" x2="319" y2="678" />
        <line x1="301" y1="678" x2="337" y2="678" />
      </g>
      <g fill="#0F0B2E" stroke="#FF3D9A" strokeWidth="1.2" opacity="0.55">
        <rect x="874" y="556" width="38" height="44" rx="1" />
        <rect x="879" y="566" width="28" height="34" fill="#FF3D9A" opacity="0.2" />
      </g>
    </svg>
  )
}

export const TITLE_ART = {
  galaxxy: GalaxxyArt,
  citychat: CityChatArt,
}
