import { usersApi } from "./ApiSlice";


export const searchSlice = usersApi.injectEndpoints({
  endpoints: (builder) => ({
    searchItems: builder.query({
      query: (query) => ({
        url: " ",
        method: 'POST',
        body: {      
          query: query.queryVariable,
          variables: query.variables,
        },
      }),
    },
    ),
    // ... other endpoints
  }),
});
export const useSearchItemsQuery = searchSlice.endpoints.searchItems.useQuery; 




