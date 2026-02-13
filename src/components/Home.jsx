import React from 'react'
import Hero from './Hero'
import Services from './Services'
import DriverRegister from './DriverRegister'
import CompanyPlans from './CompanyPlans'

function Home() {
    return (
        <>
            <main className='z-10'>
                <Hero />
                <Services />
                <DriverRegister />
                <CompanyPlans />
            </main>
        </>
    )
}

export default Home