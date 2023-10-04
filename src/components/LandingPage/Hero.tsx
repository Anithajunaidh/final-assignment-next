import React from 'react'
import Image from 'next/image';
import IconLabelButtons from '../IconButton';


const Hero = () => {
  return (
    // <div className='pl-3 w-full' >
      //  <div className="pl-3 bg-cover bg-center" style={{ backgroundImage: "url('assets/images/landing-page/wave.png')" }}>
<div className='bg-[hero_img] bg-cover'>
      <div className='flex justify-between' >
        <div>
        <Image
         src="assets/images/landing-page/Logo fundacion.svg"
         alt="Logo"
         width={100}
         height={100}
       />
       </div>
       <div className='pt-4'>
       <IconLabelButtons/>
      </div>  
      </div> 
      <div className='flex justify-between'>
      <div className='flex-grow'>
        {/* content */}
        <div className='font-poppins font-bold text-white text-lg'>CARE India is working </div>
        <div className='mb-3 font-poppins font-bold text-white text-lg'>for over 70 years to bring</div>
<div className='mb-4 font-poppins font-bold text-white text-xs'>We are a not-for-profit organisation that builds capacity of communities to ensure empowerment for marginalised women and girls. Our sustainable and holistic interventions in Health, Livelihood, Education and Disaster Relief & Resilience, provide innovative solutions to deep-rooted development problems.</div>
<IconLabelButtons/>
      </div>
      <div className='flex-grow'>
      <Image
         src="/assets/images/landing-page/hero_image.png"
         alt="Logo"
         width={500}
         height={400}
       />  
      </div>
    </div>
    </div>
  )
}

export default Hero
