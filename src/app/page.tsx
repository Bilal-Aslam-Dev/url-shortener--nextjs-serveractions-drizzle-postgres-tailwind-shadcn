import { DarkModeMenu } from "@/components/molecules/dark-mode-menu";
import RedirectLoadingScreen from "@/components/molecules/redirect-loading-screen";

import { SearchParams } from "@/types/params/SearchParams.types";

interface HomeSeachParams {
  [SearchParams.URL_UUID]: string;
}

export default function HomePage({
  searchParams,
}: {
  searchParams: HomeSeachParams;
}) {
  const UUID = searchParams[SearchParams.URL_UUID];

  if (UUID) {
    return <RedirectLoadingScreen uuid={UUID} />;
  }

  return (
    <main className="grid h-screen place-items-center">
      <form
        action=""
        className="flex w-full max-w-[450px] flex-col items-center gap-2 px-2 sm:flex-row"
      >
        <input
          className="w-full  appearance-none rounded-md border px-3 py-2.5 leading-tight text-gray-700 shadow-red-500 focus:outline-none focus:ring-2 dark:border-0 dark:bg-[#12182b] dark:text-white dark:shadow dark:focus:ring-gray-300"
          id="grid-first-name"
          type="text"
          placeholder="Enter url"
        />
        <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center self-start whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:self-center">
          Generate
        </button>
      </form>
      <div className="absolute right-4 top-4">
        <DarkModeMenu />
      </div>
    </main>
  );
}
