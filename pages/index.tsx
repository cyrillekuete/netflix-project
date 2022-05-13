import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Banner */}
      <Header />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section></section>
      </main>
    </div>
  )
}

export default Home
