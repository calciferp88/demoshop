import React from 'react'

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEXw-aw8XE58Q/profile-displayphoto-shrink_200_200/0/1612067021290?e=1648080000&v=beta&t=K2bik-AVohTcudAqBfT8G8j-1wLCCr8_s5vEC86UBmE" 
                className="rounded-full border p-[2px]
                w-16 h-16"
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">Pyae Thuta</h2>
                <h3 className="text-sm text-gray-400">I'm a programmer</h3>
            </div>

            <button className="text-blue-400 text-sm
            font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
