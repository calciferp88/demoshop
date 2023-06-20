import React, {useState} from 'react';
import HmacSHA256 from "crypto-js/hmac-sha256";

export default function pay() {
    
    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ add, setAdd ] = useState('');

    const paynow = () => {
        
        // const items = [{
        //     name: "Nike Air Jordan",
        //     amount: 110,
        //     quantity: 2
        // }]

        // const data = {     
        //     clientId:"c2464698-5f1f-3f9e-b78e-e0c81f59dfa5" , 
        //     publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0vo1N4FgMN1M71kr/biv0TjrBketUQDGXhoM0LMulQuRm3z02DrDGdmPPTYAqzyz5W91bQfSU2h9tymaqxAXqs8883/97BnEmfVzYOmMVp6x1aa7YHr5u4pYj3CoGNFd219FfiSdZwSJQgwJCY5AscxJlrqKlKsAaeSyk+xR8TwIDAQAB" , 
        //     items: JSON.stringify(items), 
        //     customerName: "Kyaw Kyaw", 
        //     totalAmount: 220, 
        //     merchantOrderId: "0909", 
        //     merchantKey: "ri4umtp.7dMzovcIu6RCDWSIzrBH_trmNsc", 
        //     projectName: "Tentacion", 
        //     merchantName: "Ivan", 
        // } 

        // const NodeRSA = require("node-rsa");

        // const value = JSON.stringify(data);

        // /* encrypt public key */
                                                                                                                                                                                                                                                                                                                                                                    
        // const pubKey = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
        
        // "-----END PUBLIC KEY-----";
        // const seckey = "a5b1b8eb833621fd6ca09e5d4ff890e4";
        // const publicKey = new NodeRSA();
        // publicKey.importKey(pubKey, "pkcs8-public");
        // publicKey.setOptions({ encryptionScheme: "pkcs1" });
        // const encryptedPayload = publicKey.encrypt(value, "base64");
        // const HashValue = HmacSHA256(value, seckey).toString();
        // setTimeout(() => {
        
        // window.location = "https://prebuilt-revamp-staging.dinger.asia/"+"?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue;
            
        // }, 2000);

        const items = [
            
            {
                name: "Nike Airforce 1",
                amount: 350,
                quantity: 1
            },   
        
            {
                name: "Nike Elite Mid Basketball Socks",
                amount: 150,
                quantity: 1
            }
        ]

        const data = {     
            clientId:"b48a38a8-174e-3b35-819d-3b9db42c6288" , 
            publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCSK/YWss44mD4mHmR98Watu/ZINAgmOuaiMYYeNnBHDfyYn1xwD35XscNXRMeo7HNtCFAMB9nn5kcB/ieu7bGoywnAwtQBdfYywYVOZVwvBWW+Um3kOn2qkbXrYtHMiU7CUIXjdV21immdRp6tPeidlhQuErOodZ2tw/upHMmEcQIDAQAB" , 
            items: JSON.stringify(items), 
            customerName: "Kyaw Kyaw", 
            totalAmount: 500, 
            merchantOrderId: "0909", 
            merchantKey: "5l961te.Mtopaz53b6fxVckJzFEikdUTQVM", 
            projectName: "culturex_staging  ", 
            merchantName: "Ivan", 
        }   

        const NodeRSA = require("node-rsa");

        const value = JSON.stringify(data);

        /* encrypt public key */
                                                                                                                                                                                                                                                                                                                                                                     
        const pubKey = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
        
        "-----END PUBLIC KEY-----";
        const seckey = "da9bfe46c5cbc49fb9ebd183b1320d3f";
        const publicKey = new NodeRSA();
        publicKey.importKey(pubKey, "pkcs8-public");
        publicKey.setOptions({ encryptionScheme: "pkcs1" });
        const encryptedPayload = publicKey.encrypt(value, "base64");
        const HashValue = HmacSHA256(value, seckey).toString();
        setTimeout(() => {
        
        window.location = "https://prebuilt-revamp-staging.dinger.asia/"+"?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue;
            
        }, 2000);
    }

    return (
    <>
     <div class="container p-12 mx-auto bg-white">
            <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div class="flex flex-col md:w-full">
                    <h2 class="mb-4 font-bold md:text-xl text-heading ">Payment </h2>
                    <div class="pt-12 md:pt-0 2xl:ps-4">
                        <div class="flex items-center w-full py-4 text-sm font-semibold lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                              <img 
                                  class="w-[50px] rounded-full mb-5"
                                  src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/p1ygxmq1g97fg8nutlez" 
                              /> 

                              <button 
                                className="bg-black text-white w-[300px] py-3 -mt-5 ml-3 rounded disabled:bg-gray-500"
                                
                                onClick = { paynow }
                              >
                                Pay with Dinger
                              </button>
                          </div>
                    </div>
                    
                    <h2 class="text-xl font-bold mt-[100px]">Order Summary
                    </h2>

                        <div class="mt-8">
                            <div class="flex flex-col space-y-4">
                                <div class="flex space-x-4">
                                    <div>
                                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoe-Dz225W.png" alt="image"
                                            class="w-[200px] h-[250px]" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Nike Airforce 1</h2>
                                        <p class="text-sm">Airforce 1 NY, US 41</p>
                                        <span class="text-600 font-bold">Price:</span> 350 MMK
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
                                        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/g587s3hjx0emmgxu0yoq/elite-mid-basketball-socks-m7MvRc.png" alt="image"
                                            class="w-[200px]" />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-bold">Nike Elite Mid Basketball Socks</h2>
                                        <p class="text-sm">Basketball Socks 4 pairs, black</p>
                                        <span class="text-600 font-bold">Price</span> 150 MMK
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

                <div class="flex flex-col md:w-full">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KriBQVhsgZk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                
                    <iframe width="560" className="mt-10" height="315" src="https://www.youtube.com/embed/aV1QQaZn6TY" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                
            </div>
        </div>
    </>
  )
}
// ri4umtp.7dMzovcIu6RCDWSIzrBH_trmNsc