import Doctors from '@/components/Doctors'
import EmpowerWomen from '@/components/LandingPage/EmpowerWomen'
import Hero from '@/components/LandingPage/Hero'
import ImageGallery from '@/components/LandingPage/ImageGallery'
import LadyOftheRoad from '@/components/LandingPage/LadyOftheRoad'
import OccupationalCenter from '@/components/LandingPage/OccupationalCenter'
import ServingElder from '@/components/LandingPage/ServingElder'
import NursingHome from '@/components/LandingPage/NursingHome'
import ServingElder2 from '@/components/LandingPage/ServingElder2'
import React from 'react'
import LogoutButton from '@/app/components/LogoutButton'
import Sidebar from '@/components/Sidebar'
// import RetirementLife from '@/components/LandingPage/RetirementLife'

const LandingPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl box-border'>
<Hero/>
<LadyOftheRoad/>
<OccupationalCenter/>
<EmpowerWomen/>
<ServingElder/>
<Doctors/>
<ServingElder2/>
<NursingHome/> 
{/* <RetirementLife/>  */}
<LogoutButton/>
<Sidebar>Hello</Sidebar>
    </div>
  )
}

export default LandingPage  

