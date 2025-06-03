import Head from 'next/head'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ramones Capulong | Visual Designer & Content Editor</title>
        <meta name="description" content="Portfolio of Ramones Capulong, a passionate visual designer and content editor creating engaging digital experiences." />
      </Head>
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
}
