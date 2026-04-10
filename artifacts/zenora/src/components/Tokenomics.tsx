import { motion } from "framer-motion";

const NEON_PINK = "#ff00aa";

const stats = [
  {
    icon: "⚔️",
    label: "SUPPLY",
    value: "1 Billion",
    accent: NEON_PINK,
    glow: `${NEON_PINK}22`,
    border: `${NEON_PINK}55`,
    bg: `linear-gradient(135deg, rgba(255,0,170,0.08), rgba(0,0,0,0.6))`,
  },
  {
    icon: "🔥",
    label: "LP STATUS",
    value: "Burned LP",
    accent: "#ff6600",
    glow: "rgba(255,102,0,0.15)",
    border: "rgba(255,102,0,0.4)",
    bg: `linear-gradient(135deg, rgba(255,102,0,0.07), rgba(0,0,0,0.6))`,
  },
  {
    icon: "💎",
    label: "TICKER",
    value: "$ZENORA",
    accent: "#00cfff",
    glow: "rgba(0,207,255,0.12)",
    border: "rgba(0,207,255,0.35)",
    bg: `linear-gradient(135deg, rgba(0,207,255,0.06), rgba(0,0,0,0.6))`,
  },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="w-full bg-black py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
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
              ZENORA GAMEFI
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
            TOKENOMICS
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto">
            Transparent and fair — built for a community that owns its future.
          </p>
        </motion.div>

        {/* 3 Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col items-center text-center"
              style={{
                background: stat.bg,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${stat.border}`,
                boxShadow: `0 0 28px ${stat.glow}, inset 0 0 20px ${stat.glow}`,
              }}
            >
              {/* Top accent strip */}
              <div
                className="w-full h-1"
                style={{
                  background: `linear-gradient(to right, ${stat.accent}, ${stat.accent}44)`,
                }}
              />

              <div className="p-8 flex flex-col items-center gap-4 w-full">
                {/* Icon */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                  className="text-4xl leading-none select-none"
                >
                  {stat.icon}
                </motion.div>

                {/* Label */}
                <span
                  className="font-pixel text-[9px] tracking-widest"
                  style={{ color: stat.accent }}
                >
                  {stat.label}
                </span>

                {/* Divider */}
                <div
                  className="w-12 h-px"
                  style={{ background: `${stat.accent}44` }}
                />

                {/* Value */}
                <span
                  className="font-pixel text-xl md:text-2xl leading-snug"
                  style={{
                    color: "#f4f4f4",
                    textShadow: `0 0 12px ${stat.accent}88`,
                  }}
                >
                  {stat.value}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
