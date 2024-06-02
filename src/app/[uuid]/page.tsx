import { type UUIDParams } from "@/types/params/[uuid]";

import { notFound, redirect } from "next/navigation";

import { getOriginalUrl } from "@/data-access/shortenedUrls";

export default async function UUID({ params }: UUIDParams) {
  const result = await getOriginalUrl(params.uuid);

  if (!result?.originalUrl) {
    return notFound();
  }

  return redirect(String(result.originalUrl));
}
