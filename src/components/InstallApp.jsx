import React from 'react'

function InstallApp() {
  return (
    <div className="install-app-cont p-10 lg:p-20">
        <div className="install-app bg-linear-to-r from-orange-200 to-gray-200 rounded-3xl grid grid-cols-1 lg:grid-cols-2">
            <div className="install-vector">
                <img src="/section-install.webp" alt="vector of installing the application section" className='w-2xl' />
            </div>
            <div className="install-app-content p-5 lg:p-20">
                <h2 className='text-xl lg:text-4xl tapsi-bold text-center lg:text-right'>Install the Tapsi now !</h2>
                <p className='text-right mt-10 text-md lg:text-2xl'>By installing the Tepsi super app, you can use package delivery, food ordering, shopping, supermarket and pharmacy services in addition to requesting a car.</p>
                <div className='block lg:flex lg:justify-end mt-10'>
                    <button className='text-xl text-white bg-linear-to-r rounded-full from-orange-500 to-orange-700 w-full lg:w-1/3 mb-3 lg:mb-0 p-3 mr-5'>Tapsi App</button>
                    <button className='text-xl text-black bg-white rounded-full w-full lg:w-1/3 p-3'>Drivers App</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InstallApp