import React, { useState } from 'react'

function Services() {

    const [isOpen, setOpen] = useState("classic");

    return (
        <div className="services p-20 mt-10">
            <div className="services-heading">
                <h2 className='text-3xl text-center lg:text-left mb-10'>Tapsi Services</h2>
            </div>
            <div className="services-container grid grid-cols-3 grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-5">
                <div className="service col-span-1 classic group hover:cursor-pointer" onClick={() => setOpen("classic")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-classic.webp" alt="service icon" className={`w-25 ${isOpen == "classic" ? "opacity-100" : "opacity-50"} transition-all group-hover:opacity-75`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "classic" ? "opacity-100" : "opacity-50"} transition-all`}>Classic</span>
                    </div>
                </div>
                <div className="service col-span-1 share group hover:cursor-pointer" onClick={() => setOpen("share")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-wait-and-share.webp" alt="service icon" className={`w-25 ${isOpen == "share" ? "opacity-100" : "opacity-50"} group-hover:opacity-75 transition-all`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "share" ? "opacity-100" : "opacity-50"} transition-all`}>Wait & Share</span>
                    </div>
                </div>
                <div className="service col-span-1 delivery group hover:cursor-pointer" onClick={() => setOpen("delivery")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-delivery.webp" alt="service icon" className={`w-25 ${isOpen == "delivery" ? "opacity-100" : "opacity-50"} group-hover:opacity-75 transition-all`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "delivery" ? "opacity-100" : "opacity-50"} transition-all`}>Delivery</span>
                    </div>
                </div>
                <div className="service col-span-1 tel group hover:cursor-pointer" onClick={() => setOpen("tel")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-tel.webp" alt="service icon" className={`w-25 ${isOpen == "tel" ? "opacity-100" : "opacity-50"} group-hover:opacity-75 transition-all`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "tel" ? "opacity-100" : "opacity-50"} transition-all`}>With Tel</span>
                    </div>
                </div>
                <div className="service col-span-1 plus group hover:cursor-pointer" onClick={() => setOpen("plus")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-plus.webp" alt="service icon" className={`w-25 ${isOpen == "plus" ? "opacity-100" : "opacity-50"} group-hover:opacity-75 transition-all`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "plus" ? "opacity-100" : "opacity-50"} transition-all`}>Plus</span>
                    </div>
                </div>
                <div className="service col-span-1 intercity group hover:cursor-pointer" onClick={() => setOpen("intercity")}>
                    <div className="service-img flex justify-center mb-4">
                        <img src="/cc-intercity.webp" alt="service icon" className={`w-25 ${isOpen == "intercity" ? "opacity-100" : "opacity-50"} group-hover:opacity-75 transition-all`} />
                    </div>
                    <div className="service-name flex justify-center">
                        <span className={`text-sm lg:text-xl ${isOpen == "intercity" ? "opacity-100" : "opacity-50"} transition-all`}>Intercity</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services