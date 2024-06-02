"use server";

import { db } from "@/server/db";
import { shortenedUrls } from "@/server/db/schema";

import { v4 as uuidv4 } from "uuid";

export async function createShortenedUrl(formData: FormData) {
  "use server";

  const url = formData.get("url") as string;

  const uuid = uuidv4().substring(0, 9);

  await db.insert(shortenedUrls).values({
    uuid: uuid,
    originalUrl: url,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
