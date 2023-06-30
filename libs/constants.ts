export const commands = [
  {
    name: "help",
    description: "Get help and information about the bot.",
    usage: "!help",
    subcommands: "None",
  },
  {
    name: "clan",
    description: "Manage your clan and clan members.",
    usage: "!clan <subcommand>",
    subcommands: "create, join, leave",
  },
  {
    name: "player",
    description: "Manage your player profile.",
    usage: "!player <subcommand>",
    subcommands: "info, stats, inventory",
  },
  {
    name: "goldpass",
    description: "Get information about the Gold Pass.",
    usage: "!goldpass",
    subcommands: "None",
  },
];

export const profiles = [
  {
    clashcommand: {
      author: "Clash Commander",
      avatar:
        "https://media.discordapp.net/attachments/1016867323006701588/1123667357672407060/clash_commander.png?size=96",
      roleColor: "#fffff",
      bot: true,
      verified: true,
    },
    palentier: {
      author: "Palentier",
      avatar:
        "https://cdn.discordapp.com/avatars/772176688980557846/3f813a6cefdb32e0d896645305a6db31.webp?size=80",
      roleColor: "#291353",
      bot: false,
      verified: false,
    },
    dominik: {
      author: "Dominik",
      avatar:
        "https://cdn.discordapp.com/avatars/347077478726238228/25242cace4c27ac9dc8fe1cb37d23d89.webp?size=128",
      roleColor: "#0096FF",
      bot: false,
      verified: false,
    },
  },
];
