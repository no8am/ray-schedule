import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../features/darkMode/darkModeSlice'
import userReducer from '../features/user/userSlice'
import userCoursesReducer from '../features/userCourses/userCoursesSlice'

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    user: userReducer,
    userCourses: userCoursesReducer,
  },
})