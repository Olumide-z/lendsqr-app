import { createSlice } from "@reduxjs/toolkit";
import userData from '../data.json'

const initialState = {
    users: userData.slice(0, 100),
    status: 'pending'
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       activeStatus: (state) => {
           state.status = 'active'
       },
       blacklistStatus: (state) => {
        state.status = 'blacklist'
       },

    }
})

export const { blacklistStatus, activeStatus } = userSlice.actions;

export default userSlice.reducer;