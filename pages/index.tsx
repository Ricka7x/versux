import Head from 'next/head';
import { useState } from 'react';
import { Element } from 'react-scroll';
import { About } from '../src/components/About';
import { Features } from '../src/components/Features';
import { Footer } from '../src/components/Footer';
import { Hero } from '../src/components/Hero';
import { Quotes } from '../src/components/Quotes';

export default function Home() {
  const [activeMenuOption, setActiveMenuOption] = useState('home');
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // set this to `minHeight: '100vh'` for full viewport height
        minHeight: `100vh`,
      }}
    >
      <Head>
        <title>versux</title>
        <meta name="description" content="Generated by create next app" />
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
        <About />
        <Features />
        <Quotes />
      </main>
      <Footer />
    </div>
  );
}
