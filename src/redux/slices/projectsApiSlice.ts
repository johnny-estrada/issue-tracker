import { apiSlice } from "./apiSlice";

const PROJECT_URL = '/api/projects'

export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
          query: () => ({
            url: `${PROJECT_URL}`,
          }),
          keepUnusedDataFor: 5,
        }),
      }),
})

export const {useGetProjectsQuery} = projectsApiSlice;