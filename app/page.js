import Experience from '@/components/Experience';
import { Cursor, Dots, Header, Loader } from '@/components/Chrome';
import { Freefall, Hero, Impact } from '@/components/sections/Intro';
import { Contact, Control, Cut, Frames, Services } from '@/components/sections/Work';

export default function Page() {
  return (
    <>
      <Loader />
      <Cursor />
      <Header />
      <Dots />
      <main>
        <Hero />
        <Freefall />
        <Impact />
        <Cut />
        <Services />
        <Frames />
        <Control />
      </main>
      <Contact />
      <Experience />
    </>
  );
}
