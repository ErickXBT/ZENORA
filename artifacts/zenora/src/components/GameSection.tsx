import { motion } from "framer-motion";
import { useRef, useState } from "react";

const NEON_PINK = "#ff00aa";

export function GameSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [focused, setFocused] = useState(false);

  const handleClick = () => {
    if (iframeRef.current) {
      iframeRef.current.focus();
      setFocused(true);
    }
  };

  return (
    <section id="play" className="w-full bg-black py-20 px-4 md:px-10">
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
              style={{ background: `linear-gradient(to right, transparent, ${NEON_PINK})` }}
            />
            <span
              className="font-pixel text-[10px] tracking-widest"
              style={{ color: NEON_PINK }}
            >
              ZENORA ARCADE
            </span>
            <div
              className="h-px flex-1 max-w-[80px]"
              style={{ background: `linear-gradient(to left, transparent, ${NEON_PINK})` }}
            />
          </div>

          <h2
            className="font-pixel text-3xl md:text-4xl mb-4"
            style={{
              color: NEON_PINK,
              textShadow: `0 0 16px ${NEON_PINK}, 0 0 40px ${NEON_PINK}66`,
            }}
          >
            ALIEN ABDUCTION
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto">
            Play the ZENORA flagship mini-game. Click the screen to focus, then use WASD/arrows to move, SPACE to beam animals and SHIFT to boost.
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
            border: `2px solid ${focused ? NEON_PINK : "#333"}`,
            boxShadow: focused
              ? `0 0 30px ${NEON_PINK}66, 0 0 60px ${NEON_PINK}22`
              : "0 0 20px rgba(0,0,0,0.8)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            background: "#050505",
          }}
        >
          <div className="w-full" style={{ aspectRatio: "16/9" }}>
            <iframe
              ref={iframeRef}
              src="/game.html"
              className="w-full h-full border-0 block"
              title="Alien Abduction Arcade Game"
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
              style={{
                background: "rgba(0,0,0,0.35)",
              }}
            >
              <div
                className="font-pixel text-sm px-6 py-3"
                style={{
                  color: NEON_PINK,
                  border: `1px solid ${NEON_PINK}88`,
                  background: "rgba(0,0,0,0.7)",
                  textShadow: `0 0 10px ${NEON_PINK}`,
                  boxShadow: `0 0 20px ${NEON_PINK}44`,
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
            { key: "WASD / ↑↓←→", desc: "Move UFO" },
            { key: "SPACE", desc: "Tractor Beam" },
            { key: "SHIFT", desc: "Boost" },
            { key: "P / ESC", desc: "Pause" },
          ].map((ctrl) => (
            <div key={ctrl.key} className="flex items-center gap-2">
              <span
                className="font-pixel text-[9px] px-2 py-1"
                style={{
                  color: "#fff",
                  background: "#1a1a1a",
                  border: "1px solid #444",
                }}
              >
                {ctrl.key}
              </span>
              <span className="font-sans text-xs text-zinc-500">{ctrl.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
