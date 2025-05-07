import { Suspense } from "react";
import { BlockComponent } from "@/components/block-component";
import { RevalidateButton } from "@/components/revalidate-button";
import { getPageData } from "@/fetch/data";

interface PageComponentProps {
  id: string;
}

export async function PageComponent({ id }: PageComponentProps) {
  const pageData = await getPageData(id);

  return (
    <div className="space-y-6">
      <div className="p-6 bg-muted rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Page: {pageData.id}</h1>
        <div className="space-y-2">
          <p>
            <strong>ID:</strong> {pageData.id}
          </p>
          <p>
            <strong>Type:</strong> page
          </p>
          <p>
            <strong>Rendered at:</strong> {pageData.timestamp}
          </p>
        </div>
        <div className="mt-4">
          <Suspense fallback={<div>Loading revalidation button...</div>}>
            <RevalidateButton id={pageData.id} type="page" />
          </Suspense>
        </div>
      </div>

      <h2 className="text-xl font-semibold">Blocks:</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {pageData.blocks.map((blockId: string) => (
          <Suspense
            key={blockId}
            fallback={<div>Loading block {blockId}...</div>}
          >
            <BlockComponent id={blockId} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}
