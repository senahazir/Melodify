import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'e7395f2ce3msh50aebe8627325f1p10154ejsnbfcc47492f10',
    'X-RapidAPI-Host': '',
  },
};

fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'e7395f2ce3msh50aebe8627325f1p10154ejsnbfcc47492f10');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
