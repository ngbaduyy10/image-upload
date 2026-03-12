import Image from "@/models/image";
import { ImageOff } from "lucide-react";
import { ImageCard } from "./ImageCard";

interface PreviewProps {
  images: Image[];
}

export function Preview({ images }: PreviewProps) {
  return (
    <div className="page-container mt-3 px-2">
      <h1 className="text-3xl font-bold leading-[1.5]">Image Uploaded</h1>
      <p className="text-muted-foreground text-lg leading-tight">Preview of all images uploaded</p>

      {images.length > 0 ? (
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