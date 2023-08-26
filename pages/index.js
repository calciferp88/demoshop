import Head from 'next/head'
import Header from '../components/Header';
import Checkout from '../components/Checkout';

export default function Home() {
  return (
    <>
        <Head>
          <title>Checkout | DemoShop</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            rel="icon"
            href="https://media.licdn.com/dms/image/C510BAQFI5N92Kb4cpw/company-logo_200_200/0/1559819767960?e=2147483647&v=beta&t=AuhY-pb175KXL2N3yjB_twREikNmBWL_SZAF4FLLjyc"
          />
        </Head>

        <div className="bg-[#fff] h-screen overflow-y-scroll scrollbar-hide">
          {/* Header */}
          <Header/>

          {/* Feed */}
          <Checkout className=""/>
        </div>
    </>
  )
}
