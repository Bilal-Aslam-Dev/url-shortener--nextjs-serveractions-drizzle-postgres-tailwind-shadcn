"use client";
import { useEffect } from "react";
import { toast } from "sonner";

export default function FlashToasterClient(props: {
  flash: string | undefined;
  flashtrig: string | undefined;
}) {
  useEffect(() => {
    if (!!props.flash) {
      const { type, message } = JSON.parse(props.flash);
      if (type === "success") {
        toast.success(message, {
          duration: 30000,
          action: {
            label: "Copy to clipboard",
            onClick: () => {
              navigator.clipboard
                .writeText(message)
                .then(() => {
                  console.log("Message copied to clipboard");
                })
                .catch((err) => {
                  console.error("Failed to copy message: ", err);
                });
            },
          },
        });
      } else if (type === "error") {
        toast.error(message);
      }
    }
  }, [props.flash, props.flashtrig]);
  return null;
}
