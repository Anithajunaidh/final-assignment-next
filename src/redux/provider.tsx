'use client'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from '@/redux/store';
import { Provider } from 'react-redux';


const ReduxProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
    </Provider>
  )
}

export default ReduxProvider
