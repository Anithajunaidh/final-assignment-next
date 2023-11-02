import Doctors from '@/components/LandingPage/Doctors'
import EmpowerWomen from '@/components/LandingPage/EmpowerWomen'
import Hero from '@/components/LandingPage/Hero'
import LadyOftheRoad from '@/components/LandingPage/LadyOftheRoad'
import OccupationalCenter from '@/components/LandingPage/OccupationalCenter'
import ServingElder from '@/components/LandingPage/ServingElder'
import NursingHome from '@/components/LandingPage/NursingHome'
import ServingElder2 from '@/components/LandingPage/ServingElder2'
import React from 'react'
import RetirementLife from '@/components/LandingPage/RetirementLife'
import Campaigns from '@/components/LandingPage/Campaigns'
import DayCenter from '@/components/LandingPage/DayCenter'
import HomeNurse from '@/components/LandingPage/HomeNurse'
// import RetirementLife from '@/components/LandingPage/RetirementLife'

const LandingPage = () => {
  return (
    <div className='mx-auto max-w-screen-xl box-border'>
<Hero/>
<LadyOftheRoad/>
<OccupationalCenter/>
<EmpowerWomen/>
<ServingElder/>
<DayCenter/>
<Doctors/>
<ServingElder2/>
<NursingHome/> 
<RetirementLife/>
<Campaigns/>
<HomeNurse/>
    </div>
  )
}

export default LandingPage  

