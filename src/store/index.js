import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import usaDataReducer from './products'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usaData: usaDataReducer
  },
})