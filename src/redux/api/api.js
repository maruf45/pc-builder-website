import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/http://localhost:5000/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/all-pc-components",
    }),
  }),
});
export const { useGetProductsQuery } = apiSlice;