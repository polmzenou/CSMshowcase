import gsap from 'gsap';

const IDS = ['top', 'fall', 'hit', 'cut', 'work', 'frames', 'control', 'contact'];

/** Smooth-scroll links, active section dot, and header/dots color per section theme. */
export function initNav(scrollTo) {
  const onClick = (e) => {
    const link = e.target instanceof Element && e.target.closest('[data-scroll-to]');
    if (!link) return;
    e.preventDefault();
    scrollTo(link.dataset.scrollTo);
  };
  document.addEventListener('click', onClick);

  const sections = IDS.map((id) => document.getElementById(id)).filter(Boolean);
  const dots = [...document.querySelectorAll('.dots button')];
  const nav = document.querySelector('.nav');
  const dotsEl = document.querySelector('.dots');
  // pinned sections live inside a .pin-spacer that carries the real scroll length
  const box = (el) => (el.parentElement?.classList.contains('pin-spacer') ? el.parentElement : el).getBoundingClientRect();

  let active = -1;
  let navTheme = '';
  const update = () => {
    const mid = window.innerHeight / 2;
    let current = 0;
    let theme = 'dark';
    sections.forEach((s, i) => {
      const r = box(s);
      if (r.top <= mid) current = i;
      if (r.top <= 30 && r.bottom > 30) theme = s.dataset.theme;
    });
    if (current !== active) {
      active = current;
      dots.forEach((d, i) => d.classList.toggle('is-active', i === current));
      dotsEl.dataset.theme = sections[current].dataset.theme;
    }
    if (theme !== navTheme) {
      navTheme = theme;
      nav.dataset.theme = theme;
    }
  };
  gsap.ticker.add(update);

  return () => {
    document.removeEventListener('click', onClick);
    gsap.ticker.remove(update);
  };
}
