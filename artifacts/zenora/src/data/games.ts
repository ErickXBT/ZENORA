export interface Game {
  id: string;
  title: string;
  image: string;
  category: string;
}

export const categories = [
  "New Games",
  "2 Player Games",
  "Action Games",
  "Adventure Games",
  "Car Games",
  "Card Games",
  "Casual Games",
  "Clicker Games",
  "Dirt Bike Games",
  "Driving Games",
  "Escape Games",
  "Fighting Games",
  "FNAF Games",
  "Gun Games",
  "Horror Games",
  "Idle Games",
  "IO Games",
  "Math Games",
  "Minecraft Games",
  "Multiplayer Games",
  "Puzzle Games",
  "Racing Games",
  "Shooting Games",
  "Skill Games",
  "Soccer Games",
  "Sports Games",
  "Stickman Games",
  "Zombie Games"
];

export const gamesData: { category: string; games: Game[] }[] = [
  {
    category: "New Games",
    games: [
      { id: "temple-run", title: "Temple Run", image: "https://img.gamemonetize.com/fzh3mjk6r0r5a2wq8t04fnlkasec7zv1/512x384.jpg", category: "New Games" },
      { id: "subway-surfers", title: "Subway Surfers", image: "https://img.gamemonetize.com/p8qlixkzmvajc65g7obryn2s3ewtdf40/512x384.jpg", category: "New Games" },
      { id: "stickman-hook", title: "Stickman Hook", image: "https://img.gamemonetize.com/m8kj3c7bvipqnax0g4yezdrlfs521o6h/512x384.jpg", category: "New Games" },
      { id: "angry-birds", title: "Angry Birds", image: "https://img.gamemonetize.com/d4h8n1p6kqzxwc0ve3r7sjfogamt5ily/512x384.jpg", category: "New Games" },
      { id: "hill-climb-racing", title: "Hill Climb Racing", image: "https://img.gamemonetize.com/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6/512x384.jpg", category: "New Games" },
      { id: "super-mario", title: "Super Mario", image: "https://img.gamemonetize.com/q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2/512x384.jpg", category: "New Games" },
      { id: "pac-man", title: "Pac-Man", image: "https://img.gamemonetize.com/g3h4i5j6k7l8m9n0o1p2q3r4s5t6u7v8/512x384.jpg", category: "New Games" },
      { id: "tetris", title: "Tetris", image: "https://img.gamemonetize.com/w9x0y1z2a3b4c5d6e7f8g9h0i1j2k3l4/512x384.jpg", category: "New Games" }
    ]
  },
  {
    category: "Action Games",
    games: [
      { id: "counter-strike", title: "Counter Strike", image: "https://img.gamemonetize.com/m5n6o7p8q9r0s1t2u3v4w5x6y7z8a9b0/512x384.jpg", category: "Action Games" },
      { id: "mortal-kombat", title: "Mortal Kombat", image: "https://img.gamemonetize.com/c1d2e3f4g5h6i7j8k9l0m1n2o3p4q5r6/512x384.jpg", category: "Action Games" },
      { id: "doom", title: "Doom", image: "https://img.gamemonetize.com/s7t8u9v0w1x2y3z4a5b6c7d8e9f0g1h2/512x384.jpg", category: "Action Games" },
      { id: "street-fighter", title: "Street Fighter", image: "https://img.gamemonetize.com/i3j4k5l6m7n8o9p0q1r2s3t4u5v6w7x8/512x384.jpg", category: "Action Games" },
      { id: "space-invaders", title: "Space Invaders", image: "https://img.gamemonetize.com/y9z0a1b2c3d4e5f6g7h8i9j0k1l2m3n4/512x384.jpg", category: "Action Games" },
      { id: "metal-slug", title: "Metal Slug", image: "https://img.gamemonetize.com/o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0/512x384.jpg", category: "Action Games" }
    ]
  },
  {
    category: "Puzzle Games",
    games: [
      { id: "2048", title: "2048", image: "https://img.gamemonetize.com/e1f2g3h4i5j6k7l8m9n0o1p2q3r4s5t6/512x384.jpg", category: "Puzzle Games" },
      { id: "sudoku", title: "Sudoku", image: "https://img.gamemonetize.com/u7v8w9x0y1z2a3b4c5d6e7f8g9h0i1j2/512x384.jpg", category: "Puzzle Games" },
      { id: "minesweeper", title: "Minesweeper", image: "https://img.gamemonetize.com/k3l4m5n6o7p8q9r0s1t2u3v4w5x6y7z8/512x384.jpg", category: "Puzzle Games" },
      { id: "solitaire", title: "Solitaire", image: "https://img.gamemonetize.com/a9b0c1d2e3f4g5h6i7j8k9l0m1n2o3p4/512x384.jpg", category: "Puzzle Games" },
      { id: "cut-the-rope", title: "Cut the Rope", image: "https://img.gamemonetize.com/q5r6s7t8u9v0w1x2y3z4a5b6c7d8e9f0/512x384.jpg", category: "Puzzle Games" },
      { id: "portal", title: "Portal", image: "https://img.gamemonetize.com/g1h2i3j4k5l6m7n8o9p0q1r2s3t4u5v6/512x384.jpg", category: "Puzzle Games" }
    ]
  },
  {
    category: "Racing Games",
    games: [
      { id: "mario-kart", title: "Mario Kart", image: "https://img.gamemonetize.com/w7x8y9z0a1b2c3d4e5f6g7h8i9j0k1l2/512x384.jpg", category: "Racing Games" },
      { id: "need-for-speed", title: "Need for Speed", image: "https://img.gamemonetize.com/m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8/512x384.jpg", category: "Racing Games" },
      { id: "burnout", title: "Burnout", image: "https://img.gamemonetize.com/c9d0e1f2g3h4i5j6k7l8m9n0o1p2q3r4/512x384.jpg", category: "Racing Games" },
      { id: "daytona-usa", title: "Daytona USA", image: "https://img.gamemonetize.com/s5t6u7v8w9x0y1z2a3b4c5d6e7f8g9h0/512x384.jpg", category: "Racing Games" }
    ]
  },
  {
    category: "Adventure Games",
    games: [
      { id: "zelda", title: "The Legend of Zelda", image: "https://img.gamemonetize.com/i1j2k3l4m5n6o7p8q9r0s1t2u3v4w5x6/512x384.jpg", category: "Adventure Games" },
      { id: "sonic", title: "Sonic the Hedgehog", image: "https://img.gamemonetize.com/y7z8a9b0c1d2e3f4g5h6i7j8k9l0m1n2/512x384.jpg", category: "Adventure Games" },
      { id: "contra", title: "Contra", image: "https://img.gamemonetize.com/o3p4q5r6s7t8u9v0w1x2y3z4a5b6c7d8/512x384.jpg", category: "Adventure Games" },
      { id: "mega-man", title: "Mega Man", image: "https://img.gamemonetize.com/e9f0g1h2i3j4k5l6m7n8o9p0q1r2s3t4/512x384.jpg", category: "Adventure Games" },
      { id: "castlevania", title: "Castlevania", image: "https://img.gamemonetize.com/u5v6w7x8y9z0a1b2c3d4e5f6g7h8i9j0/512x384.jpg", category: "Adventure Games" }
    ]
  },
  {
    category: "Sports Games",
    games: [
      { id: "fifa", title: "FIFA", image: "https://img.gamemonetize.com/k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6/512x384.jpg", category: "Sports Games" },
      { id: "nba-jam", title: "NBA Jam", image: "https://img.gamemonetize.com/a7b8c9d0e1f2g3h4i5j6k7l8m9n0o1p2/512x384.jpg", category: "Sports Games" },
      { id: "punch-out", title: "Punch-Out!!", image: "https://img.gamemonetize.com/q3r4s5t6u7v8w9x0y1z2a3b4c5d6e7f8/512x384.jpg", category: "Sports Games" },
      { id: "track-and-field", title: "Track & Field", image: "https://img.gamemonetize.com/g9h0i1j2k3l4m5n6o7p8q9r0s1t2u3v4/512x384.jpg", category: "Sports Games" }
    ]
  },
  {
    category: "Shooting Games",
    games: [
      { id: "galaga", title: "Galaga", image: "https://img.gamemonetize.com/w5x6y7z8a9b0c1d2e3f4g5h6i7j8k9l0/512x384.jpg", category: "Shooting Games" },
      { id: "asteroids", title: "Asteroids", image: "https://img.gamemonetize.com/m1n2o3p4q5r6s7t8u9v0w1x2y3z4a5b6/512x384.jpg", category: "Shooting Games" },
      { id: "duck-hunt", title: "Duck Hunt", image: "https://img.gamemonetize.com/c7d8e9f0g1h2i3j4k5l6m7n8o9p0q1r2/512x384.jpg", category: "Shooting Games" },
      { id: "halo", title: "Halo", image: "https://img.gamemonetize.com/s3t4u5v6w7x8y9z0a1b2c3d4e5f6g7h8/512x384.jpg", category: "Shooting Games" }
    ]
  },
  {
    category: "Multiplayer Games",
    games: [
      { id: "minecraft", title: "Minecraft", image: "https://img.gamemonetize.com/i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4/512x384.jpg", category: "Multiplayer Games" },
      { id: "among-us", title: "Among Us", image: "https://img.gamemonetize.com/y5z6a7b8c9d0e1f2g3h4i5j6k7l8m9n0/512x384.jpg", category: "Multiplayer Games" },
      { id: "fall-guys", title: "Fall Guys", image: "https://img.gamemonetize.com/o1p2q3r4s5t6u7v8w9x0y1z2a3b4c5d6/512x384.jpg", category: "Multiplayer Games" },
      { id: "bomberman", title: "Bomberman", image: "https://img.gamemonetize.com/e7f8g9h0i1j2k3l4m5n6o7p8q9r0s1t2/512x384.jpg", category: "Multiplayer Games" },
      { id: "double-dragon", title: "Double Dragon", image: "https://img.gamemonetize.com/u3v4w5x6y7z8a9b0c1d2e3f4g5h6i7j8/512x384.jpg", category: "Multiplayer Games" }
    ]
  },
  {
    category: "IO Games",
    games: [
      { id: "agar-io", title: "Agar.io", image: "https://img.gamemonetize.com/k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4/512x384.jpg", category: "IO Games" },
      { id: "slither-io", title: "Slither.io", image: "https://img.gamemonetize.com/a5b6c7d8e9f0g1h2i3j4k5l6m7n8o9p0/512x384.jpg", category: "IO Games" },
      { id: "diep-io", title: "Diep.io", image: "https://img.gamemonetize.com/q1r2s3t4u5v6w7x8y9z0a1b2c3d4e5f6/512x384.jpg", category: "IO Games" },
      { id: "krunker", title: "Krunker", image: "https://img.gamemonetize.com/g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2/512x384.jpg", category: "IO Games" }
    ]
  }
];

export const allGames = gamesData.flatMap(c => c.games);