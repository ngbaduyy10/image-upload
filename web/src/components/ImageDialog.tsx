import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import Image from "@/models/image";
import NextImage from "next/image";
import { CommentInput } from "./CommentInput";

interface ImageDialogProps {
  image: Image;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImageDialog({ image, open, onOpenChange }: ImageDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="w-[90vw] max-w-[90vw] sm:w-[90vw] sm:max-w-[90vw] lg:w-[880px] lg:max-w-[880px] h-[80vh] border-none p-0 gap-0 overflow-hidden"
      >
        <DialogTitle className="sr-only">Post Modal</DialogTitle>
        <div className="flex flex-col sm:flex-row h-full min-h-0">
          <div className="w-full sm:w-2/3 h-full bg-background-secondary relative overflow-hidden">
            <NextImage 
              src={image.url} 
              alt={image.id} 
              fill sizes="100vw" 
              className="object-contain" 
            />
          </div>

          <div className="w-full sm:w-1/3 h-full max-h-full flex flex-col bg-white overflow-hidden">
            <div className="max-sm:hidden p-4 flex items-center justify-end border-b border-border flex-shrink-0">
              <div
                onClick={() => onOpenChange(false)}
                className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary flex-center text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4 text-primary" />
              </div>
            </div>

            <div className="flex-1 flex flex-col px-4 py-1 overflow-y-auto main-scrollbar">
              <p className="text-lg font-semibold mb-4">
                Comments ({image.comments.length})
              </p>
              {image.comments.map((comment) => (
                <div key={comment.id} className="p-4 border-b border-border">
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-border flex-shrink-0">
              <CommentInput />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}