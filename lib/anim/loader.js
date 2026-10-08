import gsap from 'gsap';

/** Counter 000→100, red slash, then the screen splits along the cut. */
export function runLoader(reduce, onReveal) {
  const el = document.querySelector('.loader');
  const reveal = () => {
    document.body.classList.remove('is-loading');
    onReveal();
  };
  if (!el || reduce) {
    if (el) gsap.set(el, { display: 'none' });
    reveal();
    return;
  }

  const num = el.querySelector('.loader__num');
  const bar = el.querySelector('.loader__bar span');
  const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
  // the slash follows the diagonal between the two halves (0,60%) → (100%,44%)
  const angle = (Math.atan2(-0.16 * window.innerHeight, window.innerWidth) * 180) / Math.PI;
  const state = { p: 0 };

  const tl = gsap.timeline();
  tl.to(state, {
    p: 100,
    duration: 2,
    ease: 'power2.inOut',
    onUpdate: () => {
      num.textContent = String(Math.round(state.p)).padStart(3, '0');
      bar.style.transform = `scaleX(${state.p / 100})`;
    },
  })
    .add(() => {
      tl.pause();
      fonts.then(() => tl.resume());
    })
    .to('.loader__content', { opacity: 0, y: -24, duration: 0.35, ease: 'power2.in' })
    .to('.loader__bar', { opacity: 0, duration: 0.2 }, '<')
    .fromTo(
      '.loader__slash',
      { rotate: angle, scaleX: 0, transformOrigin: '50% 50%' },
      { rotate: angle, scaleX: 1, duration: 0.35, ease: 'expo.out' }
    )
    .addLabel('split', '+=0.05')
    .add(reveal, 'split')
    .to('.loader__slash', { opacity: 0, duration: 0.25 }, 'split')
    .to('.loader__half--a', { yPercent: -105, duration: 1.1, ease: 'expo.inOut' }, 'split')
    .to('.loader__half--b', { yPercent: 105, duration: 1.1, ease: 'expo.inOut' }, 'split')
    .set(el, { display: 'none' });
}
