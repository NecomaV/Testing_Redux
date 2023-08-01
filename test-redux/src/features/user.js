import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value : {
            name: '', 
            age: 0, 
            email: ''
        }
    },
    reducers: {
        userLogin: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { userLogin } = userSlice.actions

export default userSlice.reducer;