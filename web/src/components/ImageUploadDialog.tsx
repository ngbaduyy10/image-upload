"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { ArrowLeft, ImageUp } from "lucide-react";
import { useState } from "react";
import { ImageUpload } from "./ImageUpload";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { uploadImage } from "@/actions/image.action";
import { useSWRConfig } from "swr";

interface ImageUploadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageUploadDialog({ open, onOpenChange }: ImageUploadDialogProps) {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();

  const handleUpload = async () => {
    setLoading(true);
    try {
      if (!file) {
        toast.error("Please select an image to upload");
        return;
      }
      const formData = new FormData();
      formData.append("file", file);

      const response = await uploadImage(formData);
      if (!response.success) {
        toast.error("Failed to upload image");
      } else {
        await mutate("/api/images");
        toast.success("Image uploaded successfully");
        onOpenChange(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setImage(null);
        setFile(null);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload image");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="bg-transparent border-none ring-0 shadow-none p-0 gap-3 sm:w-[500px] sm:max-w-[500px]"
      >
        <DialogHeader className="flex flex-row items-center gap-3">
          <ArrowLeft className="h-8 w-8 text-white cursor-pointer" onClick={() => onOpenChange(false)} />
          <div className="flex-1 text-center">
            <DialogTitle className="text-white font-semibold text-2xl">Upload Image</DialogTitle>
            <DialogDescription className="sr-only">
              Select an image file and upload it.
            </DialogDescription>
          </div>
          <div className="w-8 h-8" />
        </DialogHeader>

        <ImageUpload image={image} setImage={setImage} setFile={setFile} />

        <Button className="w-full py-[22px] text-[16px]" onClick={handleUpload} disabled={loading}>
          <ImageUp className="size-5" strokeWidth={2} />
          {loading ? "Uploading..." : "Upload"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}