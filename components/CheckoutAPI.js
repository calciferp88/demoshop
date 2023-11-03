import React, {useState} from 'react';
import HmacSHA256 from "crypto-js/hmac-sha256";

export default function pay() {
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ add, setAdd ] = useState('');
    const [ payload, setPayload ] = useState('');

    const paynow = () => {
        const NodeRSA = require("node-rsa");
        const publicKey2 = "-----BEGIN PUBLIC KEY-----\n"+
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCkdUskgMUlIrH5iTlhq/th6yE8xis5Oe4juc4mXIXe9gPG/gZ/nYmswi4G2F41Dp0SLGdL87mmMaygkB+HGWsie24FMdD14x7ILihhmpKdRMnwo60SFry+r+QBCeGM/vaz3GQ5eNl2W68bq9PZPjkUZq5CA6zh3rFK9fAO6+rQ/wIDAQAB\n"+
         "-----END PUBLIC KEY-----";

        const APIdata = {
            "providerName": "AYA Pay", 
            "methodName": "QR", 
            "totalAmount" : 2200, 
            "orderId":  "11111", 
            "customerPhone" : "09787747310", 
            "customerName" : "Thuta", 
            "items" : "[{'name':'Mac','amount':'1100','quantity':'2'}]" 
         }

        const key = new NodeRSA();
        const APIdataString = JSON.stringify(APIdata);
        key.importKey(publicKey2, "pkcs8-public");
        key.setOptions({ encryptionScheme: "pkcs1" });
        const encrypteDataWithRsa = key.encrypt(APIdataString, "base64");
        setPayload(encrypteDataWithRsa);

    }

    return (

        
    <>

      <div class="container py-12 bg-[#fff] lg:px-[200px] px-[30px] mx-[0px] max-w-6xl mx-[0] lg:mx-[auto]">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full lg:w-3/6">
                    <h2 class="mb-4 font-bold md:text-xl text-heading border-b border-gray-300 pb-3">Direct Integration
                    </h2>
                    <div class="justify-center w-full mx-auto">
                       
                            <div class="space-x-0 lg:flex lg:space-x-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">
                                      Your Full Name
                                      </label>
                                    <input 
                                        name="fname" type="text" 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setFname(e.target.value)} }
                                        value={ fname }
                                    />
                                        
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">
                                      Phone Number
                                    </label>
                                    <input name="phone" type="number" 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setLname(e.target.value)} }
                                        value={ phone }    
                                    />
                                </div>
                            </div>
                            <div class="space-x-0 lg:flex lg:space-x-4 mt-4">
                                <div class="w-full lg:w-1/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Email (Optional)</label>
                                    <input 
                                        name="email" type="text" 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setEmail(e.target.value)} }
                                        value={ email }   
                                    />
                                        
                                </div>
                                <div class="w-full lg:w-1/2 ">
                                    <label for="remark" class="block mb-3 text-sm font-semibold text-gray-500">Remark (optional)</label>
                                    <input name="remark" type="text" 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        onChange={ (e)=>{setPhone(e.target.value)} }
                                        value={ add }  
                                    />
                                </div>
                            </div>
                            
                            <div class="space-x-0 lg:flex lg:space-x-4 mt-4">
                                <div class="w-full lg:w-2/2">
                                    <label for="firstName" class="block mb-3 text-sm font-semibold text-gray-500">Encrypted Data</label>
                                    <input 
                                        name="email" type="text" disabled 
                                        class="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" 
                                        value={ payload }   
                                    />
                                        
                                </div>
                            </div>
                      
                            <div>

                              <div class="flex mt-4">
                                <h2 class="text-xl font-bold">Payment</h2>
                              </div>

                                <div class="flex items-center w-full py-4 text-sm font-semibold lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                                    <img 
                                        class="w-[50px] rounded-full mb-5"
                                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p1ygxmq1g97fg8nutlez" 
                                    /> 

                                    <button 
                                      className="bg-black text-white w-full py-3 -mt-5 ml-3 rounded disabled:bg-gray-500 hover:bg-[#262626]"
                                      onClick = { paynow }
                                      disabled  = {!fname}
                                    >
                                      Pay with Dinger
                                    </button>
                                </div>
                            </div>
                        
                    </div>
                </div>
                <div class="flex flex-col w-full ml-0 lg:ml-12 lg:w-3/6 bg-[#f1f1f1] rounded-md p-10">
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <h2 class="text-xl font-bold mt-3">Order Summary
                        </h2>

                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">

                                <div class="flex space-x-8">
                                    <div>
                                        <img src="https://media.dior.com/couture/ecommerce/media/catalog/product/P/V/1617793847_KCQ547LAB_S900_E02_GHC.jpg?imwidth=300" alt="image"
                                          class="w-20" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">DiorAct Sandal</h2>
                                        <p class="text-sm">DIOR | Sandal</p>
                                        <span class="text-red-600">Price</span> 250.00 MMK
                                    </div>
                                </div>

                                <div class="flex space-x-8">
                                    <div>
                                        <img src="https://nb.scene7.com/is/image/NB/bb650ra1_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600" alt="image"
                                            class="w-20" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Aime Leon Dore</h2>
                                        <p class="text-sm">New Balance | Boost</p>
                                        <span class="text-red-600">Price</span> 100.00 MMK
                                    </div>
                                </div>

                                <div class="flex space-x-8">
                                    <div>
                                        <img src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/5970e7db-0186-4c20-840b-4c55a9c9820e/air-force-1-low-x-peaceminusone-para-noise-release-date.jpg" alt="image"
                                            class="w-20" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Nike AF 1'07</h2>
                                        <p class="text-sm">Nike | Shoe</p>
                                        <span class="text-red-600">Price</span> 150.00 MMK
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
