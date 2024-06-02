import { DarkModeMenu } from "@/components/molecules/dark-mode-menu";

export default async function HomePage() {
  return (
    <main className="grid h-[100dvh] place-items-center">
      <h1 className="absolute left-1/2 top-16  sm:top-20 -translate-x-1/2 text-5xl font-semibold">Shorty</h1>
      <form
        action=""
        className="flex w-full max-w-[450px] flex-col items-center gap-2 px-2 sm:flex-row"
      >
        <input
          className="w-full  appearance-none rounded-md border px-3 pl-4 py-3 leading-tight text-gray-700 shadow-red-500 focus:outline-none focus:ring-2 dark:border-0 dark:bg-[#12182b] dark:text-white dark:shadow dark:focus:ring-gray-300"
          id="grid-first-name"
          type="text"
          placeholder="Enter URL"
        />
        <button className="ring-offset-background focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-10 items-center justify-center self-end whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:self-center">
          Generate
        </button>
      </form>
      <div className="absolute right-4 top-4">
        <DarkModeMenu />
      </div>
    </main>
  );
}
