import Head from 'next/head'
import Header from '../components/Header';
import Checkoutapi from '../components/CheckoutAPI';

export default function Home() {
  return (

    <>
      <Head>
        <title>Checkout | CultureX</title>
        <meta name="viewport" content="initia l-scale=1.0, width=device-width" />
      </Head>
 
      <div className="h-screen
      overflow-y-scroll scrollbar-hide">
        {/* Header */}
        <Header/>
        <Checkoutapi/> 
      </div>
    </>
  )
}
