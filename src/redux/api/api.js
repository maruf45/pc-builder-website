import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/https://buildyourbeast-backend.vercel.app/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/all-pc-components",
    }),
  }),
});
export const { useGetProductsQuery } = apiSlice;
