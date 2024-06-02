import { shortenedUrls } from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";

export async function getOriginalUrl(uuid: string) {
  const result = await db
    .select()
    .from(shortenedUrls)
    .where(eq(shortenedUrls.uuid, uuid));

  return result.length > 0 ? result[0] : null;
}
