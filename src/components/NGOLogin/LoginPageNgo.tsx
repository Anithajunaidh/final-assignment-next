import React from 'react'

type LoginProps = {
  children: React.ReactNode;
};

const LoginPageNgo = (props:LoginProps) => {

  
  return (
    <div className='w-full h-screen flex justify-center items-center bg-primarygreen'>
      {props.children}
    </div>
  )
}

export default LoginPageNgo
