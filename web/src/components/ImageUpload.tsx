"use client";

import { useUploadImage } from "@/hooks/useUploadImage";
import { CloudUpload, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";


interface ImageUploadProps {
  image: string | null;
  setImage: (image: string | null) => void;
  setFile: (file: File | null) => void;
}

export function ImageUpload({ image, setImage, setFile }: ImageUploadProps) {
  const {
    isDragging, 
    fileInputRef, 
    handleFileInputChange, 
    handleDragOver, 
    handleDragLeave, 
    handleDrop, 
    handleRemoveImage 
  } = useUploadImage({ setImage, setFile });

  return (
    <div className={
      `rounded-xl h-[500px] p-2 flex-center bg-white transition-all 
      ${isDragging && "ring-3 ring-primary ring-offset-2 bg-secondary"}`
    }>
      {image ? (
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt="Selected"
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
          <div 
            className="absolute -top-5 -right-5 h-8 w-8 flex-center bg-black/50 text-white rounded-full hover:bg-black/70 cursor-pointer" 
            onClick={handleRemoveImage}
          >
            <X className="w-4 h-4 stroke-[3]" />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center justify-center gap-2 text-primary rounded-lg"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <CloudUpload className="w-20 h-20" />
          <p className="text-center font-medium text-lg">
            Drag and Drop an asset here
          </p>
          <p className="text-center">Or</p>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="bg-primary text-white p-[18px]"
          >
            Browse
          </Button>
        </div>
      )}
    </div>
  );
}