import Head from 'next/head'

import Hero from '@/sections/Hero'


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
      </main>
      {/* <Footer/> */}
    </>
  )
}
