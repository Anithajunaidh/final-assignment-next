'use client'
import React from 'react'
import Link from 'next/link';
import { useRouter} from 'next/navigation';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '@/components/TextInput';
import CustomButtonNew from '@/components/button';

const LoginPage = () => {

let router = useRouter();
let initialValues = {
    email: '',
  };
  
  let LoginvalidationSchema=Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
   
  })
  
  let onSubmit=(values: { email: string})=>{
   console.log('form data',values)
   router.push('/CenterUser');
   
  }

  return (
  <div className="bg-white flex  flex-col items-center justify-center text-onNeutralBg">
      <h1 className="mb-4 text-4xl font-bold">Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginvalidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded p-6 shadow-md space-y-6">
          <Field type="text" name="email" label="Email" as={TextInput} fullWidth />
          <Field type="password" name="password" label="Password" as={TextInput} fullWidth />
          <CustomButtonNew type="submit" buttonType="PRIMARY">
            Login
          </CustomButtonNew>
        </Form>
      </Formik>
      <Link className="login-link text-onNeutralBg" href="/ChangePassword">
        Change Password
      </Link>
      {/* <Link className="login-link text-onNeutralBg" href="/forgot-password">
        Forgot Password
      </Link>
      <Link className="login-link text-onNeutralBg" href="/register">
        Register
      </Link> */}
    </div>
  )
}

export default LoginPage;


