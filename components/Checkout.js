import React, {useState} from 'react';
import HmacSHA256 from "crypto-js/hmac-sha256";

export default function pay() {
    
    const [ fname, setFname ] = useState('Pyae Thuta');
    const [ email, setEmail ] = useState('thuta@gmail.com');
    const [ phone, setPhone ] = useState('09796029282');
    const [ add, setAdd ] = useState('');

    const paynow = () => {

        // create items in array format
        const items = [
            {
                name: "DiorAct Sandal",
                amount: 250,
                quantity: 1
            },   
        
            {
                name: "Aime Leon Dore",
                amount: 250,
                quantity: 1
            }
        ]

        const generateUniqueId = require('generate-unique-id');
        const orderid = generateUniqueId({
            length: 8,
            useLetters: false,
            includeSymbols: ['@','#'],
            excludeSymbols: ['0', '|', '^']
        });

        // create a data payload
        const data = { 

            // stringified items and merchant side info
            items: JSON.stringify(items), 
            customerName: fname, 
            totalAmount: 500, 
            merchantOrderId: orderid, 

            // API information from Dinger Dashboard
            clientId:"511c5b85-f1c0-3c37-9008-53f0090b8094", 
            publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC/GC6o+cBaACNR6ic3/BUmjwhAzdZC3sOeyiDATPs9nAshAwzwXHFq1QWvlVsjFEz8Ows96IXk2XAKC4tT/wCB8MVhIK9oDh78gFHCyC2CGzrl1HPSbHWFio5l8EJF0RaEaDSg02cwWpCbttOrCA2PAADXxWIoFvU6A5ZipKvz9wIDAQAB", 
            merchantKey: "ncv29m3.p2kGGwxnqzBa5Zy6uMMOvlJMCqc", 
            projectName: "Dinger Demo Shop", 
            merchantName: "Dinger2019", 
        }   

        // change data to string
        const value = JSON.stringify(data);

        const NodeRSA = require("node-rsa");

        /* Key for encryption(not public key): copy and use the same key in documentation */                                                                                                                                                                                                                                                                                                                                                                 
        const keyforEncryption = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
        "-----END PUBLIC KEY-----";

        // secret key in prebuilt checkout form
        const secretkey = "30c2d00482ff775e90c28be729966f76";
        const publicKey = new NodeRSA();
        publicKey.importKey(keyforEncryption, "pkcs8-public");
        publicKey.setOptions({ encryptionScheme: "pkcs1" });
        const encryptedPayload = publicKey.encrypt(value, "base64");
        const HashValue = HmacSHA256(value, secretkey).toString();
        setTimeout(() => {
        
        window.location = "https://form.dinger.asia/"+"?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue;
            
        }, 2000);

    }

    return (
    <>
      <div class="container py-12 bg-[#fff] lg:px-[200px] px-[30px] mx-[0px] max-w-6xl mx-[0] lg:mx-[auto]">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full lg:w-3/6">
                    <h2 class="mb-4 font-bold md:text-xl text-heading border-b border-gray-300 pb-3">Billing Address
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
                            
                            <div class="flex items-center mt-4 border-b border-gray-300 pb-5">
                                <label class="flex items-center text-sm group text-heading">
                                    <input type="checkbox"
                                        class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1" />
                                    <span class="ml-2">Save this information for next time</span></label>
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
