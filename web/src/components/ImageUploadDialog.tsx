"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowLeft, ImageUp } from "lucide-react";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import { Button } from "./ui/button";

interface ImageUploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageUploadDialog({ open, onOpenChange }: ImageUploadDialogProps) {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    console.log(file);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-transparent border-none ring-0 shadow-none p-0 gap-3 sm:w-[500px] sm:max-w-[500px]"
      >
        <DialogHeader className="flex flex-row items-center gap-3">
          <ArrowLeft className="h-8 w-8 text-white cursor-pointer" onClick={() => onOpenChange(false)} />
          <DialogTitle className="flex-1 text-center text-white font-semibold text-2xl">
            Upload Image
          </DialogTitle>
          <div className="w-8 h-8" />
        </DialogHeader>

        <ImageUpload image={image} setImage={setImage} setFile={setFile} />

        <Button className="w-full py-[22px] text-[16px]" onClick={handleUpload}>
          <ImageUp className="size-5" strokeWidth={2} />
          Upload
        </Button>
      </DialogContent>
    </Dialog>
  );
}