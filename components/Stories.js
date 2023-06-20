import React, { useState, useEffect } from 'react';
import { Users } from "../data/user.js";
import Story from "./Story";

function Stories() {

    const [ suggestion, setSuggesstion ] = useState([]);

    useEffect( () => {
        setSuggesstion(Users);
    }, []);
       

    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200
        border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">

            {
                suggestion.map(profile => (
                    <Story 
                        key  = { profile.id }
                        name = { profile.user }
                        img  = { profile.image }
                    />
                    ))
            }
            
        </div>
    )
}

export default Stories;

