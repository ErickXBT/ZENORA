import { categories } from "@/data/games";

export function Sidebar() {
  return (
    <aside className="hidden md:block w-[200px] lg:w-[230px] bg-black h-[calc(100vh-56px)] overflow-y-auto border-r-2 border-zinc-900 sticky top-[56px] custom-scrollbar flex-shrink-0">
      <div className="py-4 px-2">
        <div className="px-3 py-2 mb-2">
          <span className="font-pixel text-[9px] text-zinc-600 uppercase tracking-widest">
            Categories
          </span>
        </div>
        <nav className="flex flex-col gap-0.5">
          {categories.map((category) => {
            const slug = category.toLowerCase().replace(/ /g, "-");
            return (
              <a
                key={category}
                href={`#${slug}`}
                className="group px-3 py-2 text-sm font-sans text-zinc-500 hover:text-primary hover:bg-zinc-900 transition-colors flex items-center gap-2"
                data-testid={`link-category-${slug}`}
              >
                <div className="w-1.5 h-1.5 bg-zinc-700 group-hover:bg-primary transition-colors flex-shrink-0" />
                <span>{category}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
