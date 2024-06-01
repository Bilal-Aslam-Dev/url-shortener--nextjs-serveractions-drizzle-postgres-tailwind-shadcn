"use client";

import { LoaderPinwheel } from "lucide-react";
import { useEffect } from "react";

export default function RedirectLoadingScreen({ uuid }: { uuid: string }) {
  useEffect(() => {
    if(uuid) {
        window.location.href = uuid.startsWith('https://') ? uuid : `http://${uuid}`;;
    }
  }, [uuid])

  return (
    <div className="grid h-screen place-items-center">
      <LoaderPinwheel className="animate-spin" />
    </div>
  );
}
