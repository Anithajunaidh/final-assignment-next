
// import {  Field, Form, Formik } from 'formik';
// import Link from 'next/link';
// import  { useRouter } from 'next/router';
// import {  LoginvalidationSchema } from '@/utils/Validations';
// //import CustomButton from '@/components/CustomButton';
// import TextInput from '@/components/TextInput';
// //import '../styles/login.css';
// import CustomButtonNew from '@/components/button';
// import { ApolloError, useQuery} from '@apollo/client';
// import { LOGIN_USER } from '@/utils/gql-mutation';
// //import { useTheme } from '@/utils/ThemeContext';


// const LoginPage: React.FC = () => {
//   const router = useRouter();
//   //const { theme, toggleTheme } = useTheme();
//   // Define a validation schema
//   const initialValues = {
//     email: '',
//     password: '',
//   };

//   // const onSubmit = (values: { username: string; password: string }) => {
//   //   // You can add your authentication logic here
    
//   //   console.log('Form Values:', values);
//   //   // For example, you can make an API request to validate the credentials
//   //   router.push('/');
//   // };
//   const { data, loading, error } = useQuery(LOGIN_USER, {
//     variables: {
//       email: values.email,
//       password: values.password,
//     },
//   });

//   const onSubmit = async (values: { email: string; password: string }) => {
//     try {
//       const { data } = await loginUserQuery({
//         variables: {
//           email: values.email,
//           password: values.password,
//         },
//       });
  
//       const { accessToken, refreshToken } = data.loginUser;
  
//       // Save the tokens to local storage or a secure storage method
//       localStorage.setItem('accessToken', accessToken);
//       localStorage.setItem('refreshToken', refreshToken);
  
//       // Redirect the user to the authenticated page or perform other actions
//       router.push('/');
//     } catch (error: unknown) { // Define the type of the error variable
//       if (error instanceof ApolloError) {
//         // Handle Apollo Client-specific errors
//         console.error('Apollo Client Error:', error.message);
//       } else {
//         // Handle other types of errors
//         console.error('An error occurred:', error);
//       }
//     }
//   };
  

//   return (
//     <div className="flex h-screen flex-col items-center justify-center text-onNeutralBg">
//       {/* <button onClick={toggleTheme}>Toggle Theme</button>
//       <p>Current Theme: {theme}</p> */}
//     <h1 className="mb-4 text-4xl font-bold">Login</h1>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={LoginvalidationSchema}
//         onSubmit={onSubmit}
//       >
//         <Form className="rounded  p-6 shadow-md space-y-6">
//              <Field type="text" name="username" label="Username" as={TextInput} fullWidth />
//              <Field type="password" name="password" label="Password" as={TextInput} fullWidth />  
//           <CustomButtonNew
//             type="submit" buttonType='PRIMARY'
//           >Login</CustomButtonNew>

//         </Form>
//       </Formik>
//       <Link className="login-link text-onNeutralBg" href="/change-password">
//         Change Password
//       </Link>
//       <Link className="login-link text-onNeutralBg" href="/forgot-password">
//         Forgot Password
//       </Link>
//       <Link className="login-link text-onNeutralBg" href="/register">
//         Register
//       </Link>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LoginvalidationSchema } from '@/utils/Validations';
import TextInput from '@/components/TextInput';
import CustomButtonNew from '@/components/button';
import { useQuery } from '@apollo/client';

import { LOGIN_USER } from '@/utils/gql-query'; 

const LoginPage: React.FC = () => {
  const router = useRouter();

  const initialValues = {
    email: '', 
    password: '',
  };
  const { data, loading, error } = useQuery(LOGIN_USER);
  const onSubmit = async (values: { email: string; password: string }) => {
    console.log("button clicked");
    console.log('Form Values:', values);
    if (loading) {
    } else if (error) {
      console.error('Authentication failed:', error.message);
    } else {
      const { accessToken, refreshToken } = data.loginUser;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      router.push('/');
      console.log("login success")
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center text-onNeutralBg">
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
      <Link className="login-link text-onNeutralBg" href="/change-password">
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

