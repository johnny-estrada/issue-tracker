import { apiSlice } from "./apiSlice";

const TASK_URL = "/api/tasks";

export const tasksApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTask: builder.query({
      query: () => ({
        url: `${TASK_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getTaskDetails: builder.query({
      query: (taskId) => ({
        url: `${TASK_URL}/${taskId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createTask: builder.mutation({
      query: (data) => ({
        url: `${TASK_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (data) => ({
        url: `${TASK_URL}/${data.taskId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (taskId) => ({
        url: `${TASK_URL}/${taskId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTaskQuery,
  useGetTaskDetailsQuery,
  useUpdateTaskMutation,
  useCreateTaskMutation,
  useDeleteTaskMutation,
} = tasksApiSlice;
