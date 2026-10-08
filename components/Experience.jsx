'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { runLoader } from '@/lib/anim/loader';
import { initCursor } from '@/lib/anim/cursor';
import { initNav } from '@/lib/anim/nav';
import { initHero } from '@/lib/anim/hero';
import { initFreefall, initImpact } from '@/lib/anim/scenes';
import { initCut } from '@/lib/anim/shatter';
import { initServices } from '@/lib/anim/services';
import { initFrames } from '@/lib/anim/frames';
import { initControl } from '@/lib/anim/control';
import { initContact } from '@/lib/anim/contact';

/** Boots smooth scroll + every GSAP scene once the static markup is on the page. */
export default function Experience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    let lenis = null;
    const raf = (time) => lenis.raf(time * 1000);
    if (!reduce) {
      lenis = new Lenis({ lerp: 0.09 });
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      lenis.stop();
    }
    const scrollTo = (target) => {
      if (lenis) lenis.scrollTo(target, { duration: 1.6, easing: (t) => 1 - Math.pow(1 - t, 4) });
      else document.querySelector(target)?.scrollIntoView();
    };

    const cleanups = [];
    const ctx = gsap.context(() => {
      cleanups.push(initCursor(), initNav(scrollTo));
      let hero = null;
      if (!reduce) {
        // pinned scenes first, in page order, so later triggers account for their pin spacing
        hero = initHero();
        cleanups.push(hero.cleanup);
        initFreefall();
        initImpact();
        initCut();
        cleanups.push(initServices(), initFrames(), initControl(), initContact());
      }
      runLoader(reduce, () => {
        lenis?.start();
        hero?.intro();
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      cleanups.forEach((fn) => fn?.());
      ctx.revert();
      if (lenis) {
        gsap.ticker.remove(raf);
        lenis.destroy();
      }
    };
  }, []);

  return null;
}
