"use client";

import { MessageCircle } from "lucide-react";
import NextImage from "next/image";
import Image from "@/models/image";
import { useState } from "react";
import { ImageDialog } from "./ImageDialog";

interface ImageCardProps {
  image: Image;
}

export function ImageCard({ image }: ImageCardProps) {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setSelectedImage(image);
    setOpen(true);
  }

  return (
    <>
      <div className="rounded-xl p-4 bg-white cursor-pointer" onClick={handleImageClick}>
        <div className="relative w-full h-[500px] rounded-xl bg-background-secondary">
          <NextImage 
            src={image.url} 
            alt={image.id}
            fill 
            sizes="100vw" 
            className="object-contain" 
          />
        </div>
        <div className="flex items-center gap-2 mt-4">
          <MessageCircle className="w-5 h-5 text-muted-foreground" />
          <p className="text-muted-foreground text-lg leading-tight">{image.comments.length} comments</p>
        </div>
      </div>

      {selectedImage &&
        <ImageDialog 
          image={selectedImage} 
          open={open} 
          onOpenChange={setOpen} 
        />
      }
    </>
  );
}