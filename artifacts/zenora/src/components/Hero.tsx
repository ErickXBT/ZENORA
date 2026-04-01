import { motion } from "framer-motion";
import heroBgVideo from "@assets/IMG_1907_1775045371133.MP4";

const NEON_PINK = "#ff00aa";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden flex flex-col bg-black">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        src={heroBgVideo}
        className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 pointer-events-none" />
      <div className="absolute inset-0 crt-scanlines" />

      {/* ── Hero Navbar ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="relative z-30 w-full flex items-center justify-between px-6 md:px-10 h-16 border-b border-white/5"
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(8px)" }}
      >
        {/* Left — logo */}
        <a
          href="/"
          className="flex items-center gap-2 group"
          data-testid="link-hero-home"
        >
          <span
            className="font-pixel text-xl md:text-2xl"
            style={{
              color: NEON_PINK,
              textShadow: `0 0 10px ${NEON_PINK}, 0 0 24px ${NEON_PINK}88`,
            }}
          >
            ZENORA
          </span>
        </a>

        {/* Center — nav links */}
        <div className="hidden sm:flex items-center gap-8">
          {[
            { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
            { label: "Games", action: () => scrollTo("catalog") },
            { label: "Roadmap", action: () => scrollTo("roadmap") },
          ].map(({ label, action }) => (
            <button
              key={label}
              onClick={action}
              className="font-pixel text-[11px] text-zinc-300 hover:text-white transition-colors tracking-wider cursor-pointer"
              style={{ textShadow: "0 0 6px rgba(255,255,255,0.2)" }}
              data-testid={`link-hero-${label.toLowerCase()}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right — CTA */}
        <button
          onClick={() => scrollTo("catalog")}
          className="font-pixel text-[10px] px-4 py-2 md:px-6 md:py-2.5 transition-all hover:scale-105 active:scale-95"
          style={{
            color: "#000",
            background: NEON_PINK,
            boxShadow: `0 0 14px ${NEON_PINK}, 0 0 28px ${NEON_PINK}66`,
          }}
          data-testid="button-hero-play-now"
        >
          CONNECT WALLET
        </button>
      </motion.nav>

      {/* ── Hero Content ── */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1
            className="font-pixel text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4"
            style={{
              color: NEON_PINK,
              textShadow: `0 0 20px ${NEON_PINK}, 0 0 50px ${NEON_PINK}88, 0 0 90px ${NEON_PINK}44`,
            }}
          >
            ZENORA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h2 className="font-pixel text-xl md:text-2xl text-white mb-6 uppercase tracking-wider text-glow">
            Own Your Childhood
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl font-sans"
        >
          Nostalgia + GameFi — Play, Earn, Remember. Every classic game, every
          memory, is now yours on the blockchain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="flex flex-col sm:flex-row gap-5 w-full justify-center"
        >
          <button
            onClick={() => scrollTo("catalog")}
            className="font-pixel py-4 px-8 text-sm md:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
            style={{
              color: NEON_PINK,
              border: `2px solid ${NEON_PINK}`,
              background: `${NEON_PINK}18`,
              boxShadow: `0 0 10px ${NEON_PINK}55`,
            }}
            data-testid="button-play-now"
          >
            Play Now
          </button>
          <button
            onClick={() => scrollTo("roadmap")}
            className="font-pixel py-4 px-8 text-sm md:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
            style={{
              color: "#00e5ff",
              border: "2px solid #00e5ff",
              background: "#00e5ff18",
              boxShadow: "0 0 10px #00e5ff55",
            }}
            data-testid="button-join-gamefi"
          >
            Join GameFi
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — arrow only, no text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 z-20 w-full flex justify-center cursor-pointer"
        onClick={() => scrollTo("catalog")}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-4 border-b-2 border-r-2 transform rotate-45"
          style={{ borderColor: NEON_PINK }}
        />
      </motion.div>
    </div>
  );
}
