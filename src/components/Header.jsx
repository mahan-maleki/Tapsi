import React from 'react'
import MobileMenu from './Menu'

function Header() {
  return (
    <>
      <header>
        <div className='header grid grid-cols-4 items-center p-3 w-full fixed bg-white'>
          <div className="brand col-span-1 flex items-center gap-2">
            <img src="/favicon.ico" alt="tapsi logo" className='w-10 hover:cursor-pointer' />
            <span className='tapsi-bold text-xl hover:cursor-pointer'>Tapsi</span>
          </div>
          <div className="nav grid-cols-4 col-span-3 gap-5 items-center hidden lg:grid">
            <div className="menu col-span-3">
              <ul className='text-md flex justify-end'>
                <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer me-4 transition-all'>Drivers Registery</li>
                <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer me-4 transition-all'>Motorcycle Rider Registry</li>
                <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer me-4 transition-all'>Blog</li>
                <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer me-4 transition-all'>Support</li>
                <li className='text-gray-700 hover:text-orange-500 hover:cursor-pointer transition-all'>Drivers Application</li>
              </ul>
            </div>
            <div className="app col-span-1 items-center">
              <button className='text-white px-5 py-3 bg-linear-to-l from-orange-600 to-orange-500 rounded-full ms-4 transition-all hover:from-orange-700 hover:to-orange-600 hover:cursor-pointer'>Download Tapsi</button>
            </div>
          </div>
          <div className="mobile-nav col-span-3 justify-items-end lg:hidden">
            <MobileMenu/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header