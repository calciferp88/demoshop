import Head from 'next/head'
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <>

      <Head>
        <title>Home | CultureX</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="bg-[#141414] h-screen overflow-y-scroll scrollbar-hide">
        {/* Header */}
        <Header/>

        {/* Feed */}
        <Feed />
      </div>
    </>
  )
}
