import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
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