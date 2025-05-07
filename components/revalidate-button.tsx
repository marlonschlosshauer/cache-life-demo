"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { revalidateId } from "@/actions/revalidate";

interface RevalidateButtonProps {
  id: string;
  type?: "page" | "block";
}

export function RevalidateButton({ id, type }: RevalidateButtonProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRevalidate = async () => {
    setIsLoading(true);
    try {
      const result = await revalidateId(id);
      setStatus(result.message);
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      <Button
        onClick={handleRevalidate}
        disabled={isLoading}
        variant={
          type === "page" ? "default" : type === "block" ? "outline" : "ghost"
        }
      >
        {isLoading ? "Revalidating..." : `Revalidate ${id}`}
      </Button>
      {status && <p className="text-sm text-muted-foreground">{status}</p>}
    </div>
  );
}
