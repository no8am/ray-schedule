import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import darkModeReducer from '../features/darkMode/darkModeSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    darkMode: darkModeReducer,
  },
})