import React from 'react'

function ServiceTab(props) {
  return (
    <div className="tab p-0 lg:p-20 mt-0 lg:mt-3 grid grid-cols-1 lg:grid-cols-2">
        <div className="tab-img flex justify-center">
            <img src={props.tab == "classic" ? "/illus-classic.webp" : props.tab == "share" ? "/illus-wait-and-share.webp" : props.tab == "delivery" ? "/illus-delivery.webp" : props.tab == "tel" ? "/illus-tel.webp" : props.tab == "plus" ? "/illus-plus.webp" : props.tab == "intercity" && "/illus-intercity.webp"} alt="service tab introduction image" className='w-4xl lg:w-xl' />
        </div>
        <div className="tab-content p-10">
          <h3 className='text-4xl text-center lg:text-left tapsi-bold mb-10'>{props.tab == "classic" ? "Classic Tapsi" : props.tab == "share" ? "Wait and Share" : props.tab == "delivery" ? "Send Box" : props.tab == "tel" ? "Call Tapsi" : props.tab == "plus" ? "Tapsi Plus" : props.tab == "intercity" && "InterCity"}</h3>
          <p className='text-lg text-center w-full lg:text-2xl lg:text-left lg:w-2/3'>{props.tab == "classic" ? "Get to your destination quickly, easily and affordably with the classic Tepsi service. You can travel to two or more destinations with this service." : props.tab == "share" ? "In the Tepsi carpool service, you share the route with another passenger. Your trip with this service is 35% cheaper than the classic trip." : props.tab == "delivery" ? "You can send your shipments by Motopick (small package) or Autopick (large package) using the Tepsi package delivery service." : props.tab == "tel" ? "The telephone taxi service, or 1630, allows you to request a car without the need for the internet or an app. Just call 1630." : props.tab == "plus" ? "The Tepsi Plus service is offered with higher-model cars and lower performance. In this service, it is possible to specify multiple destinations and stops along the way." : props.tab == "intercity" && "The Tepsi Plus service is offered with higher-model cars and lower performance. In this service, it is possible to specify multiple destinations and stops along the way."}</p>
        </div>
    </div>
  )
}

export default ServiceTab