import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: "Ronin Wallet Tracker",
    description: "Monitors Ronin wallet for ERC-20 token transfers and posts updates to Discord channel",
    tech: ["Python", "Web3.py", "Discord Webhooks"],
    link: "https://github.com/nocturnal625/ronin-wallet-tracker"
  },
  {
    title: "Sabong Saga Genesis Sales Tracker",
    description: "Tracks Genesis NFT sales on Mavis Market, posts updates to Discord channel",
    tech: ["Python", "GraphQL", "Discord Webhooks"],
    link: "https://github.com/nocturnal625/sabong-saga-genesis-sales"
  },
  {
    title: "Sabong Saga Genesis Listings Tracker",
    description: "Monitors NFT listings on Mavis Market, posts updates to Discord channel",
    tech: ["Python", "GraphQL", "Discord Webhooks"],
    link: "https://github.com/nocturnal625/sabong-saga-genesis-listings"
  },
  {
    title: "Sabong Saga Crypto Token & ERC20 Dashboard",
    description: "Real-time dashboard for tracking Sabong-Saga token and ERC-20 transfers",
    tech: ["Next.js", "Tailwind CSS", "Vercel", "GraphQL", "Ether.js"],
    link: "https://github.com/nocturnal625/sabong-saga-dashboard"
  },
  {
    title: "Sierra Weather Bot",
    description: "PH-timezone Discord weather alerts with command support",
    tech: ["Python", "NASA EONET API", "Matplotlib", "NumPy"],
    link: "https://github.com/nocturnal625/Sierra"
  },
  {
    title: "Crypto Price Bot",
    description: "Multi-currency crypto price tracker for Discord",
    tech: ["Python", "CoinGecko API", "Discord.py"],
    link: "https://github.com/nocturnal625/discord-crypto-price-bot"
  },
  {
    title: "Wild Forest NFT Sales Tracker",
    description: "Tracks sales data for the Wild Forest NFT Trading Contest",
    tech: ["Python", "GraphQL", "Discord.py", "FastAPI"],
    link: "https://github.com/nocturnal625/wild-forest-nft-sales-tracker"
  },
  {
    title: "Delubyo",
    description: "Interactive text-based survival game set during a Philippine typhoon",
    tech: ["TypeScript", "HTML/CSS", "Vercel"],
    link: "https://github.com/nocturnal625/delubyo"
  },
  {
    title: "Wild Forest Lords Staking Dashboard",
    description: "Dashboard to track and visualize staking statistics for Wild Forest Lords",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Redis", "Vercel"],
    link: "https://github.com/nocturnal625/wild-forest-lords-staking-dashboard"
  }
];