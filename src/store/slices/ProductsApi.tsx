import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { InterfaceProduct } from '../../type/type';

export const productsApi = createApi({
  reducerPath: 'ProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/products',
  }),
  endpoints: (build) => ({
    getProducts: build.query<InterfaceProduct[], void>({
      query: () => ``,
    }),
    getProduct: build.query<InterfaceProduct, string>({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useGetProductQuery } = productsApi;
