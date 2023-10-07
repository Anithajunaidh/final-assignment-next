import Doctors from '@/components/Doctors'
import EmpowerWomen from '@/components/LandingPage/EmpowerWomen'
import Hero from '@/components/LandingPage/Hero'
import LadyOftheRoad from '@/components/LandingPage/LadyOftheRoad'
import OccupationalCenter from '@/components/LandingPage/OccupationalCenter'
import ServingElder from '@/components/LandingPage/ServingElder'
import NursingHome from '@/components/NursingHome'
import ServingElder2 from '@/components/ServingElder2'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl'>
<Hero/>
<LadyOftheRoad/>
<OccupationalCenter/>
<EmpowerWomen/>
<ServingElder/>
<Doctors/>
<ServingElder2/>
<NursingHome/>    
    </div>
  )
}

export default LandingPage  

