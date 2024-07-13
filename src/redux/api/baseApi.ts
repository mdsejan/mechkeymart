import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://mechkeymart-server.vercel.app/api",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
      providesTags: ["Products"],
    }),
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
  }),
});

export const { useGetProductQuery, useUpdateProductMutation } = baseApi;
