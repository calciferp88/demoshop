import React from 'react';
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Suggestion from "./Suggestion.js";


function Feed() {  

    const gopay = () => {
        location.href = "/checkout";
    }

    return (
    <>

    {/* Banner */}
    <div className="bg-[#000] ">
            <div className="py-12 px-4">
                <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative px-10 py-7 rounded">
                    <div className="lg:max-w-[1280px] md:max-w-[696px] max-w-[343px] mx-auto bg-gray-200">
                    <div className="lg:flex md:flex block justify-between items-center">
                        <div className="p-10">
                        <p className="text-base leading-none text-gray-800">Save upto 30%</p>
                        <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">Summer Sale</p>
                        <p className="text-base leading-normal text-gray-600">Want to save some cash and still look like a fashion diva ?<br />Checkout our summer sale now !!!</p>
                        </div>
                        <div className="p-10">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ec2.png" className="w-full h-full" />
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    <h1 className='text-white font-bold ml-10 mt-10 text-xl ml-[140px]'>Popolar Items !</h1>
    
    <div className="p-10 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-[100px]">

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/5970e7db-0186-4c20-840b-4c55a9c9820e/air-force-1-low-x-peaceminusone-para-noise-release-date.jpg'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center">Nike Air Force 1'07</div>
            <p className="text-gray-700 text-base text-center">
                Nike | Boost
            </p>
            <p className='font-bold text-center text-gray-700'>35000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>  

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://cdn.shopify.com/s/files/1/0415/3753/6151/products/2_706c864c-4b6d-49e2-af2f-216f487893f3_800x.jpg?v=1639251677'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center">YEEZY 700 V1</div>
            <p className="text-gray-700 text-base text-center">
                ADIDAS | Boost
            </p>
            <p className='font-bold text-center text-gray-700'>520000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/76720d17-a73a-4349-a9c7-0a07b996f6e7/air-jordan-1-low-light-smoke-grey-553558-052-release-date.jpg'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center"> Air Jordan 1 Low</div>
            <p className="text-gray-700 text-base text-center">
                Nike | Sneaker
            </p>
            <p className='font-bold text-center text-gray-700'>450000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/381983/01/sv01/fnd/SEA/fmt/png'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center">Puma MAYZE</div>
            <p className="text-gray-700 text-base text-center">
                Puma | Shoe
            </p>
            <p className='font-bold text-center text-gray-700'>320000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://media.dior.com/couture/ecommerce/media/catalog/product/P/V/1617793847_KCQ547LAB_S900_E02_GHC.jpg?imwidth=300'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center">DiorAct Sandal</div>
            <p className="text-gray-700 text-base text-center">
                DIOR | Sandal
            </p>
            <p className='font-bold text-center text-gray-700'>205000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>

    {/* Single product */}
    <div className="rounded overflow-hidden shadow-lg bg-gray-200 h-[400px] w-[300px]">
        <img className="w-full xl:h-[200px] lg:h-[300px] h-[200px] object-cover" src={'https://nb.scene7.com/is/image/NB/bb650ra1_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600'} alt="Forest" />
        <div className="px-6 py-4">
            <div className="font-bold text-sm lg:text-lg mb-2 text-center">Aime Leon Dore</div>
            <p className="text-gray-700 text-base text-center">
                New Balance | Boost
            </p>
            <p className='font-bold text-center text-gray-700'>345000.00 MMK</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <button 
                className='bg-gray-200 border-2 border-gray-800 text-black border- w-full py-2 rounded hover:bg-gray-800 hover:text-white'
                onClick={ gopay }
            >   
                Buy Now
            </button>
        </div>
    </div>
  </div>
  </>
    )
}

export default Feed
