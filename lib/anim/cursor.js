import gsap from 'gsap';

/** Dot + lagging ring. Ring grows on interactive elements and shows data-cursor labels. */
export function initCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return null;
  const el = document.querySelector('.cursor');
  const dot = el.querySelector('.cursor__dot');
  const ring = el.querySelector('.cursor__ring');
  const label = el.querySelector('.cursor__label');
  document.documentElement.classList.add('has-cursor');

  gsap.set([dot, ring], { x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const dx = gsap.quickTo(dot, 'x', { duration: 0.08 });
  const dy = gsap.quickTo(dot, 'y', { duration: 0.08 });
  const rx = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' });
  const ry = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' });

  const move = (e) => {
    dx(e.clientX);
    dy(e.clientY);
    rx(e.clientX);
    ry(e.clientY);
    const t = e.target instanceof Element ? e.target : null;
    el.dataset.theme = t?.closest('[data-theme]')?.dataset.theme || 'dark';
    const hit = t?.closest('a, button, [data-cursor]');
    const text = hit?.dataset.cursor || '';
    el.classList.toggle('is-hover', !!hit);
    el.classList.toggle('has-label', !!text);
    if (text) label.textContent = text;
  };
  const hide = () => gsap.to(el, { opacity: 0, duration: 0.2 });
  const show = () => gsap.to(el, { opacity: 1, duration: 0.2 });

  window.addEventListener('pointermove', move);
  document.addEventListener('mouseleave', hide);
  document.addEventListener('mouseenter', show);
  return () => {
    window.removeEventListener('pointermove', move);
    document.removeEventListener('mouseleave', hide);
    document.removeEventListener('mouseenter', show);
    document.documentElement.classList.remove('has-cursor');
  };
}
