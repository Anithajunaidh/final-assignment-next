'use client'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login} from '@/store/userSlice';
import { Field, Form,  Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginvalidationSchema } from '@/utils/Validations';
import TextInput from '@/components/TextInput';
import CustomButtonNew from '@/components/button';
//import {useSuspenseQuery, } from '@apollo/experimental-nextjs-app-support/ssr';
import {useLoginMutation,} from '@/store/ApiSlice';

// export interface LoginResponse {
//   data: {
//     data:{
//     login: {
//       access_token: string;
//       user_type: string;
//       user_id:number,
//       platform_user_type:string,
//       logged_in_through:string
//     };
//   };
// }
// }

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const router=useRouter();
  const initialValues = {
    email: '', 
    password: '',
  };

 //const [loginMutation, { data }] = useLoginMutation();
 const [loginMutation]=useLoginMutation();

  // const onSubmit = async (values: { email: string; password: string }) => {
  //   try {
  //     const {data}:any = await loginMutation({ email: values.email, password: values.password });
  //     //  console.log(data)
  //      const { access_token, user_type } = data.data.login;
  //      dispatch(login({ access_token, user_type }));
  //     router.push('/resetpassword');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const { data }:any = await loginMutation({
         email:values.email, password:values.password
      });
      if (data && data.data.login) {
        const { access_token, user_type } = data.data.login;
        dispatch(login({ access_token, user_type }));
        router.push('/resetpassword');
      } 
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };
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

export default LoginPage;

