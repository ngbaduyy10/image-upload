"use server";

import { fetchApi } from "@/utils/api";
import { ApiResponse } from "@/dto/apiResponse.dto";

export async function uploadImage(formData: FormData): Promise<ApiResponse<any>> {
  const response = await fetchApi("/images", {
    method: "POST",
    body: formData,
  });
  return response;
}