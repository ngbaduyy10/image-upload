"use client";

import { Header } from "@/components/Header";
import { ApiResponse } from "@/dto/apiResponse.dto";
import Image from "@/models/image";
import useSWR from "swr";

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch images");
  }

  return response.json();
};

export default function Home() {
  const { data } = useSWR<ApiResponse<Image[]>>(
    "/api/images",
    fetcher
  );

  console.log(data);

  return (
    <div className="flex flex-col h-screen">
      <Header />
    </div>
  );
}
