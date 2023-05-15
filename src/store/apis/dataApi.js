import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const dataApi = createApi({
    reducerPath: 'data',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost/3005'
    }),
    endpoints(builder){
        return {
            fetchData: builder.query({
                providesTags: (result, error, arg) =>{
                    const tags = result.map((data) =>{
                        return { type: 'Data', id: data.id}
                    })
                    tags.push({type:'DataM'});
                    return tags;
                },
                query: () => {
                    return {
                        url: '/data',
                        method: 'GET'
                    };
                }
            })
        }
    }
})

export const { useFetchDataQuery } = dataApi;
export { dataApi };