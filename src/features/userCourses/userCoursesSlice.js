import { createSlice, current } from '@reduxjs/toolkit'

let initialState;
if (typeof window !== 'undefined' && localStorage.getItem('userCourses')) {
  initialState = JSON.parse(localStorage.getItem('userCourses'))
} else{
  initialState = {
    courses: [],
    schedules: null,
}
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
        shiftCourseUp: (state, action) => {
            let coursesCopy = [...state.courses]
            let cID = coursesCopy.findIndex(c => c.objectID == action.payload)
            if (cID == 0) {
                return
            }
            let removed = coursesCopy.splice(cID, 1)
            coursesCopy.unshift(removed[0])
            state.courses = coursesCopy
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
    updateSection,
    setSchedules,
    shiftCourseUp,
    unsetSchedules,
    addSchedule,
    unsetAll,
} = userCoursesSlice.actions

export const selectCourses = state => state.userCourses.courses
export const selectSchedules = state => state.userCourses.schedules

// export const selectUserName = state => state.user.userName
// export const selectUserEmail = state => state.user.userEmail
// export const selectUid = state => state.user.uid

export default userCoursesSlice.reducer