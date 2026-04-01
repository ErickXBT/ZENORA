export interface Game {
  id: string;
  title: string;
  image: string;
  href: string;
  category: string;
}

export const categories = [
  "New Games",
  "Best of New Games",
  "Most Liked Games of All Time",
  "Action Games",
  "Puzzle Games",
  "Two Player Games",
  "Shooting Games",
  "Adventure Games",
  "Strategy Games",
  "Sports Games",
  "Multiplayer Games",
  "Arcade Games",
  "Retro Games",
  "Racing Games",
  "Run Games",
  "Fighting Games",
  "Platform Games",
  "Educational Games",
  "Funny Games",
  "Cartoon Games"
];

export const gamesData: { category: string; games: Game[] }[] = [
  {
    category: "New Games",
    games: [
      { id: "friday-night-funkin-vs-isaac", title: "Friday Night Funkin vs Isaac", image: "https://img.kbhgames.com/2021/06/Friday-Night-Funkin-vs-Isaac.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-isaac", category: "New Games" },
      { id: "friday-night-funkin-vs-fancy-pants-2", title: "FNF vs Fancy Pants 2", image: "https://img.kbhgames.com/2021/06/FNF-vs-Fancy-Pants-2.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-fancy-pants-2", category: "New Games" },
      { id: "fnf-minecraft-creeper-vs-steve", title: "FNF: Minecraft Creeper vs Steve", image: "https://img.kbhgames.com/2021/06/fnf-minecraft-creeper-vs-steve.jpg", href: "https://kbhgames.com/game/fnf-minecraft-creeper-vs-steve", category: "New Games" },
      { id: "fnf-vs-parappa-prince-fleaswallow", title: "FNF vs PARAPPA (Prince Fleaswallow)", image: "https://img.kbhgames.com/2021/06/FNF-vs-PARAPPA-Prince-Fleaswallow-1.jpg", href: "https://kbhgames.com/game/fnf-vs-parappa-prince-fleaswallow", category: "New Games" },
      { id: "friday-night-funkin-vs-cheese", title: "Friday Night Funkin vs Cheese", image: "https://img.kbhgames.com/2021/06/Friday-Night-Funkin-vs-Cheese.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-cheese", category: "New Games" },
      { id: "fnf-expurgation-retrospecters-remix", title: "FNF: Expurgation RetroSpecters Remix", image: "https://img.kbhgames.com/2021/06/fnf-retrospecters-expurgation-remix.jpg", href: "https://kbhgames.com/game/fnf-expurgation-retrospecters-remix", category: "New Games" },
      { id: "fine-night-funkout-vs-clippy", title: "Fine Night Funkout VS Clippy", image: "https://img.kbhgames.com/2021/06/Fine-Night-Funkout-VS-Clippy.jpg", href: "https://kbhgames.com/game/fine-night-funkout-vs-clippy", category: "New Games" },
      { id: "friday-night-funkin-vs-the-changed-mod", title: "FNF Changed Mod", image: "https://img.kbhgames.com/2021/06/FNF-Changed-Mod.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-the-changed-mod", category: "New Games" },
      { id: "fnf-vs-shaggy-remastered", title: "FNF vs Shaggy Remastered", image: "https://img.kbhgames.com/2021/06/FNF-vs-Shaggy-Remastered.jpg", href: "https://kbhgames.com/game/fnf-vs-shaggy-remastered", category: "New Games" },
      { id: "friday-night-funkin-vs-weegeepie", title: "Friday Night Funkin vs Weegeepie", image: "https://img.kbhgames.com/2021/06/Friday-Night-Funkin-vs-Weegeepie.png", href: "https://kbhgames.com/game/friday-night-funkin-vs-weegeepie", category: "New Games" },
      { id: "friday-night-funkin-vs-avenue", title: "Friday Night Funkin vs Avenue", image: "https://img.kbhgames.com/2021/06/Friday-Night-Funkin-vs-Avenue.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-avenue", category: "New Games" },
      { id: "friday-night-bloxxin-vs-roblox-noob", title: "Friday Night Bloxxin vs Roblox Noob", image: "https://img.kbhgames.com/2021/06/Friday-Night-Bloxxin-vs-Roblox-Noob.jpg", href: "https://kbhgames.com/game/friday-night-bloxxin-vs-roblox-noob", category: "New Games" }
    ]
  },
  {
    category: "Best of New Games",
    games: [
      { id: "fnf-vs-tricky-version-2-0", title: "FNF Vs. Tricky Version 2.0 (Phase 3)", image: "https://img.kbhgames.com/2021/06/fnf-vs-tricky-version-2-0.jpg", href: "https://kbhgames.com/game/fnf-vs-tricky-version-2-0", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-impostor-among-us", title: "FNF vs Impostor Among Us v2", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-vs-impostor-full-week.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-impostor-among-us", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-shaggy", title: "Friday Night Funkin vs Shaggy v2", image: "https://img.kbhgames.com/2021/05/friday-night-funkin-vs-shaggy.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-shaggy", category: "Best of New Games" },
      { id: "fnf-vs-tabi-ex-boyfriend", title: "FNF vs TABI Ex Boyfriend", image: "https://img.kbhgames.com/2021/05/FNF-vs-TABI-Ex-Boyfriend.jpg", href: "https://kbhgames.com/game/fnf-vs-tabi-ex-boyfriend", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-agoti", title: "Friday Night Funkin vs AGOTI", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-AGOTI.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-agoti", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-bob", title: "Friday Night Funkin vs Bob", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Bob.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-bob", category: "Best of New Games" },
      { id: "friday-night-funkin-pico-school", title: "Friday Night Funkin: Pico School", image: "https://img.kbhgames.com/2021/05/picoschool.jpg", href: "https://kbhgames.com/game/friday-night-funkin-pico-school", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-sans", title: "Friday Night Funkin Vs. Sans", image: "https://img.kbhgames.com/2021/04/Friday-Night-Funkin-Vs.-Sans-2.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-sans", category: "Best of New Games" },
      { id: "friday-night-funkin-character-test-playground", title: "FNF Character Test Playground", image: "https://img.kbhgames.com/2021/06/FNF-Character-Test-Playground.jpg", href: "https://kbhgames.com/game/friday-night-funkin-character-test-playground", category: "Best of New Games" },
      { id: "friday-night-funkin-character-test-playground-2", title: "FNF Character Test Playground 2", image: "https://img.kbhgames.com/2021/06/FNF-Character-Test-Playground2.jpg", href: "https://kbhgames.com/game/friday-night-funkin-character-test-playground-2", category: "Best of New Games" },
      { id: "friday-night-funkin-starlight-mayhem", title: "FNF: Starlight Mayhem", image: "https://img.kbhgames.com/2021/05/friday-night-funkin-starlight-mayhem.jpg", href: "https://kbhgames.com/game/friday-night-funkin-starlight-mayhem", category: "Best of New Games" },
      { id: "friday-night-funkin-vs-monika-ddlc", title: "FNF vs Monika (DDLC) Full Week", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Monika-DDLC.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-monika-ddlc", category: "Best of New Games" }
    ]
  },
  {
    category: "Most Liked Games of All Time",
    games: [
      { id: "friday-night-funkin", title: "Friday Night Funkin", image: "https://img.kbhgames.com/2020/11/Friday-Night-Funkin.png", href: "https://kbhgames.com/game/friday-night-funkin", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-sarventes-mid-fight-masses", title: "Friday Night Funkin’ Sarventes Mid-Fight Masses", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-sarventes-mid-fight-masses-1.png", href: "https://kbhgames.com/game/friday-night-funkin-sarventes-mid-fight-masses", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-v-s-whitty-full-week", title: "Friday Night Funkin V.S. Whitty Full Week", image: "https://img.kbhgames.com/2021/03/friday-night-funkin-v-s-whitty-full-week.png", href: "https://kbhgames.com/game/friday-night-funkin-v-s-whitty-full-week", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-vs-sky-full-week", title: "Friday Night Funkin VS Sky Full Week", image: "https://img.kbhgames.com/2021/04/Friday-Night-Funkin-VS-Sky-Full-Week.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-sky-full-week", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-vs-garcello", title: "Friday Night Funkin VS Garcello", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-VS-Garcello.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-garcello", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-the-tricky-mod", title: "Friday Night Funkin’ Vs Tricky the Clown Mod", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-the-tricky-mod.png", href: "https://kbhgames.com/game/friday-night-funkin-the-tricky-mod", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-vs-hex-mod-full-week", title: "Friday Night Funkin Vs. Hex Mod Full Week", image: "https://img.kbhgames.com/2021/04/Friday-Night-Funkin-Vs.-Hex-Mod-Full-Week.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-hex-mod-full-week", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-hatsune-miku", title: "Friday Night Funkin + Hatsune Miku", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-hatsune-miku.jpg", href: "https://kbhgames.com/game/friday-night-funkin-hatsune-miku", category: "Most Liked Games of All Time" },
      { id: "bleach-vs-naruto-3", title: "Bleach Vs Naruto 3.3", image: "https://img.kbhgames.com/2017/07/Bleach-Vs-Naruto-3.jpg", href: "https://kbhgames.com/game/bleach-vs-naruto-3", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-but-bad", title: "Friday Night Funkin, but Bad", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-but-bad.png", href: "https://kbhgames.com/game/friday-night-funkin-but-bad", category: "Most Liked Games of All Time" },
      { id: "temple-run-2-online", title: "Temple Run 2 Online", image: "https://img.kbhgames.com/2016/02/template-run-2.jpg", href: "https://kbhgames.com/game/temple-run-2-online", category: "Most Liked Games of All Time" },
      { id: "friday-night-funkin-vs-tord", title: "FNF vs Tord/Tom/Edd", image: "https://img.kbhgames.com/2021/05/fnftordremastered.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-tord", category: "Most Liked Games of All Time" }
    ]
  },
  {
    category: "Action Games",
    games: [
      { id: "madness-off-color", title: "MADNESS: Off-Color", image: "https://img.kbhgames.com/2021/05/madness-off-color.jpg", href: "https://kbhgames.com/game/madness-off-color", category: "Action Games" },
      { id: "stick-it-to-the-stickman", title: "Stick it to the Stickman", image: "https://img.kbhgames.com/2021/05/Stick-it-to-the-Stickman.jpg", href: "https://kbhgames.com/game/stick-it-to-the-stickman", category: "Action Games" },
      { id: "drunken-table-wars", title: "Drunken Table Wars", image: "https://img.kbhgames.com/2021/04/Drunken-Table-Wars.png", href: "https://kbhgames.com/game/drunken-table-wars", category: "Action Games" },
      { id: "castle-crashing-the-beard-hd", title: "Castle Crashing the Beard HD", image: "https://img.kbhgames.com/2021/04/Castle-Crashing-the-Beard-HD.jpg", href: "https://kbhgames.com/game/castle-crashing-the-beard-hd", category: "Action Games" },
      { id: "adventure-time-break-the-worm", title: "Adventure Time Break The Worm", image: "https://img.kbhgames.com/2013/06/Adventure-Time-Break-The-Worm.jpg", href: "https://kbhgames.com/game/adventure-time-break-the-worm", category: "Action Games" },
      { id: "sonic-the-hedgehog-1995", title: "Sonic 1995", image: "https://img.kbhgames.com/2021/05/Sonic-The-Hedgehog-1995.jpg", href: "https://kbhgames.com/game/sonic-the-hedgehog-1995", category: "Action Games" },
      { id: "football-legends-2021", title: "Football Legends 2021", image: "https://img.kbhgames.com/2021/05/Football-Legends-2021.jpg", href: "https://kbhgames.com/game/football-legends-2021", category: "Action Games" },
      { id: "jungle-hero-2", title: "Jungle Hero 2", image: "https://img.kbhgames.com/2021/02/Jungle-Hero-2.jpg", href: "https://kbhgames.com/game/jungle-hero-2", category: "Action Games" },
      { id: "zombie-parade-defense-3", title: "Zombie Parade Defense 3", image: "https://img.kbhgames.com/2021/04/Zombie-Parade-Defense-3-1.png", href: "https://kbhgames.com/game/zombie-parade-defense-3", category: "Action Games" },
      { id: "castle-wars-middle-ages", title: "Castle Wars: Middle Ages", image: "https://img.kbhgames.com/2021/04/castle-wars-middle-ages.jpg", href: "https://kbhgames.com/game/castle-wars-middle-ages", category: "Action Games" },
      { id: "cartoon-network-skate-rush", title: "Cartoon Network: Skate Rush", image: "https://img.kbhgames.com/2021/05/cartoon-network-skate-rush.jpg", href: "https://kbhgames.com/game/cartoon-network-skate-rush", category: "Action Games" },
      { id: "rally-point", title: "Rally Point", image: "https://img.kbhgames.com/2021/06/Rally-Point.jpg", href: "https://kbhgames.com/game/rally-point", category: "Action Games" }
    ]
  },
  {
    category: "Puzzle Games",
    games: [
      { id: "deepest-sword", title: "Deepest Sword", image: "https://img.kbhgames.com/2021/04/Deepest-Sword.jpg", href: "https://kbhgames.com/game/deepest-sword", category: "Puzzle Games" },
      { id: "red-handed", title: "Red Handed", image: "https://img.kbhgames.com/2021/03/Red-Handed.jpg", href: "https://kbhgames.com/game/red-handed", category: "Puzzle Games" },
      { id: "zombie-parade-defense-3", title: "Zombie Parade Defense 3", image: "https://img.kbhgames.com/2021/04/Zombie-Parade-Defense-3-1.png", href: "https://kbhgames.com/game/zombie-parade-defense-3", category: "Puzzle Games" },
      { id: "sort-among-us", title: "Sort Among Us", image: "https://img.kbhgames.com/2021/05/Sort-Among-Us.jpg", href: "https://kbhgames.com/game/sort-among-us", category: "Puzzle Games" },
      { id: "a-taste-of-the-past", title: "A Taste of the Past", image: "https://img.kbhgames.com/2021/05/A-Taste-of-the-Past.jpg", href: "https://kbhgames.com/game/a-taste-of-the-past", category: "Puzzle Games" },
      { id: "game-cafe-escape", title: "Game Cafe Escape", image: "https://img.kbhgames.com/2021/06/Game-Cafe-Escape.jpg", href: "https://kbhgames.com/game/game-cafe-escape", category: "Puzzle Games" },
      { id: "fly-this", title: "Fly THIS!", image: "https://img.kbhgames.com/2021/05/Fly-THIS.jpg", href: "https://kbhgames.com/game/fly-this", category: "Puzzle Games" },
      { id: "conduct-this", title: "Conduct THIS!", image: "https://img.kbhgames.com/2021/02/Conduct-THIS.jpg", href: "https://kbhgames.com/game/conduct-this", category: "Puzzle Games" },
      { id: "admin", title: "Admin", image: "https://img.kbhgames.com/2021/04/Admin.png", href: "https://kbhgames.com/game/admin", category: "Puzzle Games" },
      { id: "jumphase", title: "Jumphase", image: "https://img.kbhgames.com/2021/06/Jumphase.jpg", href: "https://kbhgames.com/game/jumphase", category: "Puzzle Games" },
      { id: "im-outta-here", title: "Im Outta Here", image: "https://img.kbhgames.com/2021/03/Im-Outta-Here.jpg", href: "https://kbhgames.com/game/im-outta-here", category: "Puzzle Games" },
      { id: "pink", title: "Pink", image: "https://img.kbhgames.com/2021/05/Pink.jpg", href: "https://kbhgames.com/game/pink", category: "Puzzle Games" }
    ]
  },
  {
    category: "Two Player Games",
    games: [
      { id: "two-ball-3d-dark", title: "Two Ball 3D: Dark", image: "https://img.kbhgames.com/2021/05/two-ball-3d-dark.jpg", href: "https://kbhgames.com/game/two-ball-3d-dark", category: "Two Player Games" },
      { id: "stickman-supreme-duelist-2", title: "Stickman Supreme Duelist 2", image: "https://img.kbhgames.com/2021/03/Stickman-Supreme-Duelist-2.jpg", href: "https://kbhgames.com/game/stickman-supreme-duelist-2", category: "Two Player Games" },
      { id: "drunken-table-wars", title: "Drunken Table Wars", image: "https://img.kbhgames.com/2021/04/Drunken-Table-Wars.png", href: "https://kbhgames.com/game/drunken-table-wars", category: "Two Player Games" },
      { id: "mx-offroad-mountain-bike", title: "MX OffRoad Mountain Bike", image: "https://img.kbhgames.com/2021/03/MX-OffRoad-Mountain-Bike.jpg", href: "https://kbhgames.com/game/mx-offroad-mountain-bike", category: "Two Player Games" },
      { id: "castle-crashing-the-beard-hd", title: "Castle Crashing the Beard HD", image: "https://img.kbhgames.com/2021/04/Castle-Crashing-the-Beard-HD.jpg", href: "https://kbhgames.com/game/castle-crashing-the-beard-hd", category: "Two Player Games" },
      { id: "tic-tac-toe-mania", title: "Tic Tac Toe Mania", image: "https://img.kbhgames.com/2021/03/Tic-Tac-Toe-Mania.jpg", href: "https://kbhgames.com/game/tic-tac-toe-mania", category: "Two Player Games" },
      { id: "football-legends-2021", title: "Football Legends 2021", image: "https://img.kbhgames.com/2021/05/Football-Legends-2021.jpg", href: "https://kbhgames.com/game/football-legends-2021", category: "Two Player Games" },
      { id: "zombie-parade-defense-3", title: "Zombie Parade Defense 3", image: "https://img.kbhgames.com/2021/04/Zombie-Parade-Defense-3-1.png", href: "https://kbhgames.com/game/zombie-parade-defense-3", category: "Two Player Games" },
      { id: "castle-wars-middle-ages", title: "Castle Wars: Middle Ages", image: "https://img.kbhgames.com/2021/04/castle-wars-middle-ages.jpg", href: "https://kbhgames.com/game/castle-wars-middle-ages", category: "Two Player Games" },
      { id: "pocket-league-3d", title: "Pocket League 3D", image: "https://img.kbhgames.com/2021/03/Pocket-League-3D.jpg", href: "https://kbhgames.com/game/pocket-league-3d", category: "Two Player Games" },
      { id: "soccer-heads", title: "Soccer Heads", image: "https://img.kbhgames.com/2021/03/Soccer-Heads.jpg", href: "https://kbhgames.com/game/soccer-heads", category: "Two Player Games" },
      { id: "zombie-mission-7", title: "Zombie Mission 7", image: "https://img.kbhgames.com/2021/03/Zombie-Mission-7.jpg", href: "https://kbhgames.com/game/zombie-mission-7", category: "Two Player Games" }
    ]
  },
  {
    category: "Shooting Games",
    games: [
      { id: "madness-off-color", title: "MADNESS: Off-Color", image: "https://img.kbhgames.com/2021/05/madness-off-color.jpg", href: "https://kbhgames.com/game/madness-off-color", category: "Shooting Games" },
      { id: "mineworld-horror-the-mansion", title: "Mineworld Horror: The Mansion", image: "https://img.kbhgames.com/2021/03/mineworld-horror-the-mansion.jpg", href: "https://kbhgames.com/game/mineworld-horror-the-mansion", category: "Shooting Games" },
      { id: "red-handed", title: "Red Handed", image: "https://img.kbhgames.com/2021/03/Red-Handed.jpg", href: "https://kbhgames.com/game/red-handed", category: "Shooting Games" },
      { id: "jungle-hero-2", title: "Jungle Hero 2", image: "https://img.kbhgames.com/2021/02/Jungle-Hero-2.jpg", href: "https://kbhgames.com/game/jungle-hero-2", category: "Shooting Games" },
      { id: "ragdoll-fall", title: "Ragdoll Fall", image: "https://img.kbhgames.com/2021/03/Ragdoll-Fall.jpg", href: "https://kbhgames.com/game/ragdoll-fall", category: "Shooting Games" },
      { id: "gun-knight", title: "Gun Knight", image: "https://img.kbhgames.com/2021/03/Gun-Knight.jpg", href: "https://kbhgames.com/game/gun-knight", category: "Shooting Games" },
      { id: "gunner", title: "Gunner", image: "https://img.kbhgames.com/2021/06/Gunner.jpg", href: "https://kbhgames.com/game/gunner", category: "Shooting Games" },
      { id: "gun-orphan", title: "Gun Orphan", image: "https://img.kbhgames.com/2021/04/Gun-Orphan.png", href: "https://kbhgames.com/game/gun-orphan", category: "Shooting Games" },
      { id: "the-lost-night", title: "The Lost Night", image: "https://img.kbhgames.com/2021/03/The-Lost-Night.jpg", href: "https://kbhgames.com/game/the-lost-night", category: "Shooting Games" },
      { id: "the-fall-of-catzahstan", title: "The Fall of Catzahstan", image: "https://img.kbhgames.com/2021/05/The-Fall-of-Catzahstan.jpg", href: "https://kbhgames.com/game/the-fall-of-catzahstan", category: "Shooting Games" },
      { id: "bullet-heaven-3", title: "Bullet Heaven 3", image: "https://img.kbhgames.com/2021/02/Bullet-Heaven-3.jpg", href: "https://kbhgames.com/game/bullet-heaven-3", category: "Shooting Games" },
      { id: "super-raft-boat", title: "Super Raft Boat", image: "https://img.kbhgames.com/2021/02/Super-Raft-Boat.jpg", href: "https://kbhgames.com/game/super-raft-boat", category: "Shooting Games" }
    ]
  },
  {
    category: "Adventure Games",
    games: [
      { id: "pokemon-darkfire", title: "Pokemon Darkfire", image: "https://img.kbhgames.com/2021/04/Pokemon-Darkfire.png", href: "https://kbhgames.com/game/pokemon-darkfire", category: "Adventure Games" },
      { id: "adventure-time-break-the-worm", title: "Adventure Time Break The Worm", image: "https://img.kbhgames.com/2013/06/Adventure-Time-Break-The-Worm.jpg", href: "https://kbhgames.com/game/adventure-time-break-the-worm", category: "Adventure Games" },
      { id: "pokemon-radical-red-version", title: "Radical Red Version", image: "https://img.kbhgames.com/2021/06/Radical-Red-Version.jpg", href: "https://kbhgames.com/game/pokemon-radical-red-version", category: "Adventure Games" },
      { id: "pokemon-demon-island", title: "Pokemon Demon Island", image: "https://img.kbhgames.com/2021/04/Pokemon-Demon-Island.jpg", href: "https://kbhgames.com/game/pokemon-demon-island", category: "Adventure Games" },
      { id: "heat-rebirth", title: "Heat: Rebirth", image: "https://img.kbhgames.com/2021/04/Heat-Rebirth.jpg", href: "https://kbhgames.com/game/heat-rebirth", category: "Adventure Games" },
      { id: "nextdoor", title: "NextDoor", image: "https://img.kbhgames.com/2021/04/NextDoor-1.png", href: "https://kbhgames.com/game/nextdoor", category: "Adventure Games" },
      { id: "tower-of-the-scorched-sea", title: "Tower of the Scorched Sea", image: "https://img.kbhgames.com/2021/06/Tower-of-the-Scorched-Sea.jpg", href: "https://kbhgames.com/game/tower-of-the-scorched-sea", category: "Adventure Games" },
      { id: "senya-and-oscar-2", title: "Senya and Oscar 2", image: "https://img.kbhgames.com/2021/06/Senya-and-Oscar-2.jpg", href: "https://kbhgames.com/game/senya-and-oscar-2", category: "Adventure Games" },
      { id: "virtual-bart-redux", title: "Virtual Bart Redux", image: "https://img.kbhgames.com/2021/04/Virtual-Bart-Redux.jpg", href: "https://kbhgames.com/game/virtual-bart-redux", category: "Adventure Games" },
      { id: "pirate-fox-detective-the-case-of-the-conspicuous-klawz-crew", title: "Pirate Fox Detective: The Case of The Conspicuous Klawz Crew", image: "https://img.kbhgames.com/2021/05/pirate-fox-detective-the-case-of-the-conspicuous-klawz-crew.jpg", href: "https://kbhgames.com/game/pirate-fox-detective-the-case-of-the-conspicuous-klawz-crew", category: "Adventure Games" },
      { id: "rain-on-your-parade-prologue", title: "Rain on Your Parade Prologue", image: "https://img.kbhgames.com/2021/04/Rain-on-Your-Parade-Prologue.png", href: "https://kbhgames.com/game/rain-on-your-parade-prologue", category: "Adventure Games" },
      { id: "cursed-travels-flame-of-the-banshee", title: "Cursed Travels: Flame of the Banshee", image: "https://img.kbhgames.com/2021/04/cursed-travels-flame-of-the-banshee.jpg", href: "https://kbhgames.com/game/cursed-travels-flame-of-the-banshee", category: "Adventure Games" }
    ]
  },
  {
    category: "Strategy Games",
    games: [
      { id: "stick-war-legacy-2", title: "Stick War Legacy 2", image: "https://img.kbhgames.com/2021/03/Stick-War-Legacy-2.png", href: "https://kbhgames.com/game/stick-war-legacy-2", category: "Strategy Games" },
      { id: "pokemon-radical-red-version", title: "Radical Red Version", image: "https://img.kbhgames.com/2021/06/Radical-Red-Version.jpg", href: "https://kbhgames.com/game/pokemon-radical-red-version", category: "Strategy Games" },
      { id: "pokemon-demon-island", title: "Pokemon Demon Island", image: "https://img.kbhgames.com/2021/04/Pokemon-Demon-Island.jpg", href: "https://kbhgames.com/game/pokemon-demon-island", category: "Strategy Games" },
      { id: "castle-constructor", title: "Castle Constructor", image: "https://img.kbhgames.com/2021/03/Castle-Constructor.jpg", href: "https://kbhgames.com/game/castle-constructor", category: "Strategy Games" },
      { id: "power-the-grid", title: "Power The Grid", image: "https://img.kbhgames.com/2021/03/Power-The-Grid.jpg", href: "https://kbhgames.com/game/power-the-grid", category: "Strategy Games" },
      { id: "fe-8-the-eligors-spear", title: "FE8: The Eligor’s Spear", image: "https://img.kbhgames.com/2021/03/fe-8-the-eligors-spear.jpg", href: "https://kbhgames.com/game/fe-8-the-eligors-spear", category: "Strategy Games" },
      { id: "guild-of-zany", title: "Guild Of Zany", image: "https://img.kbhgames.com/2021/03/Guild-Of-Zany-1.jpg", href: "https://kbhgames.com/game/guild-of-zany", category: "Strategy Games" }
    ]
  },
  {
    category: "Sports Games",
    games: [
      { id: "football-legends-2021", title: "Football Legends 2021", image: "https://img.kbhgames.com/2021/05/Football-Legends-2021.jpg", href: "https://kbhgames.com/game/football-legends-2021", category: "Sports Games" },
      { id: "rally-point", title: "Rally Point", image: "https://img.kbhgames.com/2021/06/Rally-Point.jpg", href: "https://kbhgames.com/game/rally-point", category: "Sports Games" }
    ]
  },
  {
    category: "Multiplayer Games",
    games: [
      { id: "warfare-classic", title: "Warfare Classic", image: "https://img.kbhgames.com/2021/02/Warfare-Classic.jpg", href: "https://kbhgames.com/game/warfare-classic", category: "Multiplayer Games" },
      { id: "assault-bots", title: "Assault Bots", image: "https://img.kbhgames.com/2021/02/Assault-Bots.jpg", href: "https://kbhgames.com/game/assault-bots", category: "Multiplayer Games" },
      { id: "exploder-io", title: "Exploder.io", image: "https://img.kbhgames.com/2021/02/Exploder.io_.jpg", href: "https://kbhgames.com/game/exploder-io", category: "Multiplayer Games" },
      { id: "tankroyale-io", title: "TankRoyale.io", image: "https://img.kbhgames.com/2021/02/TankRoyale.io_.jpg", href: "https://kbhgames.com/game/tankroyale-io", category: "Multiplayer Games" },
      { id: "crosswords-arena", title: "Crosswords Arena", image: "https://img.kbhgames.com/2021/03/Crosswords-Arena.jpg", href: "https://kbhgames.com/game/crosswords-arena", category: "Multiplayer Games" }
    ]
  },
  {
    category: "Arcade Games",
    games: [
      { id: "friday-night-funkin-vs-tord", title: "FNF vs Tord/Tom/Edd", image: "https://img.kbhgames.com/2021/05/fnftordremastered.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-tord", category: "Arcade Games" },
      { id: "fnf-vs-tricky-version-2-0", title: "FNF Vs. Tricky Version 2.0 (Phase 3)", image: "https://img.kbhgames.com/2021/06/fnf-vs-tricky-version-2-0.jpg", href: "https://kbhgames.com/game/fnf-vs-tricky-version-2-0", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-impostor-among-us", title: "FNF vs Impostor Among Us v2", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-vs-impostor-full-week.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-impostor-among-us", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-shaggy", title: "Friday Night Funkin vs Shaggy v2", image: "https://img.kbhgames.com/2021/05/friday-night-funkin-vs-shaggy.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-shaggy", category: "Arcade Games" },
      { id: "fnf-vs-tabi-ex-boyfriend", title: "FNF vs TABI Ex Boyfriend", image: "https://img.kbhgames.com/2021/05/FNF-vs-TABI-Ex-Boyfriend.jpg", href: "https://kbhgames.com/game/fnf-vs-tabi-ex-boyfriend", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-agoti", title: "Friday Night Funkin vs AGOTI", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-AGOTI.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-agoti", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-bob", title: "Friday Night Funkin vs Bob", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Bob.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-bob", category: "Arcade Games" },
      { id: "friday-night-funkin-pico-school", title: "Friday Night Funkin: Pico School", image: "https://img.kbhgames.com/2021/05/picoschool.jpg", href: "https://kbhgames.com/game/friday-night-funkin-pico-school", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-sans", title: "Friday Night Funkin Vs. Sans", image: "https://img.kbhgames.com/2021/04/Friday-Night-Funkin-Vs.-Sans-2.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-sans", category: "Arcade Games" },
      { id: "friday-night-funkin-starlight-mayhem", title: "FNF: Starlight Mayhem", image: "https://img.kbhgames.com/2021/05/friday-night-funkin-starlight-mayhem.jpg", href: "https://kbhgames.com/game/friday-night-funkin-starlight-mayhem", category: "Arcade Games" },
      { id: "friday-night-funkin-vs-monika-ddlc", title: "FNF vs Monika (DDLC) Full Week", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Monika-DDLC.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-monika-ddlc", category: "Arcade Games" },
      { id: "fnf-ugh-pack", title: "FNF: UGH Pack", image: "https://img.kbhgames.com/2021/05/fnf-ugh-pack.jpg", href: "https://kbhgames.com/game/fnf-ugh-pack", category: "Arcade Games" }
    ]
  },
  {
    category: "Retro Games",
    games: [
      { id: "sonic-the-hedgehog-1995", title: "Sonic 1995", image: "https://img.kbhgames.com/2021/05/Sonic-The-Hedgehog-1995.jpg", href: "https://kbhgames.com/game/sonic-the-hedgehog-1995", category: "Retro Games" },
      { id: "wink-gameboy", title: "Wink GameBoy", image: "https://img.kbhgames.com/2021/04/Wink-GameBoy.jpg", href: "https://kbhgames.com/game/wink-gameboy", category: "Retro Games" }
    ]
  },
  {
    category: "Racing Games",
    games: [
      { id: "cartoon-network-skate-rush", title: "Cartoon Network: Skate Rush", image: "https://img.kbhgames.com/2021/05/cartoon-network-skate-rush.jpg", href: "https://kbhgames.com/game/cartoon-network-skate-rush", category: "Racing Games" },
      { id: "rally-point", title: "Rally Point", image: "https://img.kbhgames.com/2021/06/Rally-Point.jpg", href: "https://kbhgames.com/game/rally-point", category: "Racing Games" }
    ]
  },
  {
    category: "Run Games",
    games: [
      { id: "hinotori-rhythm", title: "Hinotori Rhythm", image: "https://img.kbhgames.com/2021/02/Hinotori-Rhythm.jpg", href: "https://kbhgames.com/game/hinotori-rhythm", category: "Run Games" },
      { id: "quantum-geometry", title: "Quantum Geometry", image: "https://img.kbhgames.com/2021/05/Quantum-Geometry.jpg", href: "https://kbhgames.com/game/quantum-geometry", category: "Run Games" },
      { id: "dino-rex", title: "Dino Rex", image: "https://img.kbhgames.com/2021/05/dinorex.jpg", href: "https://kbhgames.com/game/dino-rex", category: "Run Games" },
      { id: "the-last-guy", title: "The Last Guy", image: "https://img.kbhgames.com/2021/03/The-Last-Guy.jpg", href: "https://kbhgames.com/game/the-last-guy", category: "Run Games" }
    ]
  },
  {
    category: "Fighting Games",
    games: [
      { id: "madness-off-color", title: "MADNESS: Off-Color", image: "https://img.kbhgames.com/2021/05/madness-off-color.jpg", href: "https://kbhgames.com/game/madness-off-color", category: "Fighting Games" },
      { id: "stick-it-to-the-stickman", title: "Stick it to the Stickman", image: "https://img.kbhgames.com/2021/05/Stick-it-to-the-Stickman.jpg", href: "https://kbhgames.com/game/stick-it-to-the-stickman", category: "Fighting Games" },
      { id: "castle-crashing-the-beard-hd", title: "Castle Crashing the Beard HD", image: "https://img.kbhgames.com/2021/04/Castle-Crashing-the-Beard-HD.jpg", href: "https://kbhgames.com/game/castle-crashing-the-beard-hd", category: "Fighting Games" },
      { id: "senya-and-oscar-2", title: "Senya and Oscar 2", image: "https://img.kbhgames.com/2021/06/Senya-and-Oscar-2.jpg", href: "https://kbhgames.com/game/senya-and-oscar-2", category: "Fighting Games" },
      { id: "pixel-samurai", title: "Pixel Samurai", image: "https://img.kbhgames.com/2021/06/Pixel-Samurai.jpg", href: "https://kbhgames.com/game/pixel-samurai", category: "Fighting Games" },
      { id: "spirit-dungeons", title: "Spirit Dungeons", image: "https://img.kbhgames.com/2021/03/Spirit-Dungeons.jpg", href: "https://kbhgames.com/game/spirit-dungeons", category: "Fighting Games" }
    ]
  },
  {
    category: "Platform Games",
    games: [
      { id: "jungle-hero-2", title: "Jungle Hero 2", image: "https://img.kbhgames.com/2021/02/Jungle-Hero-2.jpg", href: "https://kbhgames.com/game/jungle-hero-2", category: "Platform Games" },
      { id: "jumphase", title: "Jumphase", image: "https://img.kbhgames.com/2021/06/Jumphase.jpg", href: "https://kbhgames.com/game/jumphase", category: "Platform Games" },
      { id: "tower-of-the-scorched-sea", title: "Tower of the Scorched Sea", image: "https://img.kbhgames.com/2021/06/Tower-of-the-Scorched-Sea.jpg", href: "https://kbhgames.com/game/tower-of-the-scorched-sea", category: "Platform Games" },
      { id: "zombie-mission-8", title: "Zombie Mission 8", image: "https://img.kbhgames.com/2021/06/Zombie-Mission-8-1.jpg", href: "https://kbhgames.com/game/zombie-mission-8", category: "Platform Games" },
      { id: "the-rise-of-dracula", title: "The Rise Of Dracula", image: "https://img.kbhgames.com/2021/05/The-Rise-Of-Dracula.jpg", href: "https://kbhgames.com/game/the-rise-of-dracula", category: "Platform Games" },
      { id: "mole", title: "MOLE", image: "https://img.kbhgames.com/2021/06/MOLE.jpg", href: "https://kbhgames.com/game/mole", category: "Platform Games" },
      { id: "boba-platformer", title: "BOBA Platformer", image: "https://img.kbhgames.com/2021/05/boba.jpg", href: "https://kbhgames.com/game/boba-platformer", category: "Platform Games" }
    ]
  },
  {
    category: "Educational Games",
    games: [
      { id: "game-cafe-escape", title: "Game Cafe Escape", image: "https://img.kbhgames.com/2021/06/Game-Cafe-Escape.jpg", href: "https://kbhgames.com/game/game-cafe-escape", category: "Educational Games" },
      { id: "pink", title: "Pink", image: "https://img.kbhgames.com/2021/05/Pink.jpg", href: "https://kbhgames.com/game/pink", category: "Educational Games" },
      { id: "chill-out", title: "Chill Out", image: "https://img.kbhgames.com/2021/05/Chill-Out.jpg", href: "https://kbhgames.com/game/chill-out", category: "Educational Games" },
      { id: "boxbob", title: "BoxBob", image: "https://img.kbhgames.com/2021/06/BoxBob.jpg", href: "https://kbhgames.com/game/boxbob", category: "Educational Games" },
      { id: "exit84", title: "Exit84", image: "https://img.kbhgames.com/2021/06/Exit84.jpg", href: "https://kbhgames.com/game/exit84", category: "Educational Games" },
      { id: "isocubes", title: "IsoCubes", image: "https://img.kbhgames.com/2021/05/IsoCubes.jpg", href: "https://kbhgames.com/game/isocubes", category: "Educational Games" },
      { id: "microsoft-word-twister", title: "Microsoft Word Twister", image: "https://img.kbhgames.com/2021/05/Microsoft-Word-Twister.jpg", href: "https://kbhgames.com/game/microsoft-word-twister", category: "Educational Games" },
      { id: "loihtija", title: "Loihtija", image: "https://img.kbhgames.com/2021/05/Loihtija.jpg", href: "https://kbhgames.com/game/loihtija", category: "Educational Games" }
    ]
  },
  {
    category: "Funny Games",
    games: [
      { id: "friday-night-funkin-sarventes-mid-fight-masses", title: "Friday Night Funkin’ Sarventes Mid-Fight Masses", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-sarventes-mid-fight-masses-1.png", href: "https://kbhgames.com/game/friday-night-funkin-sarventes-mid-fight-masses", category: "Funny Games" },
      { id: "friday-night-funkin-v-s-whitty-full-week", title: "Friday Night Funkin V.S. Whitty Full Week", image: "https://img.kbhgames.com/2021/03/friday-night-funkin-v-s-whitty-full-week.png", href: "https://kbhgames.com/game/friday-night-funkin-v-s-whitty-full-week", category: "Funny Games" },
      { id: "friday-night-funkin-the-tricky-mod", title: "Friday Night Funkin’ Vs Tricky the Clown Mod", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-the-tricky-mod.png", href: "https://kbhgames.com/game/friday-night-funkin-the-tricky-mod", category: "Funny Games" },
      { id: "friday-night-funkin-but-bad", title: "Friday Night Funkin, but Bad", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-but-bad.png", href: "https://kbhgames.com/game/friday-night-funkin-but-bad", category: "Funny Games" },
      { id: "friday-night-funkin-vs-bob", title: "Friday Night Funkin vs Bob", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Bob.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-bob", category: "Funny Games" },
      { id: "friday-night-funkin-b3-remixed", title: "Friday Night Funkin B3 REMIXED", image: "https://img.kbhgames.com/2021/03/Friday-Night-Funkin-B3-REMIXED.jpg", href: "https://kbhgames.com/game/friday-night-funkin-b3-remixed", category: "Funny Games" },
      { id: "vs-zardy-ronald-mcdonald", title: "FNF Vs Zardy  Ronald Mcdonald", image: "https://img.kbhgames.com/2021/04/Vs-Zardy-Ronald-Mcdonald.png", href: "https://kbhgames.com/game/vs-zardy-ronald-mcdonald", category: "Funny Games" },
      { id: "fnf-friday-night-sussin", title: "FNF: Friday Night Sussin", image: "https://img.kbhgames.com/2021/04/fnf-friday-night-sussin.jpg", href: "https://kbhgames.com/game/fnf-friday-night-sussin", category: "Funny Games" },
      { id: "fnf-smg4-if-mario-was-in-fnf-mod-pack", title: "FNF SMG4  If Mario Was In FNF Mod Pack", image: "https://img.kbhgames.com/2021/05/fnf-smg4-if-mario-was-in-fnf-mod-pack.jpg", href: "https://kbhgames.com/game/fnf-smg4-if-mario-was-in-fnf-mod-pack", category: "Funny Games" },
      { id: "friday-night-funkin-v-s-flexy-full-week", title: "Friday Night Funkin V.S. Flexy  Merchant", image: "https://img.kbhgames.com/2021/04/friday-night-funkin-v-s-flexy-full-week.jpg", href: "https://kbhgames.com/game/friday-night-funkin-v-s-flexy-full-week", category: "Funny Games" },
      { id: "friday-night-funkin-summer-vacation", title: "FNF: Summer Vacation", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-Summer-Vacations.jpg", href: "https://kbhgames.com/game/friday-night-funkin-summer-vacation", category: "Funny Games" },
      { id: "friday-night-funkin-vs-weegee", title: "Friday Night Funkin vs Weegee", image: "https://img.kbhgames.com/2021/05/Friday-Night-Funkin-vs-Weegee.jpg", href: "https://kbhgames.com/game/friday-night-funkin-vs-weegee", category: "Funny Games" }
    ]
  },
  {
    category: "Cartoon Games",
    games: [
      { id: "fnf-spinel-vs-steven", title: "FNF: Spinel vs. Steven", image: "https://img.kbhgames.com/2021/05/fnf-spinel-vs-steven.jpg", href: "https://kbhgames.com/game/fnf-spinel-vs-steven", category: "Cartoon Games" },
      { id: "cartoon-network-skate-rush", title: "Cartoon Network: Skate Rush", image: "https://img.kbhgames.com/2021/05/cartoon-network-skate-rush.jpg", href: "https://kbhgames.com/game/cartoon-network-skate-rush", category: "Cartoon Games" },
      { id: "craig-of-the-creek-recycle-squad", title: "Craig of the Creek: Recycle Squad", image: "https://img.kbhgames.com/2021/06/craig-of-the-creek-recycle-squad.jpg", href: "https://kbhgames.com/game/craig-of-the-creek-recycle-squad", category: "Cartoon Games" }
    ]
  }
];

export const allGames = gamesData.flatMap(c => c.games);
