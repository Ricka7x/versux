import Head from 'next/head';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { HowItWorks } from '../src/components/HowItWorks';
import { Footer } from '../src/components/Footer';
import { Hero } from '../src/components/Hero';
import { Contact } from '../src/components/Contact';
import { Download } from '../src/components/Download';

export default function Home() {
  const [activeMenuOption, setActiveMenuOption] = useState('home');
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: `100vh`,
        backgroundColor: 'background',
      }}
    >
      <Head>
        <title>versux</title>
        <meta name="description" content="Versux soccer pools app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        sx={{
          width: '100%',
        }}
      >
        <Element name="home">
          <Hero
            activeMenuOption={activeMenuOption}
            setActiveMenuOption={setActiveMenuOption}
          />
        </Element>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        <HowItWorks />
        <Download />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
