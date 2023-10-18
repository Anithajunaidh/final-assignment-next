'use client'
import React from 'react';

import { useDispatch } from 'react-redux';
import { login,} from '@/store/userSlice';
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
   const graphqlEndpoint = 'https://ngobackv.caprover2.innogenio.com/graphql'; 

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      const response = await fetch(graphqlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          mutation login(
            $email: String!
            $password: String!            
            ){        
           login(        
              email: $email        
              password: $password            
              ){        
                  access_token        
                  user_id        
                  user_type        
                  platform_user_type        
                  logged_in_through       
              }       
        }
          `,
          variables: {
            email: values.email,
            password: values.password,
          },
        }),
      });
  
     if (response.ok) {
        const data = await response.json();
        // for (let key in data) {
        //   if (data.hasOwnProperty(key)) {
        //     console.log(data[key]);
        //   }
        // }
        const { access_token, user_type } = data.data.login;
        dispatch(login({access_token,user_type}));
        router.push('/resetpassword')
       } else {
        console.error('Authentication failed');
       }
    } catch (error) {
      console.error('Authentication error:', error);
    }  
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

