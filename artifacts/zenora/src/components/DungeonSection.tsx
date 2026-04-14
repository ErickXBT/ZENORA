import { motion } from "framer-motion";
import { useRef, useState } from "react";

const GOLD = "#d4af37";
const NEON_PINK = "#ff00aa";

export function DungeonSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    if (iframeRef.current) {
      iframeRef.current.focus();
      setFocused(true);
    }
  };

  return (
    <section id="dungeon" className="w-full bg-black py-20 px-4 md:px-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div
              className="h-px flex-1 max-w-[80px]"
              style={{ background: `linear-gradient(to right, transparent, ${GOLD})` }}
            />
            <span
              className="font-pixel text-[10px] tracking-widest"
              style={{ color: GOLD }}
            >
              ZENORA ARCADE
            </span>
            <div
              className="h-px flex-1 max-w-[80px]"
              style={{ background: `linear-gradient(to left, transparent, ${GOLD})` }}
            />
          </div>

          <h2
            className="font-pixel text-3xl md:text-4xl mb-4"
            style={{
              color: GOLD,
              textShadow: `0 0 16px ${GOLD}, 0 0 40px ${GOLD}66`,
            }}
          >
            DUNGEON CRAWLER
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto">
            Explore a 3D retro dungeon. Hunt down every monster to claim victory — but watch your HP. Click the screen to start playing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full cursor-pointer"
          onClick={handleClick}
          style={{
            border: `2px solid ${focused ? GOLD : "#333"}`,
            boxShadow: focused
              ? `0 0 30px ${GOLD}55, 0 0 60px ${GOLD}22`
              : "0 0 20px rgba(0,0,0,0.8)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            background: "#000",
          }}
        >
          <div className="w-full" style={{ aspectRatio: "16/9" }}>
            <iframe
              ref={iframeRef}
              src="/dungeon.html"
              className="w-full h-full border-0 block"
              title="Dungeon Crawler 8-Bit"
              allow="autoplay"
              tabIndex={0}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              style={{ display: "block" }}
            />
          </div>

          {!focused && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ background: "rgba(0,0,0,0.35)" }}
            >
              <div
                className="font-pixel text-sm px-6 py-3"
                style={{
                  color: GOLD,
                  border: `1px solid ${GOLD}88`,
                  background: "rgba(0,0,0,0.7)",
                  textShadow: `0 0 10px ${GOLD}`,
                  boxShadow: `0 0 20px ${GOLD}44`,
                }}
              >
                ▶ CLICK TO PLAY
              </div>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mt-6"
        >
          {[
            { key: "W / ↑", desc: "Move Forward" },
            { key: "S / ↓", desc: "Move Backward" },
            { key: "A / D", desc: "Turn Left / Right" },
            { key: "SPACE", desc: "Attack" },
            { key: "ENTER", desc: "Pause" },
          ].map((ctrl) => (
            <div key={ctrl.key} className="flex items-center gap-2">
              <span
                className="font-pixel text-[9px] px-2 py-1"
                style={{
                  color: "#fff",
                  background: "#1a1a1a",
                  border: `1px solid ${GOLD}55`,
                }}
              >
                {ctrl.key}
              </span>
              <span className="font-sans text-xs text-zinc-500">{ctrl.desc}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-8 mt-8"
        >
          {[
            { icon: "⚔️", label: "Turn-Based Combat" },
            { icon: "🏰", label: "3D Dungeon" },
            { icon: "👾", label: "Enemy AI" },
          ].map((feat) => (
            <div key={feat.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{feat.icon}</span>
              <span
                className="font-pixel text-[8px] text-center"
                style={{ color: GOLD }}
              >
                {feat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
