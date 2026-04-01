import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { GameCarousel } from "@/components/GameCarousel";
import { GameCard } from "@/components/GameCard";
import { gamesData, allGames } from "@/data/games";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredGames = searchQuery.trim() !== ""
    ? allGames.filter(g => g.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : null;

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      
      <div id="catalog" className="bg-black text-white relative z-10 pt-1 border-t-4 border-primary">
        <Navbar onSearch={setSearchQuery} />
        
        <div className="flex w-full max-w-[1600px] mx-auto">
          <Sidebar />
          
          <main className="flex-1 p-6 md:p-8 min-w-0 overflow-x-hidden">
            {searchQuery && filteredGames ? (
              <div>
                <h2 className="font-pixel text-2xl mb-8 text-primary">
                  Search: {searchQuery}
                </h2>
                {filteredGames.length > 0 ? (
                  <div className="flex flex-wrap gap-4">
                    {filteredGames.map(game => (
                      <GameCard key={game.id} game={game} />
                    ))}
                  </div>
                ) : (
                  <p className="text-zinc-500 font-sans text-lg">No games found for "{searchQuery}". Try something else.</p>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
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

        {/* Footer */}
        <footer className="w-full border-t-2 border-zinc-800 bg-zinc-950 py-12 px-6 mt-12 text-center">
          <h2 className="font-pixel text-2xl text-primary text-glow mb-4">ZENORA</h2>
          <p className="text-zinc-400 font-sans mb-8">Nostalgia + GameFi — Play, Earn, Remember</p>
          <p className="text-xs font-pixel text-zinc-600">
            &copy; 2025 ZENORA - Own Your Childhood
          </p>
        </footer>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a0a0a;
          border-left: 1px solid #27272a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46;
          border-radius: 0;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffc600;
        }
      `}</style>
    </div>
  );
}