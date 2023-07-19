// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IFood {
  id: number;
  name: string;
  oldPrice: number;
  newPrice: number;
  type: string;
  path: string;
  description: string;
  addition: string;
  comment: string;
}
export const foodApi = createApi({
  reducerPath: "foodApi",
  tagTypes: ["Food"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3030" }),
  endpoints: (builder) => ({
    getFood: builder.query<IFood[], string>({
      query: () => ({
        url: `/food`,
      }),
      providesTags: ["Food"],
    }),
    createFood: builder.mutation<IFood, Partial<IFood>>({
      query: (body) => ({
        url: `/food`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Food"],
    }),
    updateFood: builder.mutation<IFood, Partial<IFood>>({
      query: (body: IFood) => ({
        url: `/food/${body.id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Food"],
    }),
    deleteFood: builder.mutation<IFood, number>({
      query: (id: number) => ({
        url: `/food/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Food"],
    }),
    getFoodById: builder.query<IFood, number>({
      query: (id: number) => ({
        url: `/food/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: "Food", id }],
    }),
  }),
});

export const { useGetFoodQuery } = foodApi;
