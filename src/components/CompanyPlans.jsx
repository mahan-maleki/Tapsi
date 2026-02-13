import React from 'react'

function CompanyPlans() {
    return (
        <div className="company-plans grid grid-cols-1 lg:grid-cols-2 mt-20 mb-20 items-center">
            <hr className='bg-linear-to-r block lg:hidden from-white via-gray-300 to-white border-0 h-0.5' />
            <div className="company-plans-img flex justify-center p-10">
                <img src="/section-corporate.webp" alt="company plans section image" className='w-2xl' />
            </div>
            <div className="company-plans-content mb-5 lg:mb-0 p-10 lg:p-20 pb-0">
                <h2 className='text-3xl lg:text-4xl text-center lg:text-left tapsi-bold'>Special Sevices for Businesses</h2>
                <p className='text-2xl mt-10'>You can use Tepsi's special features for businesses, such as requesting unlimited cars and couriers simultaneously and creating corporate discount codes.</p>
                <div className="features grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5 mt-10">
                    <button className='text-lg p-3 rounded-full bg-black text-white hover:bg-gray-800 hover:cursor-pointer transition-all'>Driver Registery</button>
                    <button className='text-lg underline decoration-2 underline-offset-2 hover:decoration-orange-600 hover:text-gray-800 hover:cursor-pointer transition-all'>Download Drivers App</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyPlans