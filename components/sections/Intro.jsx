import Art from '@/components/Art';
import { Line } from '@/components/Chrome';

// Deterministic "random" so server and client markup match.
const rand = (i, s) => {
  const x = Math.sin(i * 127.1 + s * 311.7) * 43758.5453;
  return x - Math.floor(x);
};
const SPEED_LINES = Array.from({ length: 18 }, (_, i) => ({
  left: `${(rand(i, 1) * 100).toFixed(2)}%`,
  height: `${Math.round(8 + rand(i, 2) * 30)}vh`,
  width: rand(i, 3) > 0.8 ? 3 : rand(i, 3) > 0.4 ? 2 : 1,
  duration: `${(0.6 + rand(i, 4) * 1.2).toFixed(2)}s`,
  delay: `${(-rand(i, 5) * 2).toFixed(2)}s`,
}));

export function Hero() {
  return (
    <section className="hero" id="top" data-theme="dark">
      <div className="hero__media">
        <div className="hero__parallax">
          <Art name="hero" className="hero__art" fit="cover" position="50% 40%" sizes="100vw" priority />
        </div>
        <div className="hero__shade" />
      </div>
      <div className="hero__vertical jp" aria-hidden="true">
        チェンソーマン
      </div>
      <div className="hero__intro">
        <p className="mono hero__kicker">
          <span className="tag">01</span> Devil hunter animation — Div. 4
        </p>
        <h1 className="display hero__title">
          <Line>We draw</Line>
          <Line>devils.</Line>
        </h1>
      </div>
      <div className="hero__foot">
        <p className="hero__caption">
          An independent animation studio for devils, hunters and everything that bleeds in between.
        </p>
        <div className="hero__scroll mono">
          <span className="hero__scroll-line" />
          Pull to start
        </div>
        <p className="mono hero__count">01 / 08</p>
      </div>
    </section>
  );
}

export function Freefall() {
  return (
    <section className="scene scene--fall" id="fall" data-theme="red">
      <div className="scene__inner">
        <div className="speed" aria-hidden="true">
          {SPEED_LINES.map((l, i) => (
            <span
              key={i}
              style={{ left: l.left, height: l.height, width: l.width, animationDuration: l.duration, animationDelay: l.delay }}
            />
          ))}
        </div>
        <div className="scene__bgword outline display" aria-hidden="true">
          Freefall
        </div>
        <div className="scene__art scene__art--fall">
          <Art name="denji" className="float" sizes="(max-width: 768px) 80vw, 45vw" />
        </div>
        <div className="scene__text">
          <p className="mono scene__meta">
            <span className="tag">02</span>
            <span className="rule" /> Freefall
          </p>
          <h2 className="display scene__title">
            <Line>Every chain</Line>
            <Line>breaks somewhere.</Line>
          </h2>
        </div>
        <p className="scene__aside">
          Ink, blood and 24 frames a second. We build worlds where gravity is a suggestion and every drop lands
          exactly where it should.
        </p>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section className="scene scene--hit" id="hit" data-theme="red">
      <div className="scene__inner">
        <div className="hit__splat" aria-hidden="true" />
        <div className="scene__art scene__art--hit">
          <Art name="power" className="float float--slow" sizes="(max-width: 768px) 80vw, 45vw" />
        </div>
        <div className="scene__text scene__text--hit">
          <p className="mono scene__meta">
            <span className="tag">03</span>
            <span className="rule" /> Impact
          </p>
          <p className="display hit__small">
            <Line>Blood</Line>
          </p>
          <h2 className="display hit__big">
            <Line>Hit.</Line>
          </h2>
        </div>
        <ul className="hit__stats mono">
          <li>
            <b className="display" data-count="148">0</b>Episodes animated
          </li>
          <li>
            <b className="display" data-count="36">0</b>Music videos
          </li>
          <li>
            <b className="display" data-count="12">0</b>Years drawing
          </li>
        </ul>
      </div>
    </section>
  );
}
