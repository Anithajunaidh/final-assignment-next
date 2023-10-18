import images from '@/constants/images'
import React from 'react'
import Image from 'next/image'

const RetirementLife = () => {
  return (
    <div className='p-6'>

    <div className='flex flex-col lg:flex-row p-2'>
      <div className=' h-96 bg-no-repeat bg-cover bg-opacity-25' style={{ backgroundImage: "url('assets/images/landing-page/DrCheckingSrWomen.svg')", }}>
      <div className='font-poppins font-extrabold text-xl text-white text-center p-20'>
      Home for Retired people
      </div>
      <div className='font-poppins font-bold text-sm text-white text-center px-32'>
      Celebrate your post retirement life in luxury and comfort in the ambience of a resort, enjoying most modern amenities with a blend of the treasured ancient Indian wisdom and culture at affordable rates at Mathews Home. We take care of your physical, psychological and spiritual well-being with the help of professionals and various entertainment activities like in-door and outdoor games, Ayurvedic spa.
      </div>
      </div>
    </div>

    <div className=' grid grid-cols-2 grid-row-2 gap-4'>
      <div className='relative'>
      <Image
         src={images.seniorsEatingDinner}
         alt="Logo"
        //  width={200}
        //  height={150}
        //  layout='responsive'
        layout='fill'
        objectFit='cover'
       />  
      </div>
      <div>
      <Image
         src={images.seniorsWatchingTV}
         alt="Logo"
         width={200}
         height={150}
         layout='responsive'
       />  
      </div>
      <div className='col-span-2'>
      <Image
         src={images.seniorsPlayingChess}
         alt="Logo"
         width={200}
         height={150}
         layout='responsive'
       />  
      </div>

    </div>
    <div className='p-4 flex flex-col lg:flex-row'>
    <div>
    <Image
        src={images.seniorsEatingDinner}
         alt="Logo"
         width={300}
         height={200}
       /> 
       </div> 
       <div className=' p-2'> 
       <Image
        src={images.seniorsEatingDinner}
       alt="Logo"
       width={300}
       height={200}
     /> 
     </div>
     <div className='p-2'>
       <Image
         src={images.seniorsEatingDinner}
         alt="Logo"
         width={300}
         height={200}  
       /> 
       </div>
    </div>

    </div>
  )
}

export default RetirementLife
