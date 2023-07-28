import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
    users: []
}

const customersSlilce = createSlice({
    name: "customers",
    initialState,
    reducers: {
        setUsers: (state, { payload }) => {
            state.users = payload
        },
        removeUser: (state, {payload}) => {
            const users = state.users.filter(user => user.id !== payload)
            console.log(users)
            state.users = users
        }
    }
})

export const {setUsers, removeUser} = customersSlilce.actions;

export default customersSlilce.reducer;