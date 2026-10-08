import gsap from 'gsap';

/** 08 — headline rises, Pochita pops up, the CTA is magnetic. */
export function initContact() {
  gsap.from('.contact__title .line > span', {
    yPercent: 110,
    stagger: 0.1,
    duration: 1.2,
    ease: 'expo.out',
    scrollTrigger: { trigger: '.contact__title', start: 'top 85%' },
  });
  gsap.from('.contact__row > *', {
    y: 30,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.contact__row', start: 'top 92%' },
  });
  gsap.from('.contact__pochita', {
    yPercent: 70,
    opacity: 0,
    duration: 1.2,
    ease: 'back.out(1.6)',
    scrollTrigger: { trigger: '.contact__main', start: 'top 55%' },
  });

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;
  const btn = document.querySelector('.contact .btn');
  const xTo = gsap.quickTo(btn, 'x', { duration: 0.6, ease: 'power3' });
  const yTo = gsap.quickTo(btn, 'y', { duration: 0.6, ease: 'power3' });
  const move = (e) => {
    const r = btn.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
    yTo((e.clientY - (r.top + r.height / 2)) * 0.4);
  };
  const leave = () => {
    xTo(0);
    yTo(0);
  };
  btn.addEventListener('pointermove', move);
  btn.addEventListener('pointerleave', leave);
  return () => {
    btn.removeEventListener('pointermove', move);
    btn.removeEventListener('pointerleave', leave);
  };
}
