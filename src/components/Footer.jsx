import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer bg-black w-full p-20 grid grid-cols-1 lg:grid-cols-10 lg:gap-10">
                <div className="brand-info col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="22" viewBox="0 0 102 22">
                        <g fill="#FFF" fill-rule="evenodd">
                            <path d="M102 5.946h-3.222v4.28H91.8v-4.28h-3.221v4.28h-5.637a1.878 1.878 0 0 1-1.879-1.872V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873 1.878 1.878 0 0 1-1.879-1.873V5.946h-3.221v2.408a1.878 1.878 0 0 1-1.879 1.873h-1.879V5.946h-3.22v4.28h-17.18v3.212h3.758v.535c0 2.656-2.167 4.816-4.831 4.816-2.664 0-4.832-2.16-4.832-4.816v-3.746H37.58v3.746c0 4.426 3.613 8.027 8.053 8.027 4.44 0 8.052-3.6 8.052-8.027v-.535H68.985a5.09 5.09 0 0 0 3.489-1.381 5.09 5.09 0 0 0 3.49 1.38 5.09 5.09 0 0 0 3.489-1.38 5.089 5.089 0 0 0 3.489 1.38H102V5.947z" />
                            <path d="M84.702 19.297h3.854V22h3.304v-5.946h-7.158zM102 0h-6.561v2.973H102zM26.842 11.297H10.737V5.946h16.105zM26.842 22H0v-5.351h26.842z" />
                        </g>
                    </svg>
                    <p className='text-white mt-5'>Car and courier request application</p>
                    <p className='text-gray-500 mt-3'>All material and intellectual property rights of this website belong to Tepsi.</p>
                    <div className="social-media mt-20">
                        <p className='text-white'>Tapsi in Social Media</p>
                        <div className="icons grid grid-cols-4 mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20">
                                <path fill="#ababab" fill-rule="nonzero" d="M6.393 6.875v-2.5c0-.69.56-1.25 1.25-1.25h1.25V0h-2.5a3.75 3.75 0 0 0-3.75 3.75v3.125h-2.5V10h2.5v10h3.75V10h2.5l1.25-3.125h-3.75z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20">
                                <path fill="#ababab" fill-rule="nonzero" d="M14.464 0a6.25 6.25 0 0 1 6.25 6.25v7.5a6.25 6.25 0 0 1-6.25 6.25h-7.5a6.25 6.25 0 0 1-6.25-6.25v-7.5A6.25 6.25 0 0 1 6.964 0h7.5zm4.375 13.75v-7.5a4.38 4.38 0 0 0-4.375-4.375h-7.5A4.38 4.38 0 0 0 2.59 6.25v7.5a4.38 4.38 0 0 0 4.375 4.375h7.5a4.38 4.38 0 0 0 4.375-4.375zM10.714 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 8.125A3.13 3.13 0 0 0 13.84 10a3.129 3.129 0 0 0-3.125-3.125A3.129 3.129 0 0 0 7.59 10a3.13 3.13 0 0 0 3.125 3.125zm5.375-7.834a.666.666 0 1 1 0-1.332.666.666 0 0 1 0 1.332z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                <path fill="#ababab" fill-rule="nonzero" d="M22.857 2.627a9.77 9.77 0 0 1-2.7.74A4.66 4.66 0 0 0 22.22.777a9.365 9.365 0 0 1-2.972 1.134 4.684 4.684 0 0 0-8.106 3.204c0 .372.032.73.109 1.07-3.896-.19-7.343-2.058-9.659-4.902A4.718 4.718 0 0 0 .95 3.65c0 1.623.836 3.062 2.081 3.895a4.628 4.628 0 0 1-2.117-.577v.051a4.707 4.707 0 0 0 3.755 4.604 4.677 4.677 0 0 1-1.229.155c-.3 0-.603-.018-.887-.08.607 1.855 2.33 3.22 4.378 3.264a9.415 9.415 0 0 1-5.81 1.998c-.384 0-.752-.017-1.121-.064A13.192 13.192 0 0 0 7.189 19c8.622 0 13.337-7.143 13.337-13.334 0-.207-.007-.407-.017-.606a9.348 9.348 0 0 0 2.348-2.433z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19">
                                <path fill="#ABABAB" d="M9.025 12.522l-.38 5.305c.544 0 .78-.232 1.062-.51l2.552-2.418 5.289 3.84c.97.535 1.653.253 1.914-.885L22.934 1.73C23.243.307 22.417-.249 21.472.1L1.068 7.844C-.325 8.38-.304 9.15.83 9.498l5.216 1.609L18.164 3.59c.57-.374 1.089-.167.662.207l-9.801 8.724z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-span-4 grid-cols-1 lg:grid-cols-4 grid gap-5 mt-10 lg:mt-0">
                    <ul>
                        <p className='text-lg text-white tapsi-bold mb-5'>Tapsi</p>
                        <li className='text-gray-400 mb-2'>Tapsi Weblog</li>
                        <li className='text-gray-400 mb-2'>Job Offers</li>
                        <li className='text-gray-400 mb-2'>Call to Us</li>
                        <li className='text-gray-400 mb-2'>Logo and Company brand</li>
                        <li className='text-gray-400 mb-2'>Hiring a Marketer</li>
                        <li className='text-gray-400 mb-2'>Stock Affairs</li>
                        <li className='text-gray-400 mb-2'>Videos</li>
                    </ul>
                    <ul>
                        <p className='text-lg text-white tapsi-bold mb-5'>Travelers</p>
                        <li className='text-gray-400 mb-2'>Download Travelers App</li>
                        <li className='text-gray-400 mb-2'>Web Version of Tapsi</li>
                        <li className='text-gray-400 mb-2'>Travelers FAQ</li>
                        <li className='text-gray-400 mb-2'>Travelers terms and conditions</li>
                        <li className='text-gray-400 mb-2'>Customer Club</li>
                    </ul>
                    <ul>
                        <p className='text-lg text-white tapsi-bold mb-5'>Drivers</p>
                        <li className='text-gray-400 mb-2'>Download Drivers App</li>
                        <li className='text-gray-400 mb-2'>Drivers Registery</li>
                        <li className='text-gray-400 mb-2'>Drivers FAQ</li>
                        <li className='text-gray-400 mb-2'>Drivers terms and conditions</li>
                        <li className='text-gray-400 mb-2'>Tapsi Garage</li>
                        <li className='text-gray-400 mb-2'>Register Motorcycle Riders</li>
                    </ul>
                    <ul>
                        <p className='text-lg text-white tapsi-bold mb-5'>Businesses</p>
                        <li className='text-gray-400 mb-2'>Tapsi Business panel</li>
                        <li className='text-gray-400 mb-2'>Purchase credits and discount codes</li>
                    </ul>
                </div>
                <div className="symbols col-span-3 grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 lg:mt-0">
                    <div className="etehadiye h-full bg-white flex justify-center items-center rounded-xl p-3 lg:p-0">
                        <img src="/etehadiye.png" alt="etehadiye namad" />
                    </div>
                    <div className="etehadiye h-full bg-white flex justify-center items-center rounded-xl p-3 lg:p-0">
                        <img src="/etehadiye.png" alt="etehadiye namad" />
                    </div>
                    <div className="etehadiye h-full bg-white flex justify-center items-center rounded-xl p-3 lg:p-0">
                        <img src="/etehadiye.png" alt="etehadiye namad" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer