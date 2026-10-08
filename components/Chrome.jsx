// Fixed UI around the page: loader, custom cursor, header and section dots.

export function Mark({ className }) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true">
      <rect x="-7" y="-44" width="14" height="88" rx="7" />
      <rect x="-7" y="-44" width="14" height="88" rx="7" transform="rotate(60)" />
      <rect x="-7" y="-44" width="14" height="88" rx="7" transform="rotate(120)" />
    </svg>
  );
}

export function Loader() {
  return (
    <div className="loader" aria-hidden="true">
      <div className="loader__half loader__half--a" />
      <div className="loader__half loader__half--b" />
      <div className="loader__slash" />
      <div className="loader__content">
        <Mark className="loader__mark" />
        <div className="loader__count display">
          <span className="loader__num">000</span>
        </div>
        <div className="loader__label mono">Pulling the cord</div>
      </div>
      <div className="loader__bar">
        <span />
      </div>
    </div>
  );
}

export function Cursor() {
  return (
    <div className="cursor" aria-hidden="true">
      <span className="cursor__dot" />
      <span className="cursor__ring">
        <span className="cursor__label mono" />
      </span>
    </div>
  );
}

export function Header() {
  return (
    <header className="nav">
      <a href="#top" className="nav__logo" data-scroll-to="#top" aria-label="Public Safety Studio — home">
        <Mark className="nav__mark" />
        <span className="mono">
          Public Safety <b>Studio</b>
        </span>
      </a>
      <nav className="nav__links mono" aria-label="Main">
        <a href="#work" data-scroll-to="#work">Work</a>
        <a href="#frames" data-scroll-to="#frames">Studio</a>
        <a href="#contact" data-scroll-to="#contact">Contact</a>
      </nav>
    </header>
  );
}

export const SECTIONS = [
  ['#top', 'Intro'],
  ['#fall', 'Freefall'],
  ['#hit', 'Impact'],
  ['#cut', 'Cut'],
  ['#work', 'Contracts'],
  ['#frames', 'Frames'],
  ['#control', 'Control'],
  ['#contact', 'Contact'],
];

export function Dots() {
  return (
    <nav className="dots" aria-label="Sections">
      {SECTIONS.map(([target, label], i) => (
        <button key={target} data-scroll-to={target} aria-label={`Go to ${label}`}>
          <span className="dots__num mono">{String(i + 1).padStart(2, '0')}</span>
          <span className="dots__label mono">{label}</span>
        </button>
      ))}
    </nav>
  );
}

/** Animated text line: outer clips, inner slides up. */
export function Line({ children, className = '' }) {
  return (
    <span className={`line ${className}`}>
      <span>{children}</span>
    </span>
  );
}
