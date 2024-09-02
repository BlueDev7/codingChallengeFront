import { apiSlice } from "../../app/api";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (Builder) => ({
    //Get List of products
    getProducts: Builder.query({
      query: () => ({
        url: "/products",
      }),
    }),

    //Get product by Id
    getProductById: Builder.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
