import { GameCard } from "./GameCard";
import { Game } from "@/data/games";
import { Link } from "wouter";

export function GameCarousel({ title, games }: { title: string; games: Game[] }) {
  if (!games || games.length === 0) return null;

  const slug = title.toLowerCase().replace(/ /g, "-");

  return (
    <section id={slug} className="mb-12">
      <div className="flex items-end justify-between mb-6 px-1">
        <h2 className="font-pixel text-xl md:text-2xl text-zinc-100 flex items-center gap-3">
          <span className="w-3 h-3 bg-primary block shadow-[0_0_8px_theme(colors.primary)]" />
          {title}
        </h2>
        <Link href={`#${slug}`} className="text-xs font-pixel text-zinc-500 hover:text-primary transition-colors">
          More &gt;
        </Link>
      </div>

      <div className="flex overflow-x-auto gap-4 pb-6 pt-2 px-1 snap-x scroll-smooth custom-scrollbar">
        {games.map((game) => (
          <div key={game.id} className="snap-start">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </section>
  );
}