import { motion } from "framer-motion";

const NEON_PINK = "#ff00aa";

const phases = [
  {
    phase: "PHASE 1",
    title: "Genesis",
    period: "Q1 2025",
    status: "completed",
    items: [
      "ZENORA Platform Launch",
      "Retro Game Catalog (500+ games)",
      "User Accounts & Profiles",
      "Game Categories & Search",
    ],
  },
  {
    phase: "PHASE 2",
    title: "Token Launch",
    period: "Q2 2025",
    status: "active",
    items: [
      "ZEN Token Generation Event",
      "Wallet Integration (MetaMask, Trust)",
      "NFT Game Collectibles Drop",
      "Early Adopter Rewards Pool",
    ],
  },
  {
    phase: "PHASE 3",
    title: "Play to Earn",
    period: "Q3 2025",
    status: "upcoming",
    items: [
      "P2E Mechanics Live",
      "Daily Quest Rewards",
      "Leaderboard & Tournaments",
      "Childhood Memory NFTs",
    ],
  },
  {
    phase: "PHASE 4",
    title: "Ecosystem",
    period: "Q4 2025",
    status: "upcoming",
    items: [
      "ZENORA DAO Governance",
      "Community Game Submissions",
      "Cross-Chain Integration",
      "Mobile App (iOS & Android)",
    ],
  },
];

const statusColors: Record<string, { dot: string; badge: string; label: string }> = {
  completed: {
    dot: "#00ff88",
    badge: "rgba(0,255,136,0.12)",
    label: "COMPLETE",
  },
  active: {
    dot: NEON_PINK,
    badge: `${NEON_PINK}18`,
    label: "IN PROGRESS",
  },
  upcoming: {
    dot: "#3f3f46",
    badge: "rgba(63,63,70,0.3)",
    label: "UPCOMING",
  },
};

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px flex-1 max-w-[80px]" style={{ background: `linear-gradient(to right, transparent, ${NEON_PINK})` }} />
            <span className="font-pixel text-[10px] tracking-widest" style={{ color: NEON_PINK }}>
              ZENORA GAMEFI
            </span>
            <div className="h-px flex-1 max-w-[80px]" style={{ background: `linear-gradient(to left, transparent, ${NEON_PINK})` }} />
          </div>
          <h2
            className="font-pixel text-3xl md:text-4xl mb-4"
            style={{
              color: NEON_PINK,
              textShadow: `0 0 16px ${NEON_PINK}, 0 0 40px ${NEON_PINK}66`,
            }}
          >
            ROADMAP
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto">
            From nostalgia to the blockchain — here is the journey ZENORA is taking to own your childhood.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center spine line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{ background: `linear-gradient(to bottom, ${NEON_PINK}66, transparent)` }}
          />

          <div className="flex flex-col gap-8">
            {phases.map((phase, i) => {
              const sc = statusColors[phase.status];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex flex-col md:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-0 md:gap-0`}
                >
                  {/* Card */}
                  <div className="w-full md:w-[calc(50%-32px)]">
                    <div
                      className="border p-6 relative"
                      style={{
                        borderColor: sc.dot,
                        background: sc.badge,
                        boxShadow: phase.status === "active"
                          ? `0 0 20px ${sc.dot}33, inset 0 0 20px ${sc.dot}0a`
                          : "none",
                      }}
                    >
                      {/* Phase label + badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className="font-pixel text-[9px] tracking-widest"
                          style={{ color: sc.dot }}
                        >
                          {phase.phase}
                        </span>
                        <span
                          className="font-pixel text-[8px] px-2 py-0.5"
                          style={{
                            color: sc.dot,
                            border: `1px solid ${sc.dot}66`,
                            background: `${sc.dot}15`,
                          }}
                        >
                          {sc.label}
                        </span>
                      </div>

                      <h3
                        className="font-pixel text-lg mb-1"
                        style={{ color: "#f4f4f4" }}
                      >
                        {phase.title}
                      </h3>
                      <p
                        className="font-pixel text-[9px] mb-5 tracking-wider"
                        style={{ color: sc.dot }}
                      >
                        {phase.period}
                      </p>

                      <ul className="flex flex-col gap-2">
                        {phase.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 font-sans text-sm text-zinc-400"
                          >
                            <span
                              className="w-1.5 h-1.5 flex-shrink-0 mt-1.5"
                              style={{ background: sc.dot }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center dot connector */}
                  <div className="hidden md:flex w-16 justify-center items-center flex-shrink-0 relative">
                    <div
                      className="w-4 h-4 z-10"
                      style={{
                        background: sc.dot,
                        boxShadow: `0 0 10px ${sc.dot}, 0 0 20px ${sc.dot}66`,
                      }}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-pixel text-[10px] tracking-widest text-zinc-600 mb-6">
            — THE JOURNEY HAS JUST BEGUN —
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-pixel text-[10px] px-8 py-3 transition-all hover:scale-105 active:scale-95"
            style={{
              color: NEON_PINK,
              border: `2px solid ${NEON_PINK}`,
              background: `${NEON_PINK}15`,
              boxShadow: `0 0 12px ${NEON_PINK}44`,
            }}
          >
            BACK TO TOP
          </button>
        </motion.div>
      </div>
    </section>
  );
}
