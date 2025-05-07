"use server";

import { pages } from "@/data/pages";
import {
  unstable_cacheTag as cacheTag,
  unstable_cacheLife as cacheLife,
} from "next/cache";

// Function to get page data
export async function getPageData(id: string) {
  "use cache";
  cacheTag(id);
  cacheLife("max");

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
  cacheLife("max");

  // Simulate data fetching
  return {
    id,
    content: `Block content for ${id}`,
    timestamp: new Date().toISOString(),
  };
}
