export function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "New Games", href: "#new-games" },
    { label: "Action Games", href: "#action-games" },
    { label: "Puzzle Games", href: "#puzzle-games" },
    { label: "Adventure Games", href: "#adventure-games" },
    { label: "Racing Games", href: "#racing-games" },
    { label: "Shooting Games", href: "#shooting-games" },
    { label: "Multiplayer Games", href: "#multiplayer-games" },
    { label: "Fighting Games", href: "#fighting-games" },
    { label: "Arcade Games", href: "#arcade-games" },
    { label: "Retro Games", href: "#retro-games" },
    { label: "Platform Games", href: "#platform-games" },
    { label: "Sports Games", href: "#sports-games" },
  ];

  return (
    <footer className="w-full bg-black border-t-4 border-zinc-800 mt-16">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="font-pixel text-3xl text-primary mb-3" style={{ textShadow: "0 0 16px #ff00aa, 0 0 32px #ff00aa66" }}>
              ZENORA
            </div>
            <p className="font-pixel text-[10px] text-zinc-500 leading-6 mb-4">
              OWN YOUR CHILDHOOD
            </p>
            <p className="text-zinc-500 text-sm font-sans leading-relaxed max-w-xs">
              Nostalgia meets GameFi. Play the classic games you grew up with and earn while you remember.
            </p>
          </div>

          <div>
            <h4 className="font-pixel text-xs text-zinc-400 mb-5 tracking-widest">GAME CATEGORIES</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-pixel text-xs text-zinc-400 mb-5 tracking-widest">ZENORA GAMEFI</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">Play to Earn</a></li>
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">NFT Collectibles</a></li>
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="text-sm font-sans text-zinc-500 hover:text-primary transition-colors">About ZENORA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-pixel text-[9px] text-zinc-600 tracking-widest">
            &copy; {year} ZENORA — OWN YOUR CHILDHOOD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2"
                style={{
                  backgroundColor: i % 2 === 0 ? "#ff00aa" : "#111",
                  boxShadow: i % 2 === 0 ? "0 0 4px #ff00aa" : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
