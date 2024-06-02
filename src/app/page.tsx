import { createShortenedUrl } from "@/actions/createShortenedUrl";

import { DarkModeMenu } from "@/components/molecules/dark-mode-menu";
import SubmitButton from "@/components/ui/submit-button";

export default async function HomePage() {
  return (
    <main className="grid h-[100dvh] place-items-center">
      <h1 className="absolute left-1/2 top-16 -translate-x-1/2 text-5xl font-semibold sm:top-20">
        Shorty
      </h1>
      <form
        key={Math.random()}
        action={createShortenedUrl}
        className="flex w-full max-w-[450px] flex-col items-center gap-2 px-2 sm:flex-row"
      >
        <input
          name="url"
          required
          className="w-full  appearance-none rounded-md border px-3 py-3 pl-4 leading-tight text-gray-700 shadow-red-500 focus:outline-none focus:ring-2 dark:border-0 dark:bg-[#12182b] dark:text-white dark:shadow dark:focus:ring-gray-300"
          id="grid-first-name"
          type="text"
          placeholder="Enter URL"
        />
        <SubmitButton className="h-10 self-end sm:self-center">Generate</SubmitButton>
      </form>
      <div className="absolute right-4 top-4">
        <DarkModeMenu />
      </div>
    </main>
  );
}
