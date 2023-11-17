import Head from 'next/head'
import Header from '../components/Header';
import Checkout from '../components/Checkout';

export default function Home() {
  return (
    <>

        <div className="bg-[#fff] h-screen overflow-y-scroll scrollbar-hide">
          {/* Header */}
          <Header/>

          <div>
            <p className='container bg-[#fff] lg:px-[190px] px-[20px] mx-[0px] max-w-6xl mx-[0] lg:mx-[auto] text-center'>
                Payment Successful
            </p>
          </div>
        </div>
    </>
  )
}
