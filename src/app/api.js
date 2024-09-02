import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = process.env.REACT_APP_API_URL;
export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),

  endpoints: () => ({}),
});

export const { reducer, middleware } = apiSlice;
