import FAQ from '@/components/FAQ'
import Hero2 from '@/components/Hero2'
import OurHistory from '@/components/OurHistory'
import OurTeam from '@/components/OurTeam'
import Testimonials from '@/components/Testimonials'
import WhyWeTheBest from '@/components/WhyWeTheBest'
import React from 'react'

function about() {
  return (
    <div className='max-w-[1500px] mx-auto'>
        <Hero2 />
        <OurTeam />
        <WhyWeTheBest />
        <OurHistory />
        <Testimonials />
        <FAQ />
    </div>
  )
}

export default about