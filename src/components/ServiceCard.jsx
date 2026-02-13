import React from 'react'

function ServiceCard(props) {
    return (
        <div className="service col-span-1">
            <div className="service-img flex justify-center mb-4">
                <img src={props.img} alt="service icon" className='w-25' />
            </div>
            <div className="service-name flex justify-center">
                <span className='text-xl'>{props.name}</span>
            </div>
        </div>
    )
}

export default ServiceCard