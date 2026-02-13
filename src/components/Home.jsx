import React from 'react'
import Hero from './Hero'
import Services from './Services'
import DriverRegister from './DriverRegister'
import CompanyPlans from './CompanyPlans'
import InstallApp from './InstallApp'

function Home() {
    return (
        <>
            <main className='z-10'>
                <Hero />
                <Services />
                <DriverRegister />
                <CompanyPlans />
                <InstallApp />
            </main>
        </>
    )
}

export default Home