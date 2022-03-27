import { createSlice } from '@reduxjs/toolkit'

// let initialState;
// if (typeof window !== 'undefined' && localStorage.getItem('darkMode')) {
//   initialState = JSON.parse(localStorage.getItem('darkMode'))
// } else {
//   initialState = {
//     value: true,
//   }
// }
const initialState = {
  value: true,
}

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    enable: (state) => {
      state.value = true
    },
    disable: (state) => {
      state.value = false
    },
    toggle: (state) => {
      state.value = !state.value
    },
    setTo: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { enable, disable, toggle, setTo } = darkModeSlice.actions

export default darkModeSlice.reducer