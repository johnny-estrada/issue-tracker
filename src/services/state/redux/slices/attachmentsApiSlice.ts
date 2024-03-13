import { apiSlice } from "./apiSlice";

const ATTACHMENT_URL = "/api/attachments";

export const attachmentsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAttachment: builder.query({
      query: () => ({
        url: `${ATTACHMENT_URL}`,
      }),
      keepUnusedDataFor: 5,
    }),
    createAttachment: builder.mutation({
      query: (data) => ({
        url: `${ATTACHMENT_URL}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Attachment"],
    }),
  }),
});

export const { useGetAttachmentQuery, useCreateAttachmentMutation } =
  attachmentsApiSlice;
