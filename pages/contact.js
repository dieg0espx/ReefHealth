import ContactForm from '@/components/ContactForm'
import FAQ from '@/components/FAQ'
import React from 'react'

function contact() {
  return (
    <div className='max-w-[1500px] mx-auto md:px-5'>
        <ContactForm/>
        <FAQ />
    </div>
  )
}

export default contact