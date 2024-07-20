import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../../types";

type QueryParams = {
  search?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: "asc" | "desc";
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechkeymart-server.vercel.app/api",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    // add new product
    addProduct: builder.mutation({
      query: (data) => {
        return {
          method: "POST",
          url: `/product`,
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),

    // get all product
    getProduct: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["Products"],
    }),
    // get filter product
    getFilteredProduct: builder.query<Product[], QueryParams>({
      query: ({
        search = "",
        brand = "",
        minPrice = 0,
        maxPrice = 1000,
        sortBy = "asc",
      }) => ({
        url: "/products",
        params: { search, brand, minPrice, maxPrice, sortBy },
      }),
      providesTags: ["Products"],
    }),

    // update a product
    updateProduct: builder.mutation({
      query: ({ data, id }) => {
        return {
          method: "PUT",
          url: `/product/${id}`,
          body: data,
        };
      },
      invalidatesTags: ["Products"],
    }),

    // delete a product
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/product/${id}`,
        };
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetFilterdProductQuery,
} = baseApi;
