import React, {useState} from 'react';
import HmacSHA256 from "crypto-js/hmac-sha256";

export default function pay() {
    
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ add, setAdd ] = useState('');

    const paynow = () => {
        console.log("OK pr");
        const items = [{
            name: "Nike Air Jordan",
            amount: 110,
            quantity: 2
        }]

        const data = {     
            clientId:"c2464698-5f1f-3f9e-b78e-e0c81f59dfa5" , 
            publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0vo1N4FgMN1M71kr/biv0TjrBketUQDGXhoM0LMulQuRm3z02DrDGdmPPTYAqzyz5W91bQfSU2h9tymaqxAXqs8883/97BnEmfVzYOmMVp6x1aa7YHr5u4pYj3CoGNFd219FfiSdZwSJQgwJCY5AscxJlrqKlKsAaeSyk+xR8TwIDAQAB" , 
            items: JSON.stringify(items), 
            customerName: "Kyaw Kyaw", 
            totalAmount: 220, 
            merchantOrderId: "0909", 
            merchantKey: "ri4umtp.7dMzovcIu6RCDWSIzrBH_trmNsc", 
            projectName: "Tentacion", 
            merchantName: "Ivan", 
        } 

        const NodeRSA = require("node-rsa");

        const value = JSON.stringify(data);

        /* encrypt public key */
                                                                                                                                                                                                                                                                                                                                                                    
        const pubKey = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
        
        "-----END PUBLIC KEY-----";
        
        const publicKey = new NodeRSA();
        publicKey.importKey(pubKey, "pkcs8-public");
        publicKey.setOptions({ encryptionScheme: "pkcs1" });
        const encryptedPayload = publicKey.encrypt(value, "base64");
        const HashValue = HmacSHA256(value, a5b1b8eb833621fd6ca09e5d4ff890e4).toString();
        setTimeout(() => {
        
        // window.location = "https://huighui.dinger.asia"+"?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue+"&lang="+language;
            
        }, 2000);
    }

    return (
    <>
     <div class="container p-12 mx-auto">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form class="justify-center w-full mx-auto" method="post" action>
                        <div class="">
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">First
                                        Name</label>
                                    <input 
                                        name="firstName" type="text" placeholder="First Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setFname(e.target.value)} }
                                        value={ fname }
                                    />
                                        
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Last
                                        Name</label>
                                    <input name="lastName" type="text" placeholder="Last Name"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setLname(e.target.value)} }
                                        value={ lname }    
                                    />
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4 mt-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input 
                                        name="email" type="text" placeholder="Email"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setEmail(e.target.value)} }
                                        value={ email }   
                                    />
                                        
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Phone Number</label>
                                    <input name="phone" type="text" placeholder="Phone Number"
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setPhone(e.target.value)} }
                                        value={ phone }  
                                    />
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="w-full">
                                    <label for="Address"
                                        class="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        class="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        name="Address" cols="20" rows="4" placeholder="Address"
                                        onChange={ (e)=>{setAdd(e.target.value)} }
                                        value={ add }  
                                    ></textarea>
                                </div>
                            </div>
                            
                            <div class="flex items-center mt-4">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span class="ml-2">Save this information for next time</span></label>
                            </div>
                            
                        </div>
                    </form>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                    <div class="flex p-4 mt-4">
                        <h2 class="text-xl font-bold">Payment</h2>
                        </div>

                        <div className='border-b border-gray-300'>
                          <div class="flex items-center w-full py-4 text-sm font-semibold lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                              <img 
                                  class="w-[50px] rounded-full mb-5"
                                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p1ygxmq1g97fg8nutlez" 
                              /> 

                              <button 
                                className="bg-black text-white w-full py-3 -mt-5 ml-3 rounded disabled:bg-gray-500"
                                disabled = {!fname || !lname || !email}
                                onClick = { paynow }
                              >
                                Pay with Dinger
                              </button>
                          </div>
                        </div>

                        <h2 class="text-xl font-bold">Order Summary
                        </h2>

                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/user/erondu/1600x900" alt="image"
                                            class="w-60" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span class="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="flex space-x-4">
                                    <div>
                                        <img src="https://source.unsplash.com/collection/190727/1600x900" alt="image"
                                            class="w-60" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Title</h2>
                                        <p class="text-sm">Lorem ipsum dolor sit amet, tet</p>
                                        <span class="text-red-600">Price</span> $20
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
// ri4umtp.7dMzovcIu6RCDWSIzrBH_trmNsc