import React from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import OurTeam from '@/components/OurTeam'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Faq from '@/components/FAQ'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <OurTeam />
      <Testimonials />
      <Pricing />
      <Faq />
    </div>
  )
}

export default Home