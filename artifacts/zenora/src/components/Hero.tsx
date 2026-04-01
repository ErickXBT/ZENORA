import { motion } from "framer-motion";
import heroBgVideo from "@assets/IMG_1907_1775045371133.MP4";
import { Link } from "wouter";

export function Hero() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById("catalog");
    if (catalog) {
      catalog.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center bg-black">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none" />
      <div className="absolute inset-0 crt-scanlines" />
      
      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-[-5dvh]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-pixel text-5xl md:text-7xl lg:text-8xl text-primary text-glow-lg tracking-tight mb-4">
            ZENORA
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="font-pixel text-xl md:text-2xl text-white mb-6 uppercase tracking-wider text-glow">
            Own Your Childhood
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg md:text-xl text-zinc-300 mb-12 max-w-2xl font-sans"
        >
          Nostalgia + GameFi — Play, Earn, Remember. Every classic game, every memory, is now yours on the blockchain.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full justify-center"
        >
          <button
            onClick={scrollToCatalog}
            className="pixel-corners pixel-border-primary bg-primary/10 hover:bg-primary/30 text-primary font-pixel py-4 px-8 text-sm md:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Play Now
          </button>
          <Link
            href="#"
            className="pixel-corners pixel-border-accent bg-accent/10 hover:bg-accent/30 text-accent font-pixel py-4 px-8 text-sm md:text-base uppercase tracking-wider transition-all hover:scale-105 active:scale-95"
          >
            Join GameFi
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToCatalog}
      >
        <span className="font-pixel text-[10px] text-zinc-500 uppercase tracking-widest">Insert Coin</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-4 h-4 border-b-2 border-r-2 border-primary transform rotate-45 mt-2"
        />
      </motion.div>
    </div>
  );
}