import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

interface NavbarProps {
  onSearch: (q: string) => void;
}

export function Navbar({ onSearch }: NavbarProps) {
  const [query, setQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "New", href: "#new-games" },
    { label: "Action", href: "#action-games" },
    { label: "Puzzle", href: "#puzzle-games" },
    { label: "Adventure", href: "#adventure-games" },
    { label: "Racing", href: "#racing-games" },
    { label: "Shooting", href: "#shooting-games" },
    { label: "Fighting", href: "#fighting-games" },
    { label: "Arcade", href: "#arcade-games" },
    { label: "Retro", href: "#retro-games" },
    { label: "Sports", href: "#sports-games" },
    { label: "2 Player", href: "#two-player-games" },
    { label: "Multiplayer", href: "#multiplayer-games" },
  ];

  return (
    <>
      <header
        className="sticky top-0 z-50 w-full border-b-2 border-zinc-800"
        style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center justify-between w-full px-4 md:px-6 h-14">
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              className="lg:hidden text-zinc-400 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen((v) => !v)}
              data-testid="button-mobile-menu"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <a href="/" className="flex items-center gap-2 group" data-testid="link-home">
              <img
                src="https://i.imgur.com/uRFXGQy.png"
                alt="ZENORA logo"
                className="w-7 h-7 object-contain"
                style={{ filter: "drop-shadow(0 0 6px #ff00aa)" }}
              />
              <span
                className="font-pixel text-lg text-primary"
                style={{ textShadow: "0 0 10px #ff00aa, 0 0 20px #ff00aa55" }}
              >
                ZENORA
              </span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-0 overflow-x-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1 text-xs font-sans font-bold text-zinc-400 hover:text-primary hover:bg-primary/10 transition-colors whitespace-nowrap"
                data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSearch(query);
            }}
            className="relative flex items-center flex-shrink-0"
          >
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onSearch(e.target.value);
              }}
              placeholder="Search games..."
              className="w-28 md:w-52 bg-zinc-900 border border-zinc-700 text-zinc-100 px-3 py-1.5 text-xs font-sans focus:outline-none focus:border-primary transition-all placeholder:text-zinc-600"
              data-testid="input-search"
            />
            <button
              type="submit"
              className="absolute right-2.5 text-zinc-500 hover:text-primary transition-colors"
              data-testid="button-search-submit"
            >
              <Search size={14} />
            </button>
          </form>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-black px-4 py-4 grid grid-cols-3 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-sans font-bold text-zinc-400 hover:text-primary py-2 px-2 hover:bg-zinc-900 transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
