import Image from 'next/image';
import React from 'react';
import{
    SearchIcon,
    PlusCircleIcon,
    MenuIcon,
    HomeIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {

    const { data: session } = useSession();

    return (

        <>
        {/* Navbar */}
        <div className="shadow-sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto ">
                
                {/* Left */}  
                <div className="relative hidden lg:flex">
                    <img 
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p1ygxmq1g97fg8nutlez"
                        className='mt-4 rounded-full w-12 mb-4'
                     /> 

                    <p className='mt-7 ml-4 text-lg font-bold'><a href="/">Dinger Demo Shop</a></p>
                </div> 

                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <img 
                        src="https://images-platform.99static.com//4t0a6QScHv-yC-QedcABgxNVbeI=/1317x1923:2000x2606/fit-in/500x500/99designs-contests-attachments/63/63681/attachment_63681242"
                        className='mt-4 rounded-full'
                     />
                </div>

                {/* Middle search*/}
                <div className="max-w-xs">
                    <div className="relative mt-1 p-3 rounded-md">

                        <div className="absolute inset-y-0 pl-3 flex items-center
                        pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500"/>
                        </div>

                        <input type='text' placeholder='Search' 
                        className="bg-gray-50 block w-full pl-10 sm:text-sm
                        border-gray-300 focus:ring-black rounded-md" />

                    </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                        <a href="https://dinger.asia/eng/"><HomeIcon className="navBtn" /></a>
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />

                   <> <div className="relative navBtn">
                        <ShoppingCartIcon className="navBtn"/>
                        <div className="absolute -top-3 -right-3 text-xs 
                        w-5 h-5 bg-red-500 rounded-full flex items-center
                        justify-center text-white">3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />

                    <img src= {'https://media.wired.com/photos/5dd593a829b9c40008b179b3/master/w_2560%2Cc_limit/Cul-BabyYoda_mandalorian-thechild-1_af408bfd.jpg'} 
                    alt="Profile Pic" 
                    className="h-10 rounded-full cursor-pointer w-10 object-cover" 
                    /> 
                    <p className='font-bold'>Baby Yoda</p>
                    </>
               
                    
                </div>
            </div>
        </div>

        

        </>
    );
}

export default Header;
