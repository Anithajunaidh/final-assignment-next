import React from 'react'
import '@/styles/global.css';
import Image from 'next/image';
import LogoutButton from './LogoutButton';

type DashboardProps = {
  children: React.ReactNode;
};

const UserDashboard = (props:DashboardProps) => {
  return (
    <div className='reset h-screen bg-primarygreen'>
      <div className='flex justify-between p-3  w-full h-1/5 bg-primarygreen'>
        <div>
          <Image
           src='/assets/images/landing-page/logo.svg'
           alt="image"
           width={150}
           height={100}
           className='pt-3 pl-3'
           />
        </div>   
        <div className='w-14 h-14 pt-4 pl-4 text-white rounded-full relative top-10 right-10 bg-secondarygreen'>
           AD
        </div>
      </div>
      <div className='flex  h-4/5'>
        <div className='w-1/4 p-4 flex flex-col justify-between'>
          <div className=' bg-primarygreen text-white'>
            User Login
          </div>
          <div className='relative bottom-0 left-10'>
            <LogoutButton/>
          </div>
        </div>
        <div className='w-3/4 p-5 bg-white rounded-tl-2xl'>
          {props.children}
        </div>
      </div>
     
     
    </div>
  )
}

export default UserDashboard
