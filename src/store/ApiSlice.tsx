import { createApi,} from '@reduxjs/toolkit/query/react';
//import { useDispatch } from 'react-redux';
import { LOGIN_MUTATION, } from '@/Api/LoginMutation';
import baseQueryWithReauth from './ReAuth';
import { REGENERATE_TOKEN } from '@/Api/RegenerateToken';

export const usersApi=createApi({
reducerPath:'usersApi',
  baseQuery:baseQueryWithReauth,
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
  }), 
  regenerateAccessToken:builder.mutation({
    query:({token})=>{
      return{
        url:'',
        method:'POST',
        body:{
          query:REGENERATE_TOKEN.query,
          variables:{
            token
          },
        }
      }
    }
  }),
 }),
});
export const{useLoginMutation,useRegenerateAccessTokenMutation}=usersApi;