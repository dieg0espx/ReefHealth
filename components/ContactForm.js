import React from 'react'
import Image from 'next/image'

function ContactForm() {
  return (
    <section className="py-16 bg-white">
        <div className="mx-auto text-center">
            <span className="inline-block bg-light-pink text-main-pink px-6 py-2 rounded-full font-semibold mb-8">Contact Us</span>
            <h2 className="text-6xl font-bold text-gray-900 mb-6 w-[70%] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className='flex flex-row justify-between items-center gap-5'>
                <Image src={"/doctor-pink.png"} width={570} height={570}/>
                <div className='bg-light-pink w-1/2 p-10 rounded-3xl space-y-5 mt-[50px]'>
                    <h3 className="text-4xl font-bold text-gray-900 mb-6 w-[70%] mx-auto"> Get In Touch With Us </h3>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-3 mb-2 text-medium'> First Name </p>
                            <input className='w-full p-3 rounded-2xl' type='text' placeholder='First Name'></input>
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-3 mb-2 text-medium'> Last Name </p>
                            <input className=' w-full p-3 rounded-2xl' type='text' placeholder='Last  Name'></input>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-3 mb-2 text-medium'> Email Address </p>
                            <input className=' w-full p-3 rounded-2xl' type='email' placeholder='Email Address'></input>
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-3 mb-2 text-medium'> Phone Number </p>
                            <input className=' w-full p-3 rounded-2xl' type='tel' placeholder='Phone Number'></input>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 text-left ml-3 mb-2 text-medium'> Description </p>
                        <textarea className='w-full p-3 rounded-2xl' placeholder='What do you need?' rows={6}></textarea>
                    </div>
                    <button className='bg-main-pink hover:bg-white text-white hover:text-main-pink w-[100%] py-3 rounded-2xl ml-0 mr-auto'> Submit </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactForm