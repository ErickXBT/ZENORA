import { motion } from "framer-motion";

const NEON_PINK = "#ff00aa";

const phases = [
  {
    phase: "PHASE 1",
    title: "Genesis",
    period: "Q1 2026",
    status: "completed",
    dot: "#00ff88",
    label: "COMPLETE",
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
    period: "Q2 2026",
    status: "active",
    dot: NEON_PINK,
    label: "IN PROGRESS",
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
    period: "Q3 2026",
    status: "upcoming",
    dot: "#4b5563",
    label: "UPCOMING",
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
    period: "Q4 2026",
    status: "upcoming",
    dot: "#4b5563",
    label: "UPCOMING",
    items: [
      "ZENORA DAO Governance",
      "Community Game Submissions",
      "Cross-Chain Integration",
      "Mobile App (iOS & Android)",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full bg-black py-20 px-4 md:px-10">
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
            ROADMAP
          </h2>
          <p className="font-sans text-zinc-400 max-w-xl mx-auto">
            From nostalgia to the blockchain — here is the journey ZENORA is taking to own your childhood.
          </p>
        </motion.div>

        {/* Progress connector bar */}
        <div className="hidden md:flex items-center justify-center mb-2 px-[calc(12.5%+32px)]">
          {phases.map((phase, i) => (
            <div key={phase.phase} className="flex items-center flex-1">
              <div
                className="w-5 h-5 flex-shrink-0 z-10"
                style={{
                  background: phase.dot,
                  boxShadow: `0 0 8px ${phase.dot}`,
                  clipPath: "polygon(0 4px,4px 4px,4px 0,calc(100% - 4px) 0,calc(100% - 4px) 4px,100% 4px,100% calc(100% - 4px),calc(100% - 4px) calc(100% - 4px),calc(100% - 4px) 100%,4px 100%,4px calc(100% - 4px),0 calc(100% - 4px))",
                }}
              />
              {i < phases.length - 1 && (
                <div
                  className="flex-1 h-px"
                  style={{
                    background: i < 1
                      ? `linear-gradient(to right, #00ff88, ${NEON_PINK})`
                      : "rgba(75,85,99,0.5)",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* 4 Horizontal Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {phases.map((phase, i) => {
            const isActive = phase.status === "active";
            const isCompleted = phase.status === "completed";

            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col h-full"
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, rgba(255,0,170,0.08), rgba(0,0,0,0.6))`
                    : isCompleted
                    ? "linear-gradient(135deg, rgba(0,255,136,0.06), rgba(0,0,0,0.55))"
                    : "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: `1px solid ${phase.dot}${isActive ? "88" : isCompleted ? "55" : "22"}`,
                  boxShadow: isActive
                    ? `0 0 24px ${NEON_PINK}22, inset 0 0 24px ${NEON_PINK}08`
                    : isCompleted
                    ? "0 0 16px rgba(0,255,136,0.1)"
                    : "none",
                }}
              >
                {/* Top accent strip */}
                <div
                  className="w-full h-1"
                  style={{
                    background: isActive
                      ? `linear-gradient(to right, ${NEON_PINK}, ${NEON_PINK}44)`
                      : isCompleted
                      ? "linear-gradient(to right, #00ff88, #00ff8844)"
                      : "rgba(75,85,99,0.3)",
                  }}
                />

                <div className="p-6 flex flex-col flex-1">
                  {/* Phase + Status badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="font-pixel text-[9px] tracking-widest"
                      style={{ color: phase.dot }}
                    >
                      {phase.phase}
                    </span>
                    <span
                      className="font-pixel text-[7px] px-2 py-1 tracking-wider"
                      style={{
                        color: phase.dot,
                        background: `${phase.dot}18`,
                        border: `1px solid ${phase.dot}44`,
                      }}
                    >
                      {phase.label}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-pixel text-base mb-1 leading-snug"
                    style={{ color: "#f4f4f4" }}
                  >
                    {phase.title}
                  </h3>

                  {/* Period */}
                  <p
                    className="font-pixel text-[9px] mb-5 tracking-wider"
                    style={{ color: phase.dot }}
                  >
                    {phase.period}
                  </p>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-5"
                    style={{ background: `${phase.dot}22` }}
                  />

                  {/* Items */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {phase.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 font-sans text-sm"
                        style={{
                          color: isActive || isCompleted ? "#d4d4d8" : "#71717a",
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 flex-shrink-0 mt-1.5"
                          style={{
                            background: phase.dot,
                            boxShadow: isActive || isCompleted
                              ? `0 0 4px ${phase.dot}`
                              : "none",
                          }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Completed checkmark */}
                  {isCompleted && (
                    <div
                      className="mt-5 flex items-center gap-2 font-pixel text-[9px]"
                      style={{ color: "#00ff88" }}
                    >
                      <span>✓</span>
                      <span>MILESTONE ACHIEVED</span>
                    </div>
                  )}

                  {/* Active pulse indicator */}
                  {isActive && (
                    <div className="mt-5 flex items-center gap-2">
                      <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                        className="w-2 h-2"
                        style={{ background: NEON_PINK, boxShadow: `0 0 6px ${NEON_PINK}` }}
                      />
                      <span
                        className="font-pixel text-[8px]"
                        style={{ color: NEON_PINK }}
                      >
                        LIVE NOW
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-pixel text-[10px] tracking-widest text-zinc-700 text-center mt-14"
        >
          — THE JOURNEY HAS JUST BEGUN —
        </motion.p>
      </div>
    </section>
  );
}
