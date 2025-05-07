"use server";

import { pages } from "@/data/pages";
import { unstable_cacheTag as cacheTag } from "next/cache";

// Function to get page data
export async function getPageData(id: string) {
  "use cache";
  cacheTag(id);

  /* @ts-ignore */
  const blocks = pages[id] ?? [];

  cacheTag(...blocks);

  // Simulate data fetching
  return {
    id,
    blocks,
    timestamp: new Date().toISOString(),
  };
}

// Function to get block data
export async function getBlockData(id: string) {
  "use cache";
  cacheTag(id);

  // Simulate data fetching
  return {
    id,
    content: `Block content for ${id}`,
    timestamp: new Date().toISOString(),
  };
}
