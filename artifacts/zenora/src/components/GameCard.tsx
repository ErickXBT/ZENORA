import { useState } from "react";
import { Link } from "wouter";
import { Game } from "@/data/games";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export function GameCard({ game }: { game: Game }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`group relative overflow-hidden pixel-corners flex-shrink-0 w-[180px] h-[208px] bg-zinc-900 transition-colors ${
        isHovered ? "pixel-border-primary" : "border-2 border-zinc-800"
      }`}
    >
      <Link href={`#play-${game.id}`} className="block h-full w-full relative">
        {!imgError ? (
          <img
            src={game.image}
            alt={game.title}
            className="w-[180px] h-[135px] object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-[180px] h-[135px] bg-zinc-800 flex flex-col items-center justify-center text-zinc-600">
            <Gamepad2 size={32} />
            <span className="text-[10px] font-pixel mt-2 text-center px-2 leading-tight">NO SIGNAL</span>
          </div>
        )}
        
        {/* Glow overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-overlay" />
        )}

        <div className="absolute bottom-0 left-0 w-full h-[73px] bg-zinc-900 border-t-2 border-zinc-800 group-hover:bg-zinc-800 transition-colors p-3 flex items-center justify-center text-center">
          <span className="font-sans font-semibold text-sm text-zinc-200 group-hover:text-primary transition-colors line-clamp-2">
            {game.title}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}