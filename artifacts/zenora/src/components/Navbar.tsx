import { Link } from "wouter";
import { Search, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar({ onSearch }: { onSearch: (q: string) => void }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-950/90 backdrop-blur-md border-b-2 border-zinc-800 h-16 flex items-center px-4 md:px-6">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <button className="md:hidden text-zinc-400 hover:text-primary transition-colors">
            <Menu size={24} />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <span className="font-pixel text-xl text-primary text-glow cursor-pointer hover:text-white transition-colors">
              ZENORA
            </span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <Link href="#new-games" className="text-sm font-sans font-bold text-zinc-300 hover:text-primary transition-colors">New</Link>
          <Link href="#action-games" className="text-sm font-sans font-bold text-zinc-300 hover:text-accent transition-colors">Action</Link>
          <Link href="#puzzle-games" className="text-sm font-sans font-bold text-zinc-300 hover:text-secondary transition-colors">Puzzle</Link>
          <Link href="#racing-games" className="text-sm font-sans font-bold text-zinc-300 hover:text-primary transition-colors">Racing</Link>
        </nav>

        <form onSubmit={handleSearch} className="relative flex items-center">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder="Find games..."
            className="w-32 md:w-64 bg-zinc-900 border-2 border-zinc-800 text-zinc-100 px-4 py-2 text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all pixel-corners placeholder:text-zinc-600"
          />
          <button type="submit" className="absolute right-3 text-zinc-500 hover:text-primary transition-colors">
            <Search size={16} />
          </button>
        </form>
      </div>
    </header>
  );
}