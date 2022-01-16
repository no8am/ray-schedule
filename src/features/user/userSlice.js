import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
            state.uid = action.payload.uid
        },
        unsetActiveUser: (state) => {
            state.userName = null
            state.userEmail = null
            state.uid = null
        }
    }
});

export const {
    setActiveUser,
    unsetActiveUser
} = userSlice.actions

export const selectUserName = state => state.user.userName
export const selectUserEmail = state => state.user.userEmail
export const selectUid = state => state.user.uid

export default userSlice.reducer