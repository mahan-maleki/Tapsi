import React from 'react'

function Hero() {
    return (
        <div className='p-3 pt-30 grid grid-cols-1 lg:grid-cols-2 h-full lg:h-screen bg-gray-200'>
            <div className='flex items-center p-5 justify-center'>
                <div>
                    <h1 className='text-4xl/relaxed tapsi-bold hl text-center lg:text-left'>With Tapsi Super Applciation,<br />Life is at your command.</h1>
                    <div className='flex-col items-center mt-15'>
                        <button className='text-md text-white bg-gray-950 px-6 py-6 rounded-full mr-2 hover:cursor-pointer w-full lg:w-75 hover:bg-gray-700 transition-all mb-3'>Download Traveler Application</button>
                        <button className='text-md text-black bg-white border-2 px-6 py-6 rounded-full hover:cursor-pointer w-full lg:w-75'>Web Application Version (PWA)</button>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-10 mb-10'>
                <img src="/hero.webp" alt="hero section image" className='w-full md:w-md lg:w-2xl rounded-3xl p-3 border-3 border-gray-300' />
            </div>
        </div>
    )
}

export default Hero