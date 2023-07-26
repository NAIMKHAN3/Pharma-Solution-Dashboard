import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getCustomers: builder.query({
            query: () => ({
                url: "/users"
            }),
        }),
    }),
})

export const {useGetCustomersQuery} = apiSlice;