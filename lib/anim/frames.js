import gsap from 'gsap';

/** 06 — cards wipe in, art drifts on scroll, 3D tilt follows the cursor. */
export function initFrames() {
  gsap.from('.frames__title .line > span', {
    yPercent: 110,
    stagger: 0.1,
    duration: 1.1,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.frames__head', start: 'top 80%' },
  });

  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const offs = [];

  document.querySelectorAll('.card').forEach((card) => {
    const tilt = card.querySelector('.card__tilt');
    gsap.fromTo(
      tilt,
      { clipPath: 'inset(100% 0% 0% 0%)' },
      { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.2, ease: 'expo.inOut', scrollTrigger: { trigger: card, start: 'top 88%' } }
    );
    const img = card.querySelector('.art__img');
    if (img) {
      gsap.fromTo(
        img,
        { yPercent: 6 },
        { yPercent: -6, ease: 'none', scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: true } }
      );
    }

    if (!fine) return;
    const rx = gsap.quickTo(tilt, 'rotationX', { duration: 0.6, ease: 'power3' });
    const ry = gsap.quickTo(tilt, 'rotationY', { duration: 0.6, ease: 'power3' });
    const move = (e) => {
      const r = card.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 10);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 10);
    };
    const leave = () => {
      rx(0);
      ry(0);
    };
    card.addEventListener('pointermove', move);
    card.addEventListener('pointerleave', leave);
    offs.push(() => {
      card.removeEventListener('pointermove', move);
      card.removeEventListener('pointerleave', leave);
    });
  });

  return () => offs.forEach((off) => off());
}
