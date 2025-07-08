import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function ContactForm() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    // Check if a plan was selected from the pricing page
    if (router.query.plan) {
      setSelectedPlan(router.query.plan);
      
      // Handle different types of interests
      if (router.query.interest === 'franchise') {
        setFormData(prev => ({
          ...prev,
          message: `Hi! I&apos;m interested in franchise opportunities with Reef Health. Please provide more information about becoming a franchisee, including startup costs, territory availability, and support provided.`
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          message: `Hi! I&apos;m interested in the ${router.query.plan} plan. Please provide more information about enrollment and next steps.`
        }));
      }
    }
  }, [router.query.plan, router.query.interest]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('Please fill in all required fields.');
      return;
    }

    // For now, show a success message. You can integrate with your actual form handler here
    const planText = selectedPlan ? ` for the ${selectedPlan} plan` : '';
    alert(`Thank you for your interest${planText}! We&apos;ll contact you within 24 hours to discuss your health benefit needs.`);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
    setSelectedPlan('');
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="mx-auto text-center max-w-7xl">
            <span className="inline-block bg-light-pink text-main-pink px-4 md:px-6 py-2 rounded-full font-semibold mb-6 md:mb-8 text-sm md:text-base">Contact Us</span>
            {selectedPlan && (
              <div className="bg-[#e03a6a] text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="text-sm font-medium">Selected Plan: {selectedPlan}</span>
              </div>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 w-full md:w-[80%] lg:w-[70%] mx-auto leading-tight">Ready to Transform Your Health Benefits?</h2>
            <p className="text-base md:text-lg text-gray-500 mb-8 md:mb-12 max-w-3xl mx-auto px-4">Get in touch with our team to learn more about our affordable health plans, franchise opportunities, or to schedule a consultation. We&apos;re here to help you save money and provide better health benefits.</p>

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
                <form onSubmit={handleSubmit} className='bg-light-pink w-full lg:w-1/2 p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl space-y-4 md:space-y-5 order-1 lg:order-2 lg:mt-[50px]'>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6 w-full md:w-[80%] lg:w-[70%] mx-auto"> Get In Touch With Us </h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> First Name <span className="text-red-500">*</span></p>
                            <input 
                              className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' 
                              type='text' 
                              name='firstName'
                              value={formData.firstName}
                              onChange={handleInputChange}
                              placeholder='First Name'
                              required
                            />
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Last Name <span className="text-red-500">*</span></p>
                            <input 
                              className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' 
                              type='text' 
                              name='lastName'
                              value={formData.lastName}
                              onChange={handleInputChange}
                              placeholder='Last Name'
                              required
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Email Address <span className="text-red-500">*</span></p>
                            <input 
                              className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' 
                              type='email' 
                              name='email'
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder='Email Address'
                              required
                            />
                        </div>
                        <div>
                            <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Phone Number <span className="text-red-500">*</span></p>
                            <input 
                              className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' 
                              type='tel' 
                              name='phone'
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder='Phone Number'
                              required
                            />
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-500 text-left ml-1 md:ml-3 mb-2 text-sm md:text-medium'> Message </p>
                        <textarea 
                          className='w-full p-3 md:p-3 rounded-xl md:rounded-2xl text-sm md:text-base' 
                          name='message'
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder='Tell us about your business and health benefit needs...' 
                          rows={6}
                        />
                    </div>
                    <button 
                      type='submit'
                      className='bg-main-pink hover:bg-white text-white hover:text-main-pink w-full py-3 md:py-3 rounded-xl md:rounded-2xl text-sm md:text-base font-medium transition-colors duration-300 cursor-pointer hover:scale-105 transform'
                    > 
                      Send Message 
                    </button>
                    <div className="text-center text-gray-600 text-sm">
                        <p>Or call us directly at <a href="tel:833-353-7333" className="text-main-pink font-semibold hover:underline">(833) 353-7333</a></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactForm