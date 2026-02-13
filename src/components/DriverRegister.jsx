import React from 'react'

function DriverRegister() {
  return (
    <div className="driver-register grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20 items-center">
        <div className="driver-register-content flex items-center flex-col mb-5 lg:mb-0 p-20 pb-0">
            <h2 className='text-3xl lg:text-4xl tapsi-bold'>Sign up in less than 10 minutes</h2>
            <div className="register-features mt-15">
                <ul className='list-disc'>
                    <li className='text-lg lg:text-xl text-gray-600'>Earn up to 6 Thousand Dollars in income</li>
                    <li className='text-lg lg:text-xl mt-4 text-gray-600'>5 instant settlements per day</li>
                    <li className='text-lg lg:text-xl mt-4 text-gray-600'>Discounts on car accessories from Tepsi Garage</li>
                    <li className='text-lg lg:text-xl mt-4 text-gray-600'>Use of the facilities of the Tepsi Ambassadors Club</li>
                </ul>
            </div>
            <div className="features grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 mt-10">
                <button className='text-lg p-3 rounded-full bg-black text-white hover:bg-gray-800 hover:cursor-pointer transition-all'>Driver Registery</button>
                <button className='text-lg underline decoration-2 underline-offset-2 hover:decoration-orange-600 hover:text-gray-800 hover:cursor-pointer transition-all'>Download Drivers App</button>
            </div>
        </div>
        <div className="driver-register-img flex justify-center p-10">
            <img src="/section-driver.webp" alt="driver registry section image" className='w-2xl' />
        </div>
    </div>
  )
}

export default DriverRegister