export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-baseline gap-2 ${className}`}>
      <span className="font-poster text-2xl leading-none tracking-[0.06em]">
        GLITCH<span className="text-magenta">9</span>
      </span>
      <span className="hidden font-mono text-[9px] tracking-[0.24em] text-faint uppercase sm:inline">
        Inc.
      </span>
    </span>
  )
}
