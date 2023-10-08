import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
   reducerPath: 'articleApi',
   baseQuery: fetchBaseQuery({ baseUrl: '' }),
   endpoints: (builder) => ({}),
});

export const {} = articleApi;
