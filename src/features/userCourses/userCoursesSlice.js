import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    courses: null,
    schedules: null,
}

const userCoursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload
        },
        unsetCourses: (state) => {
            state.courses = null
        },
        addCourse: (state, action) => {
            // something!
        },
        removeCourse: (state, action) => {
            // something!
        },
        setSchedules: (state, action) => {
            state.schedules = action.payload
        },
        unsetSchedules: (state) => {
            state.schedules = null
        },
        addSchedule: (state, action) => {
            // something!
        },
        unsetAll: (state) => {
            state.courses = null
            state.schedules = null
        }
    }
});

export const {
    setCourses,
    unsetCourses,
    addCourse,
    removeCourse,
    setSchedules,
    unsetSchedules,
    addSchedule,
    unsetAll,
} = userCoursesSlice.actions

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail
// export const selectUid = state => state.user.uid

export default userCoursesSlice.reducer