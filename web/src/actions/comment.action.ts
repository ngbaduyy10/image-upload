"use server";

import { fetchApi } from "@/utils/api";
import { ApiResponse } from "@/dto/apiResponse.dto";

export async function createComment(image_id: string, content: string): Promise<ApiResponse<any>> {
  const response = await fetchApi("/comments", {
    method: "POST",
    body: { image_id, content },
  });
  return response;
}