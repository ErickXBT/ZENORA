import { GameCard } from "./GameCard";
import { Game } from "@/data/games";

export function GameCarousel({ title, games }: { title: string; games: Game[] }) {
  if (!games || games.length === 0) return null;

  const slug = title.toLowerCase().replace(/ /g, "-");
  const catHref = slug === "new-games"
    ? "https://kbhgames.com/new"
    : `https://kbhgames.com/${slug}`;

  return (
    <section id={slug} className="mb-10" data-testid={`section-${slug}`}>
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="font-pixel text-base md:text-lg text-zinc-100 flex items-center gap-3">
          <span
            className="w-2.5 h-2.5 block flex-shrink-0"
            style={{ background: "#ff00aa", boxShadow: "0 0 6px #ff00aa" }}
          />
          {title}
        </h2>
        <a
          href={catHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-pixel text-zinc-600 hover:text-primary transition-colors whitespace-nowrap"
          data-testid={`link-more-${slug}`}
        >
          More &gt;
        </a>
      </div>

      <div className="flex overflow-x-auto gap-3 pb-4 pt-1 px-1 snap-x scroll-smooth custom-scrollbar">
        {games.map((game) => (
          <div key={game.id} className="snap-start">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}
