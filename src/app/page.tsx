import { Navigation } from "@/components/navigation";

export default function Page() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-10">
      <Navigation />
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl font-black">NIKITA SIMANKOV</h1>
        <h2 className="text-2xl font-black text-zinc-500">
          Back-end Developer
        </h2>
        <h3 className="text-xl font-black text-zinc-600">Minsk, Belarus</h3>
      </div>
      <div className="max-w-5xl w-full">
        <div className="pb-4 flex flex-row items-center justify-between border-b-zinc-800 border-b">
          <h3 className="text-xl font-black text-white">RECENT PROJECTS</h3>
          <a
            href="/projects"
            className="text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer"
          >
            Show All
          </a>
        </div>
        <div className="h-44 flex flex-row items-center justify-center">
          <span className="text-zinc-500 font-bold">NO PROJECTS YET</span>
        </div>
      </div>
      <div className="max-w-5xl w-full">
        <div className="pb-4 flex flex-row items-center justify-between border-b-zinc-800 border-b">
          <h3 className="text-xl font-black text-white">LATEST ARTICLES</h3>
          <a
            href="/blog"
            className="text-zinc-500 font-bold hover:text-white transition-colors cursor-pointer"
          >
            Show All
          </a>
        </div>
        <div className="h-30 flex flex-row items-center justify-center">
          <span className="text-zinc-500 font-bold">NO ARTICLES YET</span>
        </div>
      </div>
    </div>
  );
}
