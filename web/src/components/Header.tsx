"use client";

import { useState } from "react";
import { ImageUploadDialog } from "./ImageUploadDialog";
import { Button } from "./ui/button";
import { ImageUp } from "lucide-react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-border px-4 py-5 flex-between">
        <h1 className="text-xl font-semibold">Image Uploader</h1>
        <Button className="py-5" onClick={() => setOpen(true)}>
          <ImageUp className="size-5" strokeWidth={2} />
          Upload Image
        </Button>
      </header>
      
      <ImageUploadDialog open={open} onOpenChange={setOpen} />
    </>
  );
}