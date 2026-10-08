import gsap from 'gsap';

/** 07 — portrait reveals and leans toward the cursor; golden "control" rings follow the pointer. */
export function initControl() {
  const s = '#control';
  const section = document.querySelector(s);

  gsap.fromTo(
    `${s} .control__art`,
    { clipPath: 'inset(0% 0% 100% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.5,
      ease: 'expo.inOut',
      scrollTrigger: { trigger: `${s} .control__frame`, start: 'top 75%' },
    }
  );
  gsap.from(`${s} .control__title .line > span`, {
    yPercent: 110,
    stagger: 0.1,
    duration: 1.1,
    ease: 'expo.out',
    scrollTrigger: { trigger: `${s} .control__title`, start: 'top 80%' },
  });
  gsap.from([`${s} .scene__meta`, `${s} .control__copy`], {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: { trigger: `${s} .control__text`, start: 'top 75%' },
  });
  const img = section.querySelector('.control__art .art__img');
  if (img) {
    gsap.fromTo(
      img,
      { scale: 1.15, yPercent: -4 },
      { scale: 1.15, yPercent: 4, ease: 'none', scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true } }
    );
  }

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;

  const rings = section.querySelector('.control__rings');
  const tilt = section.querySelector('.control__tilt');
  const xTo = gsap.quickTo(rings, 'x', { duration: 0.9, ease: 'power3' });
  const yTo = gsap.quickTo(rings, 'y', { duration: 0.9, ease: 'power3' });
  const rx = gsap.quickTo(tilt, 'rotationX', { duration: 1, ease: 'power3' });
  const ry = gsap.quickTo(tilt, 'rotationY', { duration: 1, ease: 'power3' });

  const move = (e) => {
    const r = section.getBoundingClientRect();
    xTo(e.clientX - r.left);
    yTo(e.clientY - r.top);
    const t = tilt.getBoundingClientRect();
    ry(gsap.utils.clamp(-14, 14, ((e.clientX - (t.left + t.width / 2)) / window.innerWidth) * 24));
    rx(gsap.utils.clamp(-10, 10, (-(e.clientY - (t.top + t.height / 2)) / window.innerHeight) * 18));
  };
  const enter = () => gsap.to(rings, { opacity: 1, duration: 0.6 });
  const leave = () => {
    gsap.to(rings, { opacity: 0, duration: 0.6 });
    rx(0);
    ry(0);
  };
  section.addEventListener('pointermove', move);
  section.addEventListener('pointerenter', enter);
  section.addEventListener('pointerleave', leave);
  return () => {
    section.removeEventListener('pointermove', move);
    section.removeEventListener('pointerenter', enter);
    section.removeEventListener('pointerleave', leave);
  };
}
