import { Suspense } from "react";
import { PageComponent } from "@/components/page-component";
import Link from "next/link";
import { pages } from "@/data/pages";

export async function generateStaticParams() {
  // Generate static params for the 4 pages
  return Object.keys(pages).map((id) => ({
    slug: [id],
  }));
}

export default function Page({ params }: { params: { slug?: string[] } }) {
  // Get the page ID from the slug or default to id1
  const pageId = params.slug?.[0] || "id1";

  // Check if the page exists
  const pageExists = Object.keys(pages).includes(pageId);

  if (!pageExists) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-4">Page not found</h1>
        <p>The page with ID "{pageId}" does not exist.</p>
        <div className="mt-4">
          <Link href="/" className="text-blue-500 hover:underline">
            Go to home page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex gap-4">
        {Object.keys(pages).map((id) => (
          <Link
            key={id}
            href={`/${id}`}
            className={`px-4 py-2 rounded-md ${pageId === id ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"}`}
          >
            Page {id}
          </Link>
        ))}
      </div>

      <Suspense fallback={<div>Loading page...</div>}>
        <PageComponent id={pageId} />
      </Suspense>
    </div>
  );
}
