import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex flex-col items-start justify-center px-6 md:px-16 
    lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroNew.webp")] 
    bg-no-repeat bg-cover bg-center h-screen'>
  
  {/* Background Dark Overlay Layer */}
  <div className='absolute inset-0 bg-black/35 z-0' />

  {/* Wrap your text content in a div with z-10 so it stays above the overlay */}
  <div className='relative z-10 max-w-2xl space-y-4'>
    <span className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20">
      The Ultimate Hotel and Tour Guide Experience
    </span>
    
    <h1 className='font-playfair text-2xl md:text-5xl md:text-[66px] 
        md:leading-[56px] font-bold md:front-extrabold max-w-2xl mt-4'>
      Discover Your Perfect Gateway Destination
    </h1>
    
    <p className='max-w-130 text-gray-300 mt-2 text-sm md:text-base'>
      Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. 
      Travel anywhere, anytime with our incredible travel guides.
    </p>
  </div>
</div>
  )
}

export default Hero



