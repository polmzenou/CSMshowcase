import gsap from 'gsap';

/** Red panel opens up from a framed card as it reaches the top. */
function frameIn(section) {
  gsap.fromTo(
    `${section} .scene__inner`,
    { clipPath: 'inset(14% 5% 0% 5%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'top top', scrub: true },
    }
  );
}

/** 02 — the hunter falls through the frame while the headline locks in. */
export function initFreefall() {
  const s = '#fall';
  frameIn(s);
  gsap
    .timeline({ scrollTrigger: { trigger: s, start: 'top top', end: '+=140%', pin: true, scrub: 1 } })
    .fromTo(`${s} .scene__art--fall`, { yPercent: -80, rotate: -22 }, { yPercent: 12, rotate: 10, ease: 'none', duration: 1 }, 0)
    .fromTo(`${s} .scene__bgword`, { xPercent: 5 }, { xPercent: -45, ease: 'none', duration: 1 }, 0)
    .from(`${s} .scene__title .line > span`, { yPercent: 110, stagger: 0.08, duration: 0.25, ease: 'power3.out' }, 0.2)
    .from([`${s} .scene__meta`, `${s} .scene__aside`], { opacity: 0, y: 24, duration: 0.2 }, 0.3);
}

/** 03 — the fiend lunges in, HIT. slams down, the screen shakes, counters run. */
export function initImpact() {
  const s = '#hit';
  frameIn(s);
  const counters = [...document.querySelectorAll(`${s} [data-count]`)];
  const count = { v: 0 };

  gsap
    .timeline({ scrollTrigger: { trigger: s, start: 'top top', end: '+=130%', pin: true, scrub: 1 } })
    .fromTo(`${s} .scene__art--hit`, { xPercent: 95, rotate: 10 }, { xPercent: 0, rotate: 0, duration: 0.45, ease: 'power2.out' }, 0)
    .from(`${s} .scene__meta`, { opacity: 0, duration: 0.1 }, 0.1)
    .from(`${s} .hit__small .line > span`, { yPercent: 110, duration: 0.2 }, 0.12)
    .fromTo(`${s} .hit__big .line > span`, { yPercent: 110 }, { yPercent: 0, duration: 0.22, ease: 'power4.out' }, 0.32)
    .fromTo(`${s} .hit__splat`, { scale: 0, rotate: -30 }, { scale: 1, rotate: 0, duration: 0.14, ease: 'back.out(2.5)' }, 0.46)
    .to(`${s} .scene__inner`, { keyframes: { x: [0, -16, 13, -9, 5, 0], y: [0, 7, -5, 3, -1, 0] }, duration: 0.12, ease: 'none' }, 0.48)
    .from(`${s} .hit__stats`, { opacity: 0, y: 30, duration: 0.15 }, 0.56)
    .to(
      count,
      {
        v: 1,
        duration: 0.3,
        ease: 'power1.out',
        onUpdate: () => counters.forEach((c) => (c.textContent = Math.round(count.v * Number(c.dataset.count)))),
      },
      0.56
    )
    .to({}, { duration: 0.15 });
}
