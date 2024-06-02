import { type UUIDParams } from "@/types/params/[uuid]";

import { v4 as uuidv4 } from "uuid";

import { redirect } from "next/navigation";
import { shortenedUrls } from "@/server/db/schema";
import { db } from "@/server/db";

export default async function UUID({ params }: UUIDParams) {
  const urls = await db.select().from(shortenedUrls);
  
  console.log(params);
  console.log(urls);
  const redirectUrl = "https://www.google.com";

  return redirect(redirectUrl);
}
