import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechkeymart-server.vercel.app/api",
  }),
  tagTypes: ["Products", "filterProducts", "Product"],
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

    getFilterProduct: builder.query({
      query: (query) => {
        const params = new URLSearchParams();
        if (query?.search) {
          params.append("search", query.search);
        }
        if (query?.sortBy) {
          params.append("sortBy", query.sortBy);
        }
        if (query?.minPrice) {
          params.append("minPrice", query.minPrice);
        }
        if (query?.maxPrice) {
          params.append("maxPrice", query.maxPrice);
        }

        return {
          url: `/product`,
          method: "GET",
          params,
        };
      },
      providesTags: ["filterProducts"],
    }),

    // Get Product By Id
    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
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
      invalidatesTags: ["Products", "filterProducts", "Product"],
    }),

    // delete a product
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          method: "DELETE",
          url: `/product/${id}`,
        };
      },
      invalidatesTags: ["Products", "filterProducts", "Product"],
    }),
  }),
});

export const {
  useGetProductQuery,
  useUpdateProductMutation,
  useAddProductMutation,
  useDeleteProductMutation,
  useGetFilterProductQuery,
  useGetProductByIdQuery,
} = baseApi;
