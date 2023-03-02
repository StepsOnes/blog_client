import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuth: false,
    user: null
}

 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeAuth(state, action) {
            state.isAuth = action.payload
        },
        addUser(state, action) {
            state.user = action.payload
        },
        goOut(state) {
            state.isAuth = false
        }
    },
})

export default authSlice.reducer
export const { changeAuth, addUser, goOut } = authSlice.actions;
