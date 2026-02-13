import React from 'react'

function Post(props) {
  return (
    <div className="post p-0 lg:p-5 hover:shadow-2xl transition-all hover:cursor-pointer rounded-2xl">
        <div className="post-img">
            <img src={props.img} alt="post image" className='rounded-2xl w-full' />
        </div>
        <div className="post-content p-5">
            <h4 className='mt-5 text-lg lg:text-xl mb-5'>{props.title}</h4>
            <p className='text-justify text-gray-400'>{props.desc}</p>
        </div>
    </div>
  )
}

export default Post