import { configureStore } from "@reduxjs/toolkit";
import userReducer from '@/store/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import  {usersApi}  from "./ApiSlice";

// Create a configuration for persisting the user slice
const userPersistConfig = {
  key: 'user', // Key under which the user data will be stored in storage
  storage, // The storage medium you want to use (e.g., local storage)
  whitelist: ['tokens', 'role'], // Only persist these properties
 // blacklist: ['role'], 
};

// Create a persisted reducer for the user slice
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
    reducer: {
        // user: userReducer
        user: persistedUserReducer,
        [usersApi.reducerPath]: usersApi.reducer, 
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware), 
})
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
// export default store;
export { store, persistor };