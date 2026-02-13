import React from 'react'
import Hero from './Hero'
import Services from './Services'
import DriverRegister from './DriverRegister'

function Home() {
    return (
        <>
            <main className='z-10'>
                <Hero />
                <Services />
                <DriverRegister />
            </main>
        </>
    )
}

export default Home