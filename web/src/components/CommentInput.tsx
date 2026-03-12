"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Send } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { createComment } from "@/actions/comment.action";
import { toast } from "sonner";
import { useSWRConfig } from "swr";
import Comment from "@/models/comment";

interface CommentInputProps {
  imageId: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

export function CommentInput({ imageId, setComments }: CommentInputProps) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutate } = useSWRConfig();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedContent = content.trim();
    if (!trimmedContent || loading) return;

    const optimisticComment: Comment = {
      id: `temp-${Date.now()}`,
      content: trimmedContent,
      created_at: new Date(),
      updated_at: new Date(),
    };
    setComments((prevComments) => [...prevComments, optimisticComment]);
    setContent("");

    setLoading(true);
    try {
      const response = await createComment(imageId, trimmedContent);

      if (!response.success) {
        toast.error("Failed to create comment");
        return;
      }
      
      await mutate("/api/images");
    } catch (error) {
      console.error(error);
      toast.error("Failed to create comment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-1 w-full">
      <Input
        type="text"
        placeholder="Add a comment"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        className="w-full flex-1 text-sm focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-input"
      />
      <Button
        type="submit"
        disabled={loading || !content.trim()}
        className="flex-shrink-0"
      >
        <Send className="w-4 h-4" />
      </Button>
    </form>
  );
}