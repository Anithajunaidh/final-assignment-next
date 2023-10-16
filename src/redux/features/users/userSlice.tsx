// // userSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // Define the type for the user state
// interface UserState {
//   userType: string;
// }

// const initialState: UserState = {
//   userType: '',
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserType: (state, action: PayloadAction<string>) => {
//       state.userType = action.payload;
//     },
//   },
// });

// export const { setUserType } = userSlice.actions;
// export const selectUserType = (state: { user: UserState }) => state.user.userType;

// export default userSlice.reducer;

import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState} from '@/redux/store';
//const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
  userType:''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserType: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
  },
});
export const { setUserType } = userSlice.actions;
export const selectUserType = (state:RootState) => state.user.userType;
// export const selectAllUsers = (state: RootState) => state.users;
export default userSlice.reducer;