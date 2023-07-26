import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    users: []
}

const customersSlilce = createSlice({
    name: "customers",
    initialState,
    reducers: {}
})


export default customersSlilce.reducer;