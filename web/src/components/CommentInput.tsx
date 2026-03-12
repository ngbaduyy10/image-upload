import { Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function CommentInput() {
  return (
    <div className="flex items-center gap-1 w-full">
      <Input
        type="text"
        placeholder="Add a comment"
        className="w-full flex-1 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-input"
      />
      <Button className="flex-shrink-0">
        <Send className="w-4 h-4" />
      </Button>
    </div>
  );
}