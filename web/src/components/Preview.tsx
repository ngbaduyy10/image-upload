"use client";

import Image from "@/models/image";
import { ImageOff } from "lucide-react";
import { ImageCard } from "./ImageCard";
import { ApiResponse } from "@/dto/apiResponse.dto";
import useSWR from "swr";
import { ImageCardSkeleton } from "./ImageCardSkeleton";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return response.json();
};

export function Preview() {
  const { data, isLoading } = useSWR<ApiResponse<Image[]>>(
    "/api/images",
    fetcher
  );
  const images = data?.data ?? [];

  return (
    <div className="page-container mt-3 px-2">
      <h1 className="text-3xl font-bold leading-[1.5]">Image Uploaded</h1>
      <p className="text-muted-foreground text-lg leading-tight">Preview of all images uploaded</p>

      {isLoading ? (
        <div className="space-y-5 my-4">
          <ImageCardSkeleton />
        </div>
      ) : images.length > 0 ? (
        <div className="space-y-5 my-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      ) : (
        <div className="h-[400px] flex-center flex-col gap-2 mt-4 bg-white rounded-xl">
          <ImageOff className="w-20 h-20" />
          <p className="text-center font-medium text-lg">No images uploaded</p>
        </div>
      )}
    </div>
  );
}