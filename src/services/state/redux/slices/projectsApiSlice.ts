import { apiSlice } from "./apiSlice";

const PROJECT_URL = "/api/projects";

export const projectsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: `${PROJECT_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProjectDetails: builder.query({
      query: (projectId) => ({
        url: `${PROJECT_URL}/${projectId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createProject: builder.mutation({
      query: () => ({
        url: `${PROJECT_URL}`,
        method: "POST",
      }),
      invalidatesTags: ["Project"],
    }),
    updateProject: builder.mutation({
      query: (data) => ({
        url: `${PROJECT_URL}/${data.projectId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Project"],
    }),
    deleteProject: builder.mutation({
      query: (projectId) => ({
        url: `${PROJECT_URL}/${projectId}`,
        method: "DELETE",
      }),
      providesTags: ["Project"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useGetProjectDetailsQuery,
  useCreateProjectMutation,
  useUpdateProjectMutation,
  useDeleteProjectMutation,
} = projectsApiSlice;
