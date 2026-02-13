import React from 'react'
import Hero from './Hero'
import Services from './Services'
import DriverRegister from './DriverRegister'
import CompanyPlans from './CompanyPlans'
import InstallApp from './InstallApp'
import BlogPosts from './BlogPosts'

function Home() {
    return (
        <>
            <main className='z-10'>
                <Hero />
                <Services />
                <DriverRegister />
                <CompanyPlans />
                <InstallApp />
                <BlogPosts />
            </main>
        </>
    )
}

export default Home