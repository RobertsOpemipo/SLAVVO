import NavBar from '@/components/NavBar'
import React from 'react'
import Home from '../page'
import Footer from '@/components/Footer';

const layout = () => {
  return (
    <div>
        <main className="font-work-sans">
            <NavBar />

            <Home />

            <Footer />
        </main>
    </div>
  )
}

export default layout