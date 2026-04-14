import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { GameCarousel } from "@/components/GameCarousel";
import { GameCard } from "@/components/GameCard";
import { Footer } from "@/components/Footer";
import { Roadmap } from "@/components/Roadmap";
import { Tokenomics } from "@/components/Tokenomics";
import { GameSection } from "@/components/GameSection";
import { gamesData, allGames } from "@/data/games";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames =
    searchQuery.trim() !== ""
      ? allGames.filter((g) =>
          g.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : null;

  return (
    <div className="min-h-screen bg-black">
      <Hero />

      <GameSection />

      <div
        id="catalog"
        className="bg-black text-white relative z-10 border-t-4 border-primary"
      >
        <Navbar onSearch={setSearchQuery} />

        <div className="flex w-full">
          <Sidebar />

          <main className="flex-1 p-4 md:p-6 min-w-0 overflow-x-hidden">
            {searchQuery && filteredGames ? (
              <div>
                <h2 className="font-pixel text-xl mb-6 text-primary">
                  Search: {searchQuery}
                </h2>
                {filteredGames.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {filteredGames.map((game) => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-500 font-sans text-base mt-8">
                    No games found for "{searchQuery}". Try something else.
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {gamesData.map((categoryData) => (
                  <GameCarousel
                    key={categoryData.category}
                    title={categoryData.category}
                    games={categoryData.games}
                  />
                ))}
              </div>
            )}
          </main>
        </div>

      </div>

      <Tokenomics />

      <Roadmap />

      <Footer />

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ff00aa;
        }
      `}</style>
    </div>
  );
}
