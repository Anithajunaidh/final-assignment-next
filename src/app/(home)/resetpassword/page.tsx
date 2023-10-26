"use client";
import React from "react";
import { EmailvalidationSchema } from "@/utils/Validations";
import { Formik, Form, Field } from "formik";
import TextInput from "@/components/TextInput";
import CustomButtonNew from "@/components/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRegenerateAccessTokenMutation } from "@/store/ApiSlice";

const ForgotPasswordPage: React.FC = () => {
  const router = useRouter();
  const initialValues = {
    email: "",
  };
  const [newAccessToken] = useRegenerateAccessTokenMutation();
  const onSubmit =async () => {
    console.log("regenerating token");
    try {
      const persistedUserData = await localStorage.getItem('persist:user');
        const userData = JSON.parse(persistedUserData);
        const currentAccessToken  = userData.accessToken.replace(/^"|"$/g, '');
        console.log(currentAccessToken )
        console.log(typeof(currentAccessToken))
      const {data}= newAccessToken({
      
          token: currentAccessToken, 
        
      });
      if (data && data.generateAccessTokenFromToken) {
        const {new_access_token} = data.generateAccessTokenFromToken;
        console.log(new_access_token);
      } 
    } catch (error) {
      console.error('Auth error:', error);
    }
    //console.log("Form Values:", values);
   // router.push("/loginpage");
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Reset Password</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={EmailvalidationSchema}
        onSubmit={onSubmit}
      >
        <Form className="rounded bg-white p-6 shadow-md space-y-6">
          <Field
            type="email"
            name="email"
            label="Email"
            as={TextInput}
            fullWidth
          />

          {/* Reset Password Button */}
          <CustomButtonNew type="submit" buttonType="PRIMARY" onClick={onSubmit}>
            Reset Password
          </CustomButtonNew>
        </Form>
      </Formik>
      <Link className="login-link text-onNeutralBg" href="/loginpage">
        Remember Password?
      </Link>
    </div>
  );
};

export default ForgotPasswordPage;
