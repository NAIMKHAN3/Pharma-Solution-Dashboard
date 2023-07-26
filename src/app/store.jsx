import { configureStore } from "@reduxjs/toolkit";
import customersSlice from "./features/customers/customersSlice";

const store = configureStore({
    reducer: {
        customers: customersSlice
    }
})

export  default store;