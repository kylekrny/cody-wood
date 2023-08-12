import Head from 'next/head'

import Hero from '@/sections/Hero'
import About from '@/sections/About'


export default function Home() {
  return (
    <>
      <Head>
        <title>Cody Wood</title>
        <meta
          name="description"
          content="Massage therapist that listens to you."
        />
      </Head>
      <main>
        <Hero/>
        <About/>
      </main>
      {/* <Footer/> */}
    </>
  )
}
