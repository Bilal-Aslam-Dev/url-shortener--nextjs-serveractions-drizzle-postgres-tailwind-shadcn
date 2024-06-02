import { type UUIDParams } from "@/types/params/[uuid]";

import { redirect } from "next/navigation";

export default async function UUID({ params }: UUIDParams) {
  console.log(params);

  const redirectUrl = "https://www.google.com";

  return redirect(redirectUrl);
}
