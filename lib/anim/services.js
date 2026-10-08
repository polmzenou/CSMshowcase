import gsap from 'gsap';

const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/** 05 — rows rise in; on hover a framed preview of the matching art trails the cursor. */
export function initServices() {
  const list = document.querySelector('.svc-list');
  const rows = [...list.querySelectorAll('.svc')];

  gsap.from('.services__head > *', {
    y: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: { trigger: '.services__head', start: 'top 85%' },
  });
  gsap.from(rows, {
    yPercent: 35,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    ease: 'power3.out',
    scrollTrigger: { trigger: list, start: 'top 85%' },
  });

  if (!finePointer()) return null;

  const preview = document.querySelector('.svc-preview');
  const items = [...preview.querySelectorAll('.svc-preview__item')];
  gsap.set(preview, { scale: 0, opacity: 0, yPercent: -50 });
  const xTo = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3' });
  const yTo = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3' });
  const rTo = gsap.quickTo(preview, 'rotation', { duration: 0.8, ease: 'power3' });
  let lastX = 0;

  const move = (e) => {
    const w = preview.offsetWidth;
    // sit to the right of the cursor, flip to the left near the edge
    const x = e.clientX + 40 + w > window.innerWidth - 20 ? e.clientX - 40 - w : e.clientX + 40;
    xTo(x);
    yTo(e.clientY);
    rTo(gsap.utils.clamp(-14, 14, (e.clientX - lastX) * 0.6));
    lastX = e.clientX;
  };
  const enterRow = (e) => {
    const i = Number(e.currentTarget.dataset.index);
    items.forEach((it, j) => it.classList.toggle('is-active', i === j));
    gsap.to(preview, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.6)' });
  };
  const leaveList = () => {
    gsap.to(preview, { scale: 0, opacity: 0, duration: 0.35, ease: 'power3.in' });
    items.forEach((it) => it.classList.remove('is-active'));
  };

  window.addEventListener('pointermove', move);
  rows.forEach((r) => r.addEventListener('pointerenter', enterRow));
  list.addEventListener('pointerleave', leaveList);
  return () => {
    window.removeEventListener('pointermove', move);
    rows.forEach((r) => r.removeEventListener('pointerenter', enterRow));
    list.removeEventListener('pointerleave', leaveList);
  };
}
