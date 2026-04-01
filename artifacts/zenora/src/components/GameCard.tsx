import { useState } from "react";
import { Game } from "@/data/games";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export function GameCard({ game }: { game: Game }) {
  const [imgError, setImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden flex-shrink-0 w-[180px] h-[208px] bg-zinc-900 transition-colors"
      style={{
        border: isHovered
          ? "2px solid #ffc600"
          : "2px solid #27272a",
        boxShadow: isHovered
          ? "0 0 14px #ffc60055, 0 0 28px #ffc60022"
          : "none",
      }}
      data-testid={`card-game-${game.id}`}
    >
      <a
        href={game.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full relative"
        data-testid={`link-game-${game.id}`}
      >
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
            <span className="text-[10px] font-pixel mt-2 text-center px-2 leading-tight text-zinc-600">
              NO SIGNAL
            </span>
          </div>
        )}

        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-[135px] bg-primary/10 pointer-events-none" />
        )}

        <div
          className="absolute bottom-0 left-0 w-full h-[73px] border-t-2 transition-colors flex items-center justify-center text-center p-2"
          style={{
            background: isHovered ? "#1c1c1c" : "#111111",
            borderColor: isHovered ? "#ffc600" : "#27272a",
          }}
        >
          <span
            className="font-sans font-semibold text-xs leading-snug line-clamp-2 transition-colors"
            style={{ color: isHovered ? "#ffc600" : "#e4e4e7" }}
          >
            {game.title}
          </span>
        </div>
      </a>
    </motion.div>
  );
}
