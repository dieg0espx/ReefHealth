import React from 'react'
import Image from 'next/image'

function ContactForm() {
  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
            <span className="inline-block bg-light-pink text-main-pink px-4 md:px-6 py-2 rounded-full font-semibold mb-6 md:mb-8 text-sm md:text-base">Contact Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 w-full md:w-[80%] lg:w-[70%] mx-auto leading-tight">Ready to Transform Your Health Benefits?</h2>
            <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-3xl mx-auto px-4">Get in touch with our team to learn more about our affordable health plans, franchise opportunities, or to schedule a consultation. We're here to help you save money and provide better health benefits.</p>

            <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-5'>
                <div className="w-full lg:w-auto order-2 lg:order-1">
                    <Image 
                        src={"/doctor-pink.png"} 
                        width={570} 
                        height={570}
                        className="w-full max-w-md lg:max-w-none mx-auto"
                        alt="Contact Reef Health"
                    />
                </div>
                <div className='bg-light-pink w-full lg:w-1/2 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl space-y-4 md:space-y-5 order-1 lg:order-2 lg:mt-[50px]'>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 w-full md:w-[80%] lg:w-[70%] mx-auto"> Get In Touch With Us </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> First Name </p>
                            <input className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' type='text' placeholder='First Name'></input>
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Last Name </p>
                            <input className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' type='text' placeholder='Last  Name'></input>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Email Address </p>
                            <input className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' type='email' placeholder='Email Address'></input>
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Phone Number </p>
                            <input className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' type='tel' placeholder='Phone Number'></input>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Message </p>
                        <textarea className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' placeholder='Tell us about your business and health benefit needs...' rows={6}></textarea>
                    </div>
                    <button className='bg-main-pink hover:bg-white text-white hover:text-main-pink w-full py-3 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-medium transition-colors duration-300'> Send Message </button>
                    <div className="text-center text-gray-600 text-sm">
                        <p>Or call us directly at <a href="tel:833-353-7333" className="text-main-pink font-semibold">(833) 353-7333</a></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm