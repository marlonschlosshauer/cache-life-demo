import { Suspense } from "react";
import { RevalidateButton } from "@/components/revalidate-button";
import { getBlockData } from "@/fetch/data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface BlockProps {
  id: string;
}

export async function BlockComponent({ id }: BlockProps) {
  const blockData = await getBlockData(id);

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Block: {blockData.id}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p>
          <strong>ID:</strong> {blockData.id}
        </p>
        <p>
          <strong>Type:</strong> block
        </p>
        <p>
          <strong>Rendered at:</strong> {blockData.timestamp}
        </p>
        <p>{blockData.content}</p>
      </CardContent>
      <CardFooter>
        <Suspense fallback={<div>Loading revalidation button...</div>}>
          <RevalidateButton id={blockData.id} type="block" />
        </Suspense>
      </CardFooter>
    </Card>
  );
}
