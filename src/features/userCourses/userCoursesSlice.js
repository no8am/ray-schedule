import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    courses: [],
    schedules: [],
    id: null,
}

const userCoursesSlice = createSlice({
    name: 'userCourses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
          state.courses = action.payload
          // console.log(state.courses)
        },
        unsetCourses: (state) => {
            state.courses = null
        },
        addCourse: (state, action) => {
            // something!
        },
        updateSection: (state, action) => {
          const { courseId, sectionType, section } = action.payload;
          const courseIndex = state.courses.findIndex(course => course.objectID === courseId);
          const courseCopy = [...state.courses];
          courseCopy[courseIndex] = {
            ...state.courses[courseIndex],
            activeSections: {
              ...state.courses[courseIndex].activeSections,
              [sectionType]: section
            }
          };
          state.courses = courseCopy;
          // state.courses[courseId].activeSections[sectionType] = section;
        },
        removeCourse: (state, action) => {
            state.courses = [...state.courses.filter(course => course.objectID !== action.payload)]
        },
        setSchedules: (state, action) => {
            state.schedules = action.payload
        },
        unsetSchedules: (state) => {
            state.schedules = []
        },
        addSchedule: (state, action) => {
            // something!
        },
        setAll: (state, action) => {
            state.courses = action.payload.courses
            state.schedules = action.payload.schedules
            state.id = action.payload.id
        },
        unsetAll: (state) => {
            state.courses = []
            state.schedules = []
            state.id = null
        },
        setId: (state, action) => {
            console.log("before")
            console.log(current(state))
            state.id = action.payload
            console.log("after")
            console.log(current(state))
        },
        unsetId: (state) => {
            state.id = null
        }
    }
});

export const {
    setCourses,
    unsetCourses,
    addCourse,
    removeCourse,
    updateSection,
    setSchedules,
    unsetSchedules,
    addSchedule,
    setAll,
    unsetAll,
    setId,
    unsetId,
} = userCoursesSlice.actions

export const selectCourses = state => state.userCourses.courses
export const selectSchedules = state => state.userCourses.schedules
export const selectId = state => state.userCourses.id
export const selectAll = state => state.userCourses

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail
// export const selectUid = state => state.user.uid

export default userCoursesSlice.reducer