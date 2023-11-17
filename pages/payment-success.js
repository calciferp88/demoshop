import Head from 'next/head'
import Header from '../components/Header';
import Checkout from '../components/Checkout';

export default function Home() {
  return (
    <>

        <div className="bg-[#fff] h-screen overflow-y-scroll scrollbar-hide">
          {/* Header */}
          <Header/>

          <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
              <p class="text-base font-semibold text-green-400">Success</p>
              <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Payment Succesful</h1>
              <p class="mt-6 text-base leading-7 text-green-500">Your purchase is done successfully.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://dinger-demoshop.vercel.app/" class="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Back to Checkout Form
                </a>
                <a href="https://dinger.asia/" class="text-sm font-semibold text-gray-900">Contact Dinger<span aria-hidden="true">&rarr;</span></a>
              </div>
            </div>
          </main>
        </div>
    </>
  )
}
