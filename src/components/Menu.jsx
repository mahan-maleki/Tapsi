import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

function MobileMenu() {

    const [isClicked, setClicked] = useState(false);

    return (
        <>
            <div className="menu-btn">
                <Menu onClick={() => setClicked(true)} />
            </div>
            {isClicked ?             <div className="menu-cont absolute w-screen h-screen bg-gray-400/50 backdrop-blur-xl top-0 right-0 left-0 bottom-0 grid grid-cols-1 grid-rows-10 p-4">
                <div className="close row-span-1">
                    <X color='#FFF' size={28} onClick={() => setClicked(false)}/>
                </div>
                <div className="menu row-span-8">
                    <ul className='text-lg p-4 justify-end'>
                        <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer mb-4 transition-all'>Drivers Registery</li>
                        <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer mb-4 transition-all'>Motorcycle Rider Registry</li>
                        <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer mb-4 transition-all'>Blog</li>
                        <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer mb-4 transition-all'>Support</li>
                        <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer transition-all'>Drivers Application</li>
                    </ul>
                </div>
                <div className="app row-span-1 items-center">
                    <button className='text-white px-8 py-3 bg-linear-to-l from-orange-600 to-orange-500 rounded-full ms-4 transition-all hover:from-orange-700 hover:to-orange-600 hover:cursor-pointer'>Download Tapsi</button>
                </div>
            </div> : ""}
        </>
    )
}

export default MobileMenu