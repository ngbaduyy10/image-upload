import { fetchApi } from "@/utils/api";
import { NextResponse } from "next/server";
import Image from "@/models/image";
import { ApiResponse } from "@/dto/apiResponse.dto";

export async function GET() {
  try {
    const response: ApiResponse<Image[]> = await fetchApi('/images');
    
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}