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

//might affect performance since this constantly saves course info to local storage
store.subscribe(() => {
  //localStorage.setItem('darkMode', JSON.stringify(store.getState().darkMode)); no need to save darkMode?
  //localStorage.setItem('user', JSON.stringify(store.getState().user)); we haven't had user yet
  localStorage.setItem('userCourses', JSON.stringify(store.getState().userCourses)); //save courses to local storage
  localStorage.setItem('darkMode', JSON.stringify(store.getState().darkMode));
  // console.log(localStorage)
});