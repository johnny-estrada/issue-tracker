import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "./authSlice";

const baseQuery = fetchBaseQuery({ baseUrl: "" });

async function baseQueryWithAuth(args, api, extra) {
  try {
    const result = await baseQuery(args, api, extra);

    if (result.error && result.error.status === 401) {
      api.dispatch(logout());
    }
    return result;
  } catch (error) {
    return { error };
  }
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["User", "Project", "Task", "Attachment"],
  endpoints: (_builder) => ({}),
});
