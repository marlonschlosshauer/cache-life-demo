"use server";

import { revalidateTag } from "next/cache";

export async function revalidateId(id: string) {
  console.log(`Revalidating tag: ${id}`);
  revalidateTag(id);
  return { success: true, message: `${id} revalidated` };
}
