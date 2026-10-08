import gsap from 'gsap';

/** 04 — glass shards fly in and assemble the panel, then the blade cuts across it. */
export function initCut() {
  const s = '#cut';
  const shards = [...document.querySelectorAll(`${s} .shard`)];
  const tl = gsap.timeline({ scrollTrigger: { trigger: s, start: 'top top', end: '+=170%', pin: true, scrub: 1 } });

  shards.forEach((el, i) => {
    const dx = Number(el.dataset.dx);
    const dy = Number(el.dataset.dy);
    const spin = (i % 2 ? 1 : -1) * (24 + ((i * 37) % 40));
    tl.fromTo(
      el,
      { xPercent: dx * 95, yPercent: dy * 95, rotate: spin, scale: 0.7, opacity: 0.3 },
      { xPercent: 0, yPercent: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.55, ease: 'power3.out' },
      i * 0.015
    );
  });

  tl.fromTo(`${s} .shatter__seams`, { opacity: 1 }, { opacity: 0, duration: 0.1 }, 0.62)
    .fromTo(`${s} .shatter__slash`, { rotate: 24, scaleX: 0 }, { rotate: 24, scaleX: 1, duration: 0.12, ease: 'power4.out' }, 0.66)
    .fromTo(`${s} .shatter__flash`, { opacity: 0 }, { opacity: 0.85, duration: 0.03 }, 0.7)
    .to(`${s} .shatter__flash`, { opacity: 0, duration: 0.12 })
    .to(`${s} .shatter__slash`, { opacity: 0, duration: 0.1 }, 0.8)
    .from(`${s} .shatter__title .line > span`, { yPercent: 110, duration: 0.15, ease: 'power4.out' }, 0.72)
    .from([`${s} .shatter__text .scene__meta`, `${s} .shatter__copy`], { opacity: 0, y: 20, duration: 0.12 }, 0.78)
    .to({}, { duration: 0.2 });
}
