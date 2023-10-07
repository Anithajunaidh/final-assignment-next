// userSlice.ts

//import { createSlice } from '@reduxjs/toolkit';

// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     isAuthenticated: false,
//     accessToken: '', 
//     refreshToken: '',
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isAuthenticated = true;
//       state.accessToken = action.payload.accessToken;
//       state.refreshToken = action.payload.refreshToken;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//       state.accessToken = '';
//       state.refreshToken = '';
//     },
//   },
// });

// export const { login, logout } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    accessToken: '',
    refreshToken: '',
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    logout: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
      };
    },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
