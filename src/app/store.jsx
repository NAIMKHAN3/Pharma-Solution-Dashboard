import { configureStore } from "@reduxjs/toolkit";
import customersSlice from "./features/customers/customersSlice";
import { apiSlice } from "./features/api/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        customers: customersSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;