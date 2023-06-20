import React, {useState} from 'react';
import HmacSHA256 from "crypto-js/hmac-sha256";
import rsa from "crypto-js";


export default function Checkout() {

    const [ fname, setFname ] = useState('');
    const [ lname, setLname ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ add, setAdd ] = useState('');
    const totalAmount = 110;

    const paynow = () => {
        
        const items = `[{\"name\":\"Dinger\\'s\",\"amount\": ${totalAmount},\"quantity\":\"2\"}]`; 

        const values = {     
            clientId:"3471e87e-4959-39c2-82d8-70a9e0c1dbd1", 
            publicKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4rpGNRGNIu68oCBpts1s3A+Mo6sLuY5BAVznsrtDrdt9TOdAsWJVWfoXGKnD15IPs06fyZeJf+JoZsFiTnRcZ1TdYZVyL+xMFCWshZxt4kxfLrMpbOLm8SB4S3j8o9B9Wfsuk5D9Tf9sAMC2KShXSEXruu5sn/jwXTP6XlAiDHQIDAQAB" , 
            items: items, 
            customerName: fname, 
            totalAmount: 220, 
            merchantOrderId: "000001", 
            merchantKey: "eb8ten1.uzDCmGF4v3ep0b5LLUcdKAnynK8z", 
            projectName: "culturexmm", 
            merchantName: "Ivan", 
        } 

        const NodeRSA = require("node-rsa");
        const secret_key = "e2f54dd446c263995d208cd7ceb6bb10"; 

        /* encrypt public key */
                                                                                                                                                                                                                                                                                                                                                                    
        const pubKey = "-----BEGIN PUBLIC KEY-----\n"+"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFD4IL1suUt/TsJu6zScnvsEdLPuACgBdjX82QQf8NQlFHu2v/84dztaJEyljv3TGPuEgUftpC9OEOuEG29z7z1uOw7c9T/luRhgRrkH7AwOj4U1+eK3T1R+8LVYATtPCkqAAiomkTU+aC5Y2vfMInZMgjX0DdKMctUur8tQtvkwIDAQAB"
        
        "-----END PUBLIC KEY-----";
        
        const publicKey = new NodeRSA();
        publicKey.importKey(pubKey, "pkcs8-public");
        publicKey.setOptions({ encryptionScheme: "pkcs1" }); 
        const encryptedPayload = publicKey.encrypt(values, "base64");
        const HashValue = HmacSHA256(values, secret_key).toString();
        
        window.location = "https://form.dinger.asia?payload="+encodeURIComponent(encryptedPayload)+"&hashValue="+HashValue+"&lang="+"en";
        
    }

    return (
    <>
        <div class="container p-12 mx-auto bg-white mt-6 rounded">
                <div class="flex flex-col w-full px-0 mx-auto md:flex-row">
                    <div class="flex flex-col md:w-full">
                        <h2 class="mb-4 font-bold md:text-xl text-heading ">Please fill out this form to proceed !
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
                                            class="w-full h-[170px] px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
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
                                            <img src="https://www.highsnobiety.com/static-assets/thumbor/ICZCXCFQhBjgmIAjzVD352RWNvs=/1000x600/www.highsnobiety.com/static-assets/wp-content/uploads/2019/03/13145503/nike-air-jordan-1-panda-release-date-price-00.jpg" alt="image"
                                                class="w-60" />
                                        </div>
                                        <div>
                                            <h2 class="text-md font-bold">Nike AJ 1 PANDA</h2>
                                            <p class="text-sm">Limited Edition 2022, Air Jordan</p>
                                            <span class="text-red-600">MMK</span> 220.00
                                        </div>
                                    </div>
                                    <div class="flex space-x-4">
                                        <div>
                                            <img src="https://s3.amazonaws.com/nikeinc/assets/95274/NSW-Sandals-4_hd_1600.jpg" alt="image"
                                                class="w-60" />
                                        </div>
                                        <div>
                                            <h2 class="text-md font-bold">Nike velcro sandal</h2>
                                            <p class="text-sm">Inspired by ’90s cross-training sandals</p>
                                            <span class="text-red-600">MMK</span> 220.00
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