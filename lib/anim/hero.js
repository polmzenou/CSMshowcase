import gsap from 'gsap';

/** Hidden until the loader opens; then title rises, art settles, mouse parallax + scroll push. */
export function initHero() {
  const hero = document.querySelector('.hero');
  const lines = hero.querySelectorAll('.hero__title .line > span');
  const fades = ['.hero__kicker', '.hero__foot'];

  gsap.set(lines, { yPercent: 110 });
  gsap.set(fades, { opacity: 0, y: 24 });
  gsap.set(['.hero__vertical', '.nav', '.dots'], { opacity: 0 });
  gsap.set('.hero__parallax', { scale: 1.2 });

  const intro = () =>
    gsap
      .timeline()
      .to('.hero__parallax', { scale: 1, duration: 2.4, ease: 'expo.out' }, 0)
      .to(lines, { yPercent: 0, duration: 1.3, stagger: 0.1, ease: 'expo.out' }, 0.3)
      .to(fades, { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power3.out' }, 0.55)
      .to(['.hero__vertical', '.nav', '.dots'], { opacity: 1, duration: 1 }, 0.7);

  gsap.to('.hero__media', {
    yPercent: 18,
    scale: 1.06,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero__intro', {
    yPercent: -40,
    opacity: 0,
    ease: 'none',
    scrollTrigger: { trigger: hero, start: 'top top', end: '55% top', scrub: true },
  });

  const px = gsap.quickTo('.hero__art', 'x', { duration: 1.2, ease: 'power3' });
  const py = gsap.quickTo('.hero__art', 'y', { duration: 1.2, ease: 'power3' });
  const move = (e) => {
    px((e.clientX / window.innerWidth - 0.5) * -34);
    py((e.clientY / window.innerHeight - 0.5) * -22);
  };
  window.addEventListener('pointermove', move);

  return { intro, cleanup: () => window.removeEventListener('pointermove', move) };
}
