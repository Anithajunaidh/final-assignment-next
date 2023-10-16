'use client'
import React from 'react';

import { useDispatch } from 'react-redux';
import { setUserType } from '@/redux/features/users/userSlice';

import { Field, Form,  Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginvalidationSchema } from '@/utils/Validations';
import TextInput from '@/components/TextInput';
import CustomButtonNew from '@/components/button';


const loginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router=useRouter();
  const initialValues = {
    email: '', 
    password: '',
  };
  const onSubmit = async (values: { email: string; password: string }) => {
    const userType = 'user';
    dispatch(setUserType(userType));
    router.push('/resetpassword')
  }
  return (
    <div className="flex flex-col items-center justify-center text-onNeutralBg">
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
      <Link className="login-link text-onNeutralBg" href="/resetpassword">
        Change Password
      </Link>
      <Link className="login-link text-onNeutralBg" href="/forgot-password">
        Forgot Password
      </Link>
      <Link className="login-link text-onNeutralBg" href="/register">
        Register
      </Link>
    </div>
  );
};

export default loginPage;

