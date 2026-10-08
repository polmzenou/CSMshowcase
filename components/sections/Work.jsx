import Art from '@/components/Art';
import { Line } from '@/components/Chrome';

// Shatter: triangles fanned out from an off-centre impact point.
const C = [55, 45];
const RIM = [[0, 0], [38, 0], [72, 0], [100, 0], [100, 38], [100, 72], [100, 100], [64, 100], [30, 100], [0, 100], [0, 62], [0, 28]];
const SHARDS = RIM.map((p, i) => {
  const q = RIM[(i + 1) % RIM.length];
  const cx = (C[0] + p[0] + q[0]) / 3;
  const cy = (C[1] + p[1] + q[1]) / 3;
  return {
    clip: `polygon(${C[0]}% ${C[1]}%, ${p[0]}% ${p[1]}%, ${q[0]}% ${q[1]}%)`,
    dx: ((cx - C[0]) / 50).toFixed(3),
    dy: ((cy - C[1]) / 50).toFixed(3),
  };
});

export function Cut() {
  return (
    <section className="shatter" id="cut" data-theme="dark">
      <div className="shatter__stage">
        <div className="shatter__shards">
          {SHARDS.map((s, i) => (
            <div key={i} className="shard" style={{ clipPath: s.clip }} data-dx={s.dx} data-dy={s.dy}>
              <div className="shard__img" />
            </div>
          ))}
        </div>
        <svg className="shatter__seams" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {RIM.map((p, i) => (
            <line key={i} x1={C[0]} y1={C[1]} x2={p[0]} y2={p[1]} vectorEffect="non-scaling-stroke" />
          ))}
        </svg>
        <div className="shatter__flash" />
        <div className="shatter__slash" />
        <div className="shatter__shade" />
        <div className="shatter__text">
          <p className="mono scene__meta">
            <span className="tag">04</span>
            <span className="rule" /> Frame-perfect
          </p>
          <h2 className="display shatter__title">
            <Line>Cut.</Line>
          </h2>
          <p className="shatter__copy">
            Every panel splits on the beat. Storyboards, layouts, key animation and compositing — all under one roof.
          </p>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { art: 'denji', label: 'Series', title: 'Original series & shorts', desc: 'Episodic stories built from scratch — pilots, shorts, full seasons.' },
  { art: 'power', label: 'Music', title: 'Music videos', desc: 'Animated visuals that hit as hard as the drop.' },
  { art: 'aki', label: 'Brand', title: 'Brand & commercial', desc: 'Anime-grade spots for brands that want to be remembered.' },
  { art: 'pochita', label: 'Titles', title: 'Titles & trailers', desc: 'Opening sequences, key visuals and trailers that sell the world.' },
];

export function Services() {
  return (
    <section className="services" id="work" data-theme="paper">
      <div className="services__head">
        <p className="mono">
          <span className="tag tag--ink">05</span> Devil contracts — what we do
        </p>
        <p className="services__lead">
          We make anime that bites. Original series, music videos, brand films and title sequences — drawn by hand, cut
          to the frame.
        </p>
      </div>
      <ol className="svc-list">
        {SERVICES.map((s, i) => (
          <li className="svc" key={s.art} data-index={i} data-cursor="View">
            <span className="svc__num display">{String(i + 1).padStart(2, '0')}</span>
            <span className="svc__body">
              <span className="svc__title display">{s.title}</span>
              <span className="svc__desc">{s.desc}</span>
            </span>
            <span className="svc__arrow" aria-hidden="true">
              →
            </span>
          </li>
        ))}
      </ol>
      <div className="svc-preview" aria-hidden="true">
        {SERVICES.map((s, i) => (
          <div className="svc-preview__item" key={s.art} data-index={i}>
            <Art name={s.art} sizes="280px" />
            <span className="svc-preview__label mono">
              {String(i + 1).padStart(2, '0')} — {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const CARDS = [
  { mod: 'a', art: 'denji', asset: 'Asset 01', project: 'Project: Freefall', title: 'Chainsaw', meta: 'Pilot short — 2026', sizes: '(max-width: 768px) 100vw, 50vw' },
  { mod: 'b', art: 'power', asset: 'Asset 02', project: 'Project: Blood', title: 'Blood fiend', meta: 'Music video — 2025', fit: 'contain', sizes: '(max-width: 768px) 100vw, 50vw' },
  { mod: 'c card--orange', art: 'pochita', asset: 'Asset 03', project: 'Woof', title: 'Pochi', meta: 'Mascot — 2026', sizes: '(max-width: 768px) 100vw, 25vw' },
  { mod: 'd card--paper', art: 'aki', asset: 'Asset 04', project: 'Project: Fox', title: 'One cut', meta: 'Title sequence — 2025', sizes: '(max-width: 768px) 100vw, 25vw' },
  { mod: 'e card--ink', art: 'makima', asset: 'Asset 05', project: 'Project: Control', title: 'Obey the frame', meta: 'Brand film — 2026', fit: 'cover', position: '50% 32%', sizes: '100vw' },
];

export function Frames() {
  return (
    <section className="frames" id="frames" data-theme="paper">
      <div className="frames__head">
        <p className="mono">
          <span className="tag tag--ink">06</span> Selected work
        </p>
        <h2 className="display frames__title">
          <Line>Frames from</Line>
          <Line>the studio</Line>
        </h2>
      </div>
      <div className="grid">
        {CARDS.map((c) => (
          <article className={`card card--${c.mod}`} key={c.art} data-cursor="Play">
            <div className="card__tilt">
              <Art name={c.art} className="card__art" fit={c.fit} position={c.position} sizes={c.sizes} />
              <div className="card__tone" />
              <header className="card__top mono">
                <span>{c.asset}</span>
                <span>{c.project}</span>
              </header>
              <footer className="card__bottom">
                <h3 className="display">{c.title}</h3>
                <span className="mono">{c.meta}</span>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Control() {
  return (
    <section className="control" id="control" data-theme="dark">
      <div className="control__rings" aria-hidden="true" />
      <div className="control__frame">
        <div className="control__tilt">
          <Art name="makima" className="control__art" fit="cover" position="50% 30%" sizes="(max-width: 768px) 100vw, 45vw" />
          <span className="control__corner mono">Subject 07 — Control devil</span>
        </div>
      </div>
      <div className="control__text">
        <p className="mono scene__meta">
          <span className="tag">07</span>
          <span className="rule" /> Control
        </p>
        <h2 className="display control__title">
          <Line>Everything</Line>
          <Line>is under</Line>
          <Line className="red">control.</Line>
        </h2>
        <p className="control__copy">
          Direction, timing, color. Nothing leaves the studio until every frame obeys. Move your cursor — she&apos;s
          watching.
        </p>
      </div>
    </section>
  );
}

const MARQUEE = 'Chainsaw ✶ Blood ✶ Control ✶ Woof ✶ Fox ✶ ';

export function Contact() {
  return (
    <footer className="contact" id="contact" data-theme="red">
      <div className="marquee display" aria-hidden="true">
        <div className="marquee__track">
          <span>{MARQUEE.repeat(3)}</span>
          <span>{MARQUEE.repeat(3)}</span>
        </div>
      </div>
      <div className="contact__main">
        <p className="mono scene__meta">
          <span className="tag">08</span>
          <span className="rule" /> Contact
        </p>
        <h2 className="display contact__title">
          <Line>Let&apos;s sign</Line>
          <Line>a contract.</Line>
        </h2>
        <div className="contact__row">
          <a className="btn" href="mailto:hello@publicsafety.studio" data-cursor="Write">
            <span className="btn__fill" />
            <span className="btn__text">Start a project</span>
            <span className="btn__arrow">→</span>
          </a>
          <ul className="contact__links mono">
            <li><a href="#" data-cursor="Open">Instagram</a></li>
            <li><a href="#" data-cursor="Open">Vimeo</a></li>
            <li><a href="#" data-cursor="Open">X / Twitter</a></li>
          </ul>
        </div>
        <div className="contact__pochita">
          <Art name="pochita" className="wag" sizes="280px" />
        </div>
      </div>
      <div className="contact__legal mono">
        <span>© 2026 Public Safety Studio</span>
        <span>Fan-made tribute. Not affiliated with Tatsuki Fujimoto, Shueisha or MAPPA.</span>
        <a href="#top" data-scroll-to="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
