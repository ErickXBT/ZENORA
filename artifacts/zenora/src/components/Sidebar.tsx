import { categories } from "@/data/games";
import { Link } from "wouter";

export function Sidebar() {
  return (
    <aside className="hidden md:block w-[220px] lg:w-[250px] bg-zinc-950 h-[calc(100vh-64px)] overflow-y-auto border-r-2 border-zinc-800 sticky top-[64px] custom-scrollbar flex-shrink-0">
      <div className="py-6 px-4">
        <h3 className="font-pixel text-[10px] text-zinc-500 uppercase tracking-widest mb-6 px-2">
          Categories
        </h3>
        <nav className="flex flex-col gap-1">
          {categories.map((category) => {
            const slug = category.toLowerCase().replace(/ /g, "-");
            return (
              <Link
                key={category}
                href={`#${slug}`}
                className="group px-3 py-2 text-sm font-sans font-medium text-zinc-400 hover:text-primary hover:bg-primary/10 transition-colors pixel-corners flex items-center justify-between"
              >
                <span>{category}</span>
                <div className="w-1 h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}