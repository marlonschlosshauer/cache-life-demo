import { pages } from "@/data/pages";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Next.js 15.3 Cache Demo</h1>
      <p className="text-lg mb-8">
        This demo demonstrates how the "use cache" feature works with cache tags
        and revalidation.
      </p>

      <div className="bg-muted p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to use this demo:</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Navigate between the different pages using the links below</li>
          <li>Notice the timestamp when each page and block was rendered</li>
          <li>Click the "Revalidate" button on a page or block</li>
          <li>
            Navigate away and come back to see if the cache was invalidated
          </li>
          <li>
            Try revalidating a block that appears on multiple pages to see the
            effect
          </li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Available Pages:</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(pages).map(([pageId, blockIds]) => (
          <Link
            key={pageId}
            href={`/${pageId}`}
            className="block p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-medium mb-2">Page {pageId}</h3>
            <p className="text-muted-foreground mb-4">
              Contains {blockIds.length} blocks
            </p>
            <div className="flex flex-wrap gap-2">
              {blockIds.map((blockId) => (
                <span
                  key={blockId}
                  className="px-2 py-1 bg-muted rounded-md text-sm"
                >
                  {blockId}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
