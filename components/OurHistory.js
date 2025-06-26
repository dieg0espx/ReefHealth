import React from 'react'

function OurHistory() {
  return (
    <section className="py-10 px-4 bg-white">
        <div className='flex flex-row justify-between items-center py-20'>
            <div className="flex flex-col justify-center w-full h-full ">
              <h2 className="text-6xl font-bold text-gray-900 mb-8 leading-tight">Lorem ipsum dolor sit amet consectetur</h2>
              <p className="text-lg text-gray-700 mb-10 max-w-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis in neque facilisis aliquet. Quisque nec tincidunt purus, sed fermentum nisi. Fusce sagittis urna eu tortor dictum, in fermentum velit laoreet. Nulla facilisi. Integer eget eros sit amet sapien posuere efficitur. Etiam sodales metus vel eros posuere, at volutpat orci lacinia. Sed nec quam magna. Donec rhoncus ex eu laoreet sagittis. Etiam ultricies posuere lorem, sed aliquam magna.</p>
              <div className="flex gap-6">
                <button className="bg-[#e03a6a] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#d12e5c] transition flex items-center gap-2">Lorem Ipsum <span className="inline-block transform rotate-45">→</span></button>
                <button className="bg-white border border-[#e03a6a] text-[#e03a6a] px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition flex items-center gap-2">Lorem ip <span className="inline-block transform rotate-45">→</span></button>
              </div>
            </div>
            <div className='w-full space-y-[30px] h-[630px] overflow-y-scroll'>
                <div className='bg-light-pink rounded-2xl p-5'>
                    <h3 className='text-main-pink text-2xl font-bold mb-[100px]'> 2015 </h3>
                    <h3 className='text-gray-900 text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-5'>
                    <h3 className='text-main-pink text-2xl font-bold mb-[100px]'> 2016 </h3>
                    <h3 className='text-gray-900 text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-5'>
                    <h3 className='text-main-pink text-2xl font-bold mb-[100px]'> 2017 </h3>
                    <h3 className='text-gray-900 text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-5'>
                    <h3 className='text-main-pink text-2xl font-bold mb-[100px]'> 2018 </h3>
                    <h3 className='text-gray-900 text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
                <div className='bg-light-pink rounded-2xl p-5'>
                    <h3 className='text-main-pink text-2xl font-bold mb-[100px]'> 2019 </h3>
                    <h3 className='text-gray-900 text-2xl font-bold'> Lorem Ipsum  </h3>
                    <p className='text-gray-500 text-lg'> Lorem ipsum do lor sit amet, c onse c tetur adipisc ing elit. In in fermentum mi. In idante lac us. Nun c bibendum magna eros. Integer at laoreet erat. Suspendisse tor tor mauris, tin c idunt a v e lit c onse c tetur , mollis aliquam do lor.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurHistory