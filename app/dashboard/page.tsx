import { RevalidationComponent } from "@/components/revalidation-component";
import { pages } from "@/data/pages";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Revalidation Dashboard</h1>
      <p className="text-lg mb-8">
        Use this page to revalidate specific blocks.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Available blocks:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(pages).map(([pageId, blockIds]) => (
          <div key={pageId} className="grid gap-4 md:grid-cols-2">
            {blockIds.map((blockId: string) => (
              <Suspense
                key={blockId}
                fallback={<div>Loading block {blockId}...</div>}
              >
                <RevalidationComponent id={blockId} />
              </Suspense>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
