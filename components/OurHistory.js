import React from 'react'

function OurHistory() {
  return (
    <section className="py-8 sm:py-10 px-4 sm:px-6 bg-white">
        <div className='flex flex-col-reverse lg:flex-row justify-between items-start lg:items-center py-10 sm:py-16 lg:py-20 gap-8 lg:gap-12'>
            <div className="flex flex-col justify-center w-full h-full order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">Lorem ipsum dolor sit amet consectetur</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque nec tincidunt purus, sed fermentum nisi. Fusce sagittis urna eu tortor dictum, in fermentum velit laoreet. Nulla facilisi. Integer eget eros sit amet sapien posuere efficitur. Etiam sodales metus vel eros posuere, at volutpat orci lacinia. Sed nec quam magna. Donec rhoncus ex eu laoreet sagittis. Etiam ultricies posuere lorem, sed aliquam magna.</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="bg-[#e03a6a] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
                <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center justify-center gap-2 text-sm sm:text-base">Lorem ip <span className="inline-block transform rotate-45">→</span></button>
              </div>
            </div>
            <div className='w-full space-y-4 sm:space-y-6 lg:space-y-[30px] h-[400px] sm:h-[500px] lg:h-[630px] overflow-y-scroll order-1 lg:order-2'>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> 2015 </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> 2016 </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> 2017 </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> 2018 </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-4 sm:p-5'>
                    <h3 className='text-main-pink text-xl sm:text-2xl font-bold mb-6 sm:mb-8 lg:mb-[100px]'> 2019 </h3>
                    <h3 className='text-gray-900 text-xl sm:text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-base sm:text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurHistory