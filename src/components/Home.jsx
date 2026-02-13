import React from 'react'
import Hero from './Hero'
import Services from './Services'

function Home() {
    return (
        <>
            <main className='z-10'>
                <Hero />
                <Services />
            </main>
        </>
    )
}

export default Home