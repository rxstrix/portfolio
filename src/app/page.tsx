import { Navigation } from "@/components/navigation";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-8 md:gap-10 md:px-8">
      <Navigation />

      <div className="max-w-5xl w-full px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-black leading-tight">
          NIKITA SIMANKOV
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-2xl font-black text-zinc-500">
          Back-end Developer
        </h2>
        <h3 className="text-lg sm:text-xl md:text-xl font-black text-zinc-600 ">
          Minsk, Belarus
        </h3>
      </div>

      {/* Recent Projects Section */}
      <div className="max-w-5xl w-full px-4 sm:px-6">
        <div className="pb-4 flex flex-row sm:flex-row items-start sm:items-center justify-between border-b-zinc-800 border-b gap-3 sm:gap-0">
          <h3 className="text-xl md:text-2xl font-black text-white">
            RECENT PROJECTS
          </h3>
          <a
            href="/projects"
            className="text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer text-base md:text-lg"
          >
            Show All
          </a>
        </div>
        <div className="h-32 sm:h-40 md:h-44 flex flex-row items-center justify-center py-4">
          <span className="text-zinc-500 font-bold text-sm sm:text-base md:text-lg">
            NO PROJECTS YET
          </span>
        </div>
      </div>

      {/* Latest Articles Section */}
      <div className="max-w-5xl w-full px-4 sm:px-6">
        <div className="pb-4 flex flex-row sm:flex-row items-start sm:items-center justify-between border-b-zinc-800 border-b gap-3 sm:gap-0">
          <h3 className="text-xl md:text-2xl font-black text-white">
            LATEST ARTICLES
          </h3>
          <a
            href="/blog"
            className="text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer text-base md:text-lg"
          >
            Show All
          </a>
        </div>
        <div className="h-28 sm:h-32 md:h-36 flex flex-row items-center justify-center py-4">
          <span className="text-zinc-500 font-bold text-sm sm:text-base md:text-lg">
            NO ARTICLES YET
          </span>
        </div>
      </div>

      {/* Optional: Additional spacing for mobile */}
      <div className="md:hidden h-8"></div>
    </div>
  );
}
