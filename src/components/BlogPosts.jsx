import React from 'react'
import Post from './Post'

function BlogPosts() {
  return (
    <div className="blog-posts p-10 lg:p-20">
        <div className="posts-heading">
            <h3 className='text-4xl'>Newest Tapsi Blog</h3>
        </div>
        <div className="blog-content grid grid-cols-1 lg:grid-cols-3 mt-20 gap-10">
            <Post img="/log-DriverArtboard-14.jpg" title="Return of the travel option in the Tepsi super application" desc="If you have used Tepsi to reach your destination and you want to return to your starting point, you do not need to re-enter your starting point and destination. By using the “Return Trip” option in the Tepsi super application, you can easily and quickly record your return route. To use this feature, follow the steps below…"/>
            <Post img="/Artboard-5.jpg" title="Trip repeat option in the Tapsi app" desc={`If you want to repeat one of your past trips with Tapsi, you don't need to enter the origin and destination, because the "Repeat Trip" option is available to you. To use this option, simply follow these steps: Log in to the Tapsi super application. In the profile section, click on the "My Trips" option. Click on the trip option...`}/>
            <Post img="/7.jpg" title="Guide to registering in the Simin system" desc="Internet taxi drivers must register in the Simin system to receive the difference in fuel costs. In this article, we have explained the steps for registering in this system. 1- Log in to the system site You can log in to the Simin system via the link simin.hadafmandi.ir. After entering the ambassador’s mobile number, you will receive a security code. 2- Enter the code…"/>
        </div>
    </div>
  )
}

export default BlogPosts