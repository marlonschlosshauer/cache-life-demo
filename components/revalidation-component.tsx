import { Suspense } from "react";
import { RevalidateButton } from "@/components/revalidate-button";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface RevalidationProps {
  id: string;
}

export async function RevalidationComponent({ id }: RevalidationProps) {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Id: {id}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Suspense fallback={<div>Loading revalidation button...</div>}>
          <RevalidateButton id={id} />
        </Suspense>
      </CardFooter>
    </Card>
  );
}
