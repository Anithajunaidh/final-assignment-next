import { createApi, fetchBaseQuery,} from '@reduxjs/toolkit/query/react';
//import { useDispatch } from 'react-redux';
import { LOGIN_MUTATION, } from '@/graphql/LoginMutation';

export interface LoginResponse {
  data: {
    login: {
      access_token: string;
      user_type: string;
      user_id:number,
      platform_user_type:string,
      logged_in_through:string
    };
  };
}
export const usersApi=createApi({
reducerPath:'usersApi',
  baseQuery:fetchBaseQuery({baseUrl:"https://ngobackv.caprover2.innogenio.com/graphql"}),
  endpoints:(builder)=>({
    login:builder.mutation({
query:({email,password})=>{
  return{
    url:'',
    method:'POST',
    body:{
       query:LOGIN_MUTATION.query,
       variables:{
        email,
        password
        },
      }
    }
   },
  //  onQueryStarted: async () => {
  //   dispatch(setLoading(true));
  // },
  // onQueryFailed: async (error) => {
  //   dispatch(setError(error.message));
  // },
  }),
 }),
});
export const{useLoginMutation}=usersApi