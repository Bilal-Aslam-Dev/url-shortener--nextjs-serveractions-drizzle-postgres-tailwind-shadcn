import { Toaster } from "@/components/ui/sonner"
import { cookies } from "next/headers"
import FlashToasterClient from "./flash-toaster-client"

export function FlashToaster({ ...props }) {
  const flash = cookies().get("flash")
  const flashtrig = cookies().get("flashtrig")
  return (
    <>
      <Toaster {...props} />
      <FlashToasterClient flash={flash?.value} flashtrig={flashtrig?.value} />
    </>
  )
}

export function setFlash(flash: {
  type: "success" | "error"
  message: string
}) {
  const flashtrig = cookies().get("flashtrig")
  if (flashtrig?.value.startsWith("1")) {
    cookies().set("flashtrig", JSON.stringify(2), {
      path: "/",
      expires: new Date(Date.now() + 100000),
    })
  } else {
    cookies().set("flashtrig", JSON.stringify(1), {
      path: "/",
      expires: new Date(Date.now() + 100000),
    })
  }
  cookies().set("flash", JSON.stringify(flash), {
    path: "/",
    expires: new Date(Date.now() + 1 * 1000),
  })
}