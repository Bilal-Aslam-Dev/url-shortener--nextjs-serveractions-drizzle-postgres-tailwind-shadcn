/* eslint-disable @typescript-eslint/no-explicit-any */

"use server";

import { setFlash } from "@/lib/flash-toaster";
import { db } from "@/server/db";
import { shortenedUrls } from "@/server/db/schema";

import { v4 as uuidv4 } from "uuid";

const hostUrl =
  process.env.NODE_ENV === "production"
    ? "https://e-shorty.vercel.app"
    : "http://localhost:3000";

export async function createShortenedUrl(formData: FormData) {
  const url = formData.get("url") as string;

  const uuid = uuidv4().substring(0, 9);
  
  try {
    await db.insert(shortenedUrls).values({
      uuid: uuid,
      originalUrl: url.startsWith("https://") ? url : `https://${url}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    setFlash({ type: "success", message: `${hostUrl}/${uuid}` });
  } catch (err: any) {
    const error = typeof err?.message === "string" ? err.message : "Could not create a url!";

    setFlash({ type: "error", message: error });
    return {
      message: error,
    };
  }
}
