"use client"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CoinHolder {
  name: string;
  address: string;
  balance: string;
  value: string;
  percentage: string;
}

interface CoinData {
  name: string;
  symbol: string;
  price: string;
  priceChange: string;
  marketCap: string;
  volume: string;
  buys: number;
  sells: number;
  totalHolders: number;
  smartWallets: {
    count: number;
    holders: CoinHolder[];
  };
  concentration: {
    smartWallets: string;
    liquidityPools: string;
    regularHolders: string;
    top5: string;
    top10: string;
    top20: string;
    top50: string;
  };
  narrativeScore: string;
  metrics: {
    virality: string;
    originality: string;
    timeliness: string;
    memePotential: string;
    spreadFactors: string[];
    viralSpeed: string;
    barriers: string[];
  };
  description: string;
  contract: string;
  tags: string[];
}

interface CoinDatabase {
  [key: string]: CoinData;
}

interface CoinDetailModalProps {
  isOpen: boolean
  onClose: () => void
  coinSymbol: string
}

export function CoinDetailModal({ isOpen, onClose, coinSymbol }: CoinDetailModalProps) {
  // Replace the coinData object with this dynamic function
  const getCoinData = (symbol: string) => {
    const coinDatabase: CoinDatabase = {
      DOGE: {
        name: "Dogecoin",
        symbol: "DOGE",
        price: "$0.11218",
        priceChange: "+12.77%",
        marketCap: "$15.4B",
        volume: "$1.2B",
        buys: 1247,
        sells: 982,
        totalHolders: 4842,
        smartWallets: {
          count: 842,
          holders: [
            {
              name: "Whale",
              address: "0x89B5...",
              balance: "1.2B DOGE",
              value: "$134M",
              percentage: "2.47%",
            },
            {
              name: "DeepPocket",
              address: "0x7A3C...",
              balance: "890M DOGE",
              value: "$99.8M",
              percentage: "1.83%",
            },
            {
              name: "CryptoKing",
              address: "0x4F2E...",
              balance: "650M DOGE",
              value: "$72.9M",
              percentage: "1.34%",
            },
            {
              name: "DiamondHands",
              address: "0x9B8A...",
              balance: "420M DOGE",
              value: "$47.1M",
              percentage: "0.86%",
            },
            {
              name: "MoonShot",
              address: "0x6D5C...",
              balance: "380M DOGE",
              value: "$42.6M",
              percentage: "0.78%",
            },
          ],
        },
        concentration: {
          smartWallets: "8.45%",
          liquidityPools: "20.33%",
          regularHolders: "71.22%",
          top5: "14.85%",
          top10: "23.17%",
          top20: "36.68%",
          top50: "60.76%",
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "8/10",
          timeliness: "5/10",
          memePotential: "9/10",
          spreadFactors: ["High", "Medium", "High"],
          viralSpeed: "High",
          barriers: ["Market saturation", "Meme longevity"],
        },
        description:
          "Dogecoin (DOGE) embodies the fusion of internet meme culture with cryptocurrency, featuring a Shiba Inu dog as its mascot. It aims to capture the crypto community with humor and a unique aesthetic, highlighting the potential for virality amidst challenges in market sustainability.",
        contract: "0x1a2b3c...7890d",
        tags: ["Meme", "OG Meme Coin"],
      },
      SHIB: {
        name: "Shiba Inu",
        symbol: "SHIB",
        price: "$0.000024",
        priceChange: "+8.45%",
        marketCap: "$14.2B",
        volume: "$890M",
        buys: 1100,
        sells: 900,
        totalHolders: 1234567,
        smartWallets: {
          count: 1205,
          holders: [
            {
              name: "ShibArmyLeader",
              address: "0x45A7...",
              balance: "15T SHIB",
              value: "$360M",
              percentage: "1.22%",
            },
            {
              name: "BoneCollector",
              address: "0x9B2D...",
              balance: "10T SHIB",
              value: "$240M",
              percentage: "0.81%",
            },
            {
              name: "LeashHolder",
              address: "0x6E8F...",
              balance: "7.5T SHIB",
              value: "$180M",
              percentage: "0.61%",
            },
            {
              name: "TreatLover",
              address: "0x2C5A...",
              balance: "5T SHIB",
              value: "$120M",
              percentage: "0.41%",
            },
            {
              name: "BarkingMad",
              address: "0x7F1B...",
              balance: "3T SHIB",
              value: "$72M",
              percentage: "0.24%",
            },
          ],
        },
        concentration: {
          smartWallets: "12.34%",
          liquidityPools: "18.76%",
          regularHolders: "68.90%",
          top5: "22.45%",
          top10: "31.67%",
          top20: "45.23%",
          top50: "67.89%",
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "6/10",
          timeliness: "7/10",
          memePotential: "9/10",
          spreadFactors: ["Very High", "High", "Medium"],
          viralSpeed: "Very High",
          barriers: ["High supply", "Competition"],
        },
        description:
          "Shiba Inu (SHIB) is a decentralized meme token that grew into a vibrant ecosystem. The SHIB Army has built one of the strongest communities in crypto, driving adoption through social media campaigns and ecosystem development including ShibaSwap DEX.",
        contract: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
        tags: ["Meme", "Ecosystem"],
      },
      PEPE: {
        name: "Pepe",
        symbol: "PEPE",
        price: "$0.000018",
        priceChange: "+15.23%",
        marketCap: "$7.8B",
        volume: "$2.1B",
        buys: 1500,
        sells: 1030,
        totalHolders: 234567,
        smartWallets: {
          count: 567,
          holders: [
            {
              name: "PepeTheGreat",
              address: "0x78B9...",
              balance: "80T PEPE",
              value: "$1.44M",
              percentage: "0.61%",
            },
            {
              name: "FrogKing",
              address: "0x3C1A...",
              balance: "60T PEPE",
              value: "$1.08M",
              percentage: "0.46%",
            },
            {
              name: "GreenSkin",
              address: "0x5F4D...",
              balance: "45T PEPE",
              value: "$810K",
              percentage: "0.34%",
            },
            {
              name: "MemeLord",
              address: "0x1A9E...",
              balance: "30T PEPE",
              value: "$540K",
              percentage: "0.23%",
            },
            {
              name: "RibbitRich",
              address: "0x8D6C...",
              balance: "20T PEPE",
              value: "$360K",
              percentage: "0.15%",
            },
          ],
        },
        concentration: {
          smartWallets: "15.67%",
          liquidityPools: "25.43%",
          regularHolders: "58.90%",
          top5: "28.34%",
          top10: "39.12%",
          top20: "52.78%",
          top50: "71.23%",
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "10/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "10/10",
          spreadFactors: ["Extreme", "Very High", "High"],
          viralSpeed: "Extreme",
          barriers: ["Volatility", "Regulatory risk"],
        },
        description:
          "Pepe (PEPE) is the ultimate meme coin inspired by the iconic Pepe the Frog meme. With explosive viral potential and a dedicated community, PEPE represents the pure essence of internet culture in cryptocurrency form, capturing the zeitgeist of digital rebellion.",
        contract: "0x6982508145454Ce325dDbE47a25d4ec3d2311933",
        tags: ["Meme", "Viral"],
      },
      "pig wif hat": {
        name: "Pig Wif Hat",
        symbol: "PIG",
        price: "$0.0007576",
        priceChange: "+965.56%",
        marketCap: "$75.8M",
        volume: "$45.2M",
        buys: 2500,
        sells: 1060,
        totalHolders: 12456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "PiggyBank",
              address: "0x12C4...",
              balance: "20M PIG",
              value: "$15.16K",
              percentage: "1.61%",
            },
            {
              name: "OinkMaster",
              address: "0x5A8B...",
              balance: "15M PIG",
              value: "$11.36K",
              percentage: "1.21%",
            },
            {
              name: "TruffleHunter",
              address: "0x9D2F...",
              balance: "10M PIG",
              value: "$7.58K",
              percentage: "0.81%",
            },
            {
              name: "BaconKing",
              address: "0x4E7C...",
              balance: "7M PIG",
              value: "$5.30K",
              percentage: "0.56%",
            },
            {
              name: "HamHock",
              address: "0x7B3A...",
              balance: "5M PIG",
              value: "$3.79K",
              percentage: "0.40%",
            },
          ],
        },
        concentration: {
          smartWallets: "23.45%",
          liquidityPools: "35.67%",
          regularHolders: "40.88%",
          top5: "45.23%",
          top10: "58.91%",
          top20: "72.34%",
          top50: "89.12%",
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "8/10",
          originality: "7/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["New token", "Low liquidity"],
        },
        description:
          "Pig Wif Hat is a trending meme coin featuring a pig wearing a hat, riding the wave of 'wif hat' meme culture. This playful token has captured attention with its unique branding and community-driven approach, representing the evolution of animal-themed meme coins.",
        contract: "0x9876543210abcdef...",
        tags: ["Meme", "Trending"],
      },
      "TRUMP DOGS": {
        name: "Trump Dogs",
        symbol: "TRUMPDOGS",
        price: "$0.0004463",
        priceChange: "+368.32%",
        marketCap: "$44.6M",
        volume: "$28.9M",
        buys: 1900,
        sells: 1000,
        totalHolders: 8934,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "TrumpFan",
              address: "0x45F7...",
              balance: "10M TRUMPDOGS",
              value: "$4.46K",
              percentage: "1.12%",
            },
            {
              name: "MAGALover",
              address: "0x2B9C...",
              balance: "7.5M TRUMPDOGS",
              value: "$3.35K",
              percentage: "0.84%",
            },
            {
              name: "PatriotPup",
              address: "0x6D3E...",
              balance: "5M TRUMPDOGS",
              value: "$2.23K",
              percentage: "0.56%",
            },
            {
              name: "USAFirst",
              address: "0x8A1F...",
              balance: "3M TRUMPDOGS",
              value: "$1.34K",
              percentage: "0.34%",
            },
            {
              name: "RedWave",
              address: "0x1C5D...",
              balance: "2M TRUMPDOGS",
              value: "$893",
              percentage: "0.22%",
            },
          ],
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%",
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "7/10",
          originality: "5/10",
          timeliness: "9/10",
          memePotential: "6/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "High",
          barriers: ["Political sensitivity", "Market volatility"],
        },
        description:
          "Trump Dogs combines political memes with cryptocurrency, featuring dog-themed content related to political figures. This token rides on current events and political sentiment, appealing to supporters who want to express their political views through crypto investments.",
        contract: "0xabcdef1234567890...",
        tags: ["Political", "Meme"],
      },
      "Trump Dinner": {
        name: "Trump Dinner",
        symbol: "DINNER",
        price: "$0.000318",
        priceChange: "+346.06%",
        marketCap: "$31.8M",
        volume: "$19.7M",
        buys: 1700,
        sells: 1020,
        totalHolders: 6789,
        smartWallets: {
          count: 123,
          holders: [
            {
              name: "DinnerGuest",
              address: "0x89AB...",
              balance: "8M DINNER",
              value: "$2.54K",
              percentage: "1.18%",
            },
            {
              name: "TableTalker",
              address: "0x3C2D...",
              balance: "6M DINNER",
              value: "$1.91K",
              percentage: "0.88%",
            },
            {
              name: "PlatePusher",
              address: "0x5F7E...",
              balance: "4M DINNER",
              value: "$1.27K",
              percentage: "0.59%",
            },
            {
              name: "ForkLifter",
              address: "0x1A4C...",
              balance: "3M DINNER",
              value: "$954",
              percentage: "0.44%",
            },
            {
              name: "NapkinNinja",
              address: "0x7D8B...",
              balance: "2M DINNER",
              value: "$636",
              percentage: "0.29%",
            },
          ],
        },
        concentration: {
          smartWallets: "21.34%",
          liquidityPools: "32.56%",
          regularHolders: "46.10%",
          top5: "38.92%",
          top10: "52.67%",
          top20: "67.23%",
          top50: "83.45%",
        },
        narrativeScore: "4/10",
        metrics: {
          virality: "6/10",
          originality: "4/10",
          timeliness: "8/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Medium", "Low"],
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Limited utility"],
        },
        description:
          "Trump Dinner is a political meme token inspired by dinner events and political gatherings. It represents a specific moment in political culture translated into cryptocurrency form, capitalizing on viral moments and political discourse in the digital age.",
        contract: "0xfedcba0987654321...",
        tags: ["Political", "Event"],
      },
      "unstable coin": {
        name: "Unstable Coin",
        symbol: "UNSTABLE",
        price: "$0.000526",
        priceChange: "+36.73%",
        marketCap: "$52.6M",
        volume: "$12.4M",
        buys: 1300,
        sells: 1070,
        totalHolders: 15678,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "ChaosTrader",
              address: "0x34BC...",
              balance: "15M UNSTABLE",
              value: "$7.89K",
              percentage: "0.96%",
            },
            {
              name: "RogueWave",
              address: "0x5A1D...",
              balance: "12M UNSTABLE",
              value: "$6.31K",
              percentage: "0.77%",
            },
            {
              name: "WildCard",
              address: "0x9D6F...",
              balance: "9M UNSTABLE",
              value: "$4.73K",
              percentage: "0.58%",
            },
            {
              name: "QuakeMaker",
              address: "0x4E9A...",
              balance: "6M UNSTABLE",
              value: "$3.16K",
              percentage: "0.39%",
            },
            {
              name: "RippleEffect",
              address: "0x7B5C...",
              balance: "4M UNSTABLE",
              value: "$2.10K",
              percentage: "0.26%",
            },
          ],
        },
        concentration: {
          smartWallets: "16.78%",
          liquidityPools: "24.56%",
          regularHolders: "58.66%",
          top5: "29.45%",
          top10: "41.23%",
          top20: "56.78%",
          top50: "74.32%",
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "5/10",
          originality: "8/10",
          timeliness: "6/10",
          memePotential: "7/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Concept complexity", "Market education needed"],
        },
        description:
          "Unstable Coin embraces volatility as a feature, not a bug. This experimental token challenges traditional stablecoin concepts by celebrating price instability and market chaos, appealing to traders who thrive on unpredictability and high-risk, high-reward scenarios.",
        contract: "0x567890abcdef1234...",
        tags: ["Experimental", "DeFi"],
      },
      "Pepes Dog": {
        name: "Pepes Dog",
        symbol: "PEPESDOG",
        price: "$0.016",
        priceChange: "-53.37%",
        marketCap: "$16M",
        volume: "$8.9M",
        buys: 800,
        sells: 1100,
        totalHolders: 9876,
        smartWallets: {
          count: 178,
          holders: [
            {
              name: "DogFather",
              address: "0x67DE...",
              balance: "1.5M PEPESDOG",
              value: "$24K",
              percentage: "1.52%",
            },
            {
              name: "WoofMaster",
              address: "0x2C4A...",
              balance: "1.2M PEPESDOG",
              value: "$19.2K",
              percentage: "1.21%",
            },
            {
              name: "TailWagger",
              address: "0x5F9D...",
              balance: "900K PEPESDOG",
              value: "$14.4K",
              percentage: "0.91%",
            },
            {
              name: "FetchKing",
              address: "0x1A6E...",
              balance: "600K PEPESDOG",
              value: "$9.6K",
              percentage: "0.61%",
            },
            {
              name: "BarkAngel",
              address: "0x8D2C...",
              balance: "400K PEPESDOG",
              value: "$6.4K",
              percentage: "0.40%",
            },
          ],
        },
        concentration: {
          smartWallets: "19.87%",
          liquidityPools: "31.45%",
          regularHolders: "48.68%",
          top5: "34.56%",
          top10: "47.89%",
          top20: "62.34%",
          top50: "79.12%",
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "4/10",
          originality: "6/10",
          timeliness: "3/10",
          memePotential: "7/10",
          spreadFactors: ["Low", "Medium", "Medium"],
          viralSpeed: "Low",
          barriers: ["Market downturn", "Competition from PEPE"],
        },
        description:
          "Pepes Dog is a derivative meme token inspired by the popular Pepe meme but featuring a dog character. Despite recent price declines, it maintains a loyal community of dog and meme enthusiasts who believe in the crossover appeal of two beloved internet cultures.",
        contract: "0x234567890abcdef1...",
        tags: ["Meme", "Dog"],
      },
      "Bubblemaps": {
        name: "Bubblemaps",
        symbol: "BUBBLE",
        price: "$0.0000234",
        priceChange: "+12.5%",
        marketCap: "$2.34M",
        volume: "$1.2M",
        buys: 890,
        sells: 450,
        totalHolders: 5678,
        smartWallets: {
          count: 123,
          holders: [
            {
              name: "BubbleMaster",
              address: "0x23A4...",
              balance: "50M BUBBLE",
              value: "$1.17K",
              percentage: "2.14%",
            },
            {
              name: "MapTrader",
              address: "0x7B9C...",
              balance: "35M BUBBLE",
              value: "$819",
              percentage: "1.50%",
            },
            {
              name: "ChartWatcher",
              address: "0x4D2F...",
              balance: "25M BUBBLE",
              value: "$585",
              percentage: "1.07%",
            },
            {
              name: "TrendSpotter",
              address: "0x8E1A...",
              balance: "15M BUBBLE",
              value: "$351",
              percentage: "0.64%",
            },
            {
              name: "PatternFinder",
              address: "0x3C5D...",
              balance: "10M BUBBLE",
              value: "$234",
              percentage: "0.43%",
            }
          ]
        },
        concentration: {
          smartWallets: "15.67%",
          liquidityPools: "25.89%",
          regularHolders: "58.44%",
          top5: "32.78%",
          top10: "45.23%",
          top20: "58.91%",
          top50: "75.34%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "5/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education needed"]
        },
        description: "Bubblemaps is a data visualization tool for tracking token movements and market patterns. It provides unique insights into token distribution and trading patterns, helping traders make more informed decisions.",
        contract: "0x1234567890abcdef...",
        tags: ["Utility", "Data"]
      },
      "Launch On Pump": {
        name: "Launch On Pump",
        symbol: "PUMP",
        price: "$0.0000456",
        priceChange: "+18.3%",
        marketCap: "$4.56M",
        volume: "$2.8M",
        buys: 1200,
        sells: 680,
        totalHolders: 7890,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "PumpMaster",
              address: "0x34B5...",
              balance: "40M PUMP",
              value: "$1.82K",
              percentage: "1.82%",
            },
            {
              name: "LaunchTrader",
              address: "0x6C9D...",
              balance: "30M PUMP",
              value: "$1.37K",
              percentage: "1.37%",
            },
            {
              name: "TokenHunter",
              address: "0x5E2F...",
              balance: "20M PUMP",
              value: "$912",
              percentage: "0.91%",
            },
            {
              name: "EarlyBird",
              address: "0x9A1B...",
              balance: "15M PUMP",
              value: "$684",
              percentage: "0.68%",
            },
            {
              name: "TrendSetter",
              address: "0x2D4C...",
              balance: "10M PUMP",
              value: "$456",
              percentage: "0.46%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "7/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "6/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"]
        },
        description: "Launch On Pump is a platform that helps identify and track new token launches with high potential. It provides real-time analytics and insights for traders looking to capitalize on early-stage opportunities.",
        contract: "0xabcdef1234567890...",
        tags: ["Platform", "Analytics"]
      },
      "PancakeSwap": {
        name: "PancakeSwap",
        symbol: "CAKE",
        price: "$2.34",
        priceChange: "+5.2%",
        marketCap: "$234M",
        volume: "$45.6M",
        buys: 8900,
        sells: 5600,
        totalHolders: 45678,
        smartWallets: {
          count: 890,
          holders: [
            {
              name: "CakeBaker",
              address: "0x45F7...",
              balance: "100K CAKE",
              value: "$234K",
              percentage: "1.12%",
            },
            {
              name: "SwapMaster",
              address: "0x2B9C...",
              balance: "75K CAKE",
              value: "$175.5K",
              percentage: "0.84%",
            },
            {
              name: "SyrupCollector",
              address: "0x6D3E...",
              balance: "50K CAKE",
              value: "$117K",
              percentage: "0.56%",
            },
            {
              name: "FarmOwner",
              address: "0x8A1F...",
              balance: "30K CAKE",
              value: "$70.2K",
              percentage: "0.34%",
            },
            {
              name: "PoolProvider",
              address: "0x1C5D...",
              balance: "20K CAKE",
              value: "$46.8K",
              percentage: "0.22%",
            }
          ]
        },
        concentration: {
          smartWallets: "12.34%",
          liquidityPools: "35.67%",
          regularHolders: "51.99%",
          top5: "22.45%",
          top10: "31.67%",
          top20: "45.23%",
          top50: "67.89%"
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "6/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Market competition", "Regulatory compliance"]
        },
        description: "PancakeSwap is a leading decentralized exchange (DEX) on the Binance Smart Chain, offering fast and low-cost trading with a wide range of features including yield farming, staking, and lottery games.",
        contract: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
        tags: ["DEX", "DeFi"]
      },
      "$BEAR": {
        name: "Brown Bear",
        symbol: "$BEAR",
        price: "$0.00042",
        priceChange: "+28.7%",
        marketCap: "$4.2M",
        volume: "$2.1M",
        buys: 1200,
        sells: 800,
        totalHolders: 3456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "BearTrader",
              address: "0x45F7...",
              balance: "10M BEAR",
              value: "$4.2K",
              percentage: "1.22%",
            },
            {
              name: "HoneyCollector",
              address: "0x2B9C...",
              balance: "7.5M BEAR",
              value: "$3.15K",
              percentage: "0.91%",
            },
            {
              name: "CaveDweller",
              address: "0x6D3E...",
              balance: "5M BEAR",
              value: "$2.1K",
              percentage: "0.61%",
            },
            {
              name: "ForestKing",
              address: "0x8A1F...",
              balance: "3M BEAR",
              value: "$1.26K",
              percentage: "0.37%",
            },
            {
              name: "WildBear",
              address: "0x1C5D...",
              balance: "2M BEAR",
              value: "$840",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "8/10",
          originality: "7/10",
          timeliness: "8/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Market timing", "Competition"]
        },
        description: "Brown Bear ($BEAR) is a meme token featuring a lovable brown bear character. The token combines cute animal appeal with crypto culture, creating a unique niche in the meme coin space.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Animal"]
      },
      "$ADHD": {
        name: "ADHD Token",
        symbol: "$ADHD",
        price: "$0.00018",
        priceChange: "+22.3%",
        marketCap: "$1.8M",
        volume: "$900K",
        buys: 1500,
        sells: 700,
        totalHolders: 2345,
        smartWallets: {
          count: 156,
          holders: [
            {
              name: "FocusMaster",
              address: "0x34B5...",
              balance: "20M ADHD",
              value: "$3.6K",
              percentage: "1.82%",
            },
            {
              name: "HyperTrader",
              address: "0x6C9D...",
              balance: "15M ADHD",
              value: "$2.7K",
              percentage: "1.37%",
            },
            {
              name: "EnergyBurst",
              address: "0x5E2F...",
              balance: "10M ADHD",
              value: "$1.8K",
              percentage: "0.91%",
            },
            {
              name: "QuickMind",
              address: "0x9A1B...",
              balance: "7.5M ADHD",
              value: "$1.35K",
              percentage: "0.68%",
            },
            {
              name: "BrainWave",
              address: "0x2D4C...",
              balance: "5M ADHD",
              value: "$900",
              percentage: "0.46%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Niche appeal", "Community building"]
        },
        description: "ADHD Token ($ADHD) is a community-driven token that aims to raise awareness about ADHD while creating a fun and engaging crypto experience. The token combines humor with a serious message about neurodiversity.",
        contract: "0xabcdef1234567890...",
        tags: ["Community", "Awareness"]
      },
      "$KITTY": {
        name: "Hello Kitty",
        symbol: "$KITTY",
        price: "$0.00076",
        priceChange: "+19.8%",
        marketCap: "$7.6M",
        volume: "$3.8M",
        buys: 1800,
        sells: 900,
        totalHolders: 4567,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "KittyLover",
              address: "0x45F7...",
              balance: "15M KITTY",
              value: "$11.4K",
              percentage: "1.22%",
            },
            {
              name: "PinkDream",
              address: "0x2B9C...",
              balance: "12M KITTY",
              value: "$9.12K",
              percentage: "0.98%",
            },
            {
              name: "CuteCollector",
              address: "0x6D3E...",
              balance: "8M KITTY",
              value: "$6.08K",
              percentage: "0.65%",
            },
            {
              name: "SweetHeart",
              address: "0x8A1F...",
              balance: "5M KITTY",
              value: "$3.8K",
              percentage: "0.41%",
            },
            {
              name: "StarLight",
              address: "0x1C5D...",
              balance: "3M KITTY",
              value: "$2.28K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "9/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "9/10",
          spreadFactors: ["Very High", "High", "High"],
          viralSpeed: "Very High",
          barriers: ["Brand licensing", "Market saturation"]
        },
        description: "Hello Kitty ($KITTY) is a meme token inspired by the iconic Sanrio character. The token combines the global appeal of Hello Kitty with the excitement of cryptocurrency, creating a unique blend of pop culture and digital assets.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Pop Culture"]
      },
      "$ROBOT": {
        name: "Robot Face",
        symbol: "$ROBOT",
        price: "$0.00231",
        priceChange: "+17.5%",
        marketCap: "$23.1M",
        volume: "$11.5M",
        buys: 2100,
        sells: 1200,
        totalHolders: 6789,
        smartWallets: {
          count: 345,
          holders: [
            {
              name: "RoboTrader",
              address: "0x45F7...",
              balance: "5M ROBOT",
              value: "$11.55K",
              percentage: "1.22%",
            },
            {
              name: "CircuitMaster",
              address: "0x2B9C...",
              balance: "4M ROBOT",
              value: "$9.24K",
              percentage: "0.98%",
            },
            {
              name: "TechWizard",
              address: "0x6D3E...",
              balance: "3M ROBOT",
              value: "$6.93K",
              percentage: "0.73%",
            },
            {
              name: "BinaryKing",
              address: "0x8A1F...",
              balance: "2M ROBOT",
              value: "$4.62K",
              percentage: "0.49%",
            },
            {
              name: "DataLord",
              address: "0x1C5D...",
              balance: "1M ROBOT",
              value: "$2.31K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "8/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Tech focus", "Market education"]
        },
        description: "Robot Face ($ROBOT) is a tech-themed meme token that combines artificial intelligence aesthetics with cryptocurrency. The token appeals to tech enthusiasts and crypto traders who appreciate the intersection of robotics and digital assets.",
        contract: "0xabcdef1234567890...",
        tags: ["Tech", "AI"]
      },
      "$YARD": {
        name: "Dogs Yard",
        symbol: "$YARD",
        price: "$0.00058",
        priceChange: "+15.2%",
        marketCap: "$5.8M",
        volume: "$2.9M",
        buys: 1600,
        sells: 950,
        totalHolders: 3456,
        smartWallets: {
          count: 234,
          holders: [
            {
              name: "YardMaster",
              address: "0x45F7...",
              balance: "12M YARD",
              value: "$6.96K",
              percentage: "1.22%",
            },
            {
              name: "PupCollector",
              address: "0x2B9C...",
              balance: "9M YARD",
              value: "$5.22K",
              percentage: "0.91%",
            },
            {
              name: "BoneHunter",
              address: "0x6D3E...",
              balance: "6M YARD",
              value: "$3.48K",
              percentage: "0.61%",
            },
            {
              name: "TailWagger",
              address: "0x8A1F...",
              balance: "4M YARD",
              value: "$2.32K",
              percentage: "0.41%",
            },
            {
              name: "FetchKing",
              address: "0x1C5D...",
              balance: "2M YARD",
              value: "$1.16K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "7/10",
          memePotential: "8/10",
          spreadFactors: ["High", "Medium", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Market timing", "Competition"]
        },
        description: "Dogs Yard ($YARD) is a community-focused token that celebrates the joy of dogs and outdoor play. The token combines the universal appeal of dogs with the excitement of cryptocurrency, creating a fun and engaging community experience.",
        contract: "0xabcdef1234567890...",
        tags: ["Community", "Dogs"]
      },
      "$NERD": {
        name: "Nerd Token",
        symbol: "$NERD",
        price: "$0.00124",
        priceChange: "+12.9%",
        marketCap: "$12.4M",
        volume: "$6.2M",
        buys: 1900,
        sells: 1100,
        totalHolders: 5678,
        smartWallets: {
          count: 312,
          holders: [
            {
              name: "CodeMaster",
              address: "0x45F7...",
              balance: "8M NERD",
              value: "$9.92K",
              percentage: "1.22%",
            },
            {
              name: "TechGeek",
              address: "0x2B9C...",
              balance: "6M NERD",
              value: "$7.44K",
              percentage: "0.91%",
            },
            {
              name: "PixelPusher",
              address: "0x6D3E...",
              balance: "4M NERD",
              value: "$4.96K",
              percentage: "0.61%",
            },
            {
              name: "BinaryBrain",
              address: "0x8A1F...",
              balance: "3M NERD",
              value: "$3.72K",
              percentage: "0.46%",
            },
            {
              name: "DataDork",
              address: "0x1C5D...",
              balance: "2M NERD",
              value: "$2.48K",
              percentage: "0.30%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "7/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Niche appeal", "Tech focus"]
        },
        description: "Nerd Token ($NERD) celebrates tech culture and intellectual curiosity in the crypto space. The token combines geek culture with cryptocurrency, appealing to tech enthusiasts and those who embrace their inner nerd.",
        contract: "0xabcdef1234567890...",
        tags: ["Tech", "Community"]
      },
      "$DOTS": {
        name: "Dot Pattern",
        symbol: "$DOTS",
        price: "$0.00037",
        priceChange: "+10.4%",
        marketCap: "$3.7M",
        volume: "$1.85M",
        buys: 1400,
        sells: 850,
        totalHolders: 2345,
        smartWallets: {
          count: 178,
          holders: [
            {
              name: "DotMaster",
              address: "0x45F7...",
              balance: "15M DOTS",
              value: "$5.55K",
              percentage: "1.22%",
            },
            {
              name: "PatternKing",
              address: "0x2B9C...",
              balance: "12M DOTS",
              value: "$4.44K",
              percentage: "0.98%",
            },
            {
              name: "PixelArtist",
              address: "0x6D3E...",
              balance: "8M DOTS",
              value: "$2.96K",
              percentage: "0.65%",
            },
            {
              name: "DesignWizard",
              address: "0x8A1F...",
              balance: "5M DOTS",
              value: "$1.85K",
              percentage: "0.41%",
            },
            {
              name: "ArtCollector",
              address: "0x1C5D...",
              balance: "3M DOTS",
              value: "$1.11K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "9/10",
          timeliness: "7/10",
          memePotential: "6/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Artistic focus", "Market education"]
        },
        description: "Dot Pattern ($DOTS) is an art-focused token that celebrates digital patterns and pixel art. The token combines artistic expression with cryptocurrency, appealing to digital artists and collectors in the crypto space.",
        contract: "0xabcdef1234567890...",
        tags: ["Art", "Digital"]
      },
      "$KILLBILL": {
        name: "Kill Bill",
        symbol: "$KILLBILL",
        price: "$0.00089",
        priceChange: "+45.6%",
        marketCap: "$8.9M",
        volume: "$4.45M",
        buys: 2200,
        sells: 950,
        totalHolders: 4567,
        smartWallets: {
          count: 289,
          holders: [
            {
              name: "SwordMaster",
              address: "0x45F7...",
              balance: "10M KILLBILL",
              value: "$8.9K",
              percentage: "1.22%",
            },
            {
              name: "RevengeSeeker",
              address: "0x2B9C...",
              balance: "8M KILLBILL",
              value: "$7.12K",
              percentage: "0.98%",
            },
            {
              name: "YellowSuit",
              address: "0x6D3E...",
              balance: "5M KILLBILL",
              value: "$4.45K",
              percentage: "0.65%",
            },
            {
              name: "HattoriHanzo",
              address: "0x8A1F...",
              balance: "3M KILLBILL",
              value: "$2.67K",
              percentage: "0.41%",
            },
            {
              name: "BrideWarrior",
              address: "0x1C5D...",
              balance: "2M KILLBILL",
              value: "$1.78K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "8/10",
        metrics: {
          virality: "9/10",
          originality: "8/10",
          timeliness: "9/10",
          memePotential: "8/10",
          spreadFactors: ["High", "High", "High"],
          viralSpeed: "High",
          barriers: ["Copyright concerns", "Market volatility"]
        },
        description: "Kill Bill ($KILLBILL) is a pop culture token inspired by the iconic film. The token combines cinematic nostalgia with cryptocurrency, appealing to movie fans and crypto enthusiasts who appreciate cultural references.",
        contract: "0xabcdef1234567890...",
        tags: ["Pop Culture", "Movie"]
      },
      "$CULTS": {
        name: "Cults Token",
        symbol: "$CULTS",
        price: "$0.00067",
        priceChange: "+38.9%",
        marketCap: "$6.7M",
        volume: "$3.35M",
        buys: 2000,
        sells: 1000,
        totalHolders: 5678,
        smartWallets: {
          count: 345,
          holders: [
            {
              name: "CultLeader",
              address: "0x45F7...",
              balance: "12M CULTS",
              value: "$8.04K",
              percentage: "1.22%",
            },
            {
              name: "RitualMaster",
              address: "0x2B9C...",
              balance: "9M CULTS",
              value: "$6.03K",
              percentage: "0.91%",
            },
            {
              name: "SecretKeeper",
              address: "0x6D3E...",
              balance: "6M CULTS",
              value: "$4.02K",
              percentage: "0.61%",
            },
            {
              name: "MysticTrader",
              address: "0x8A1F...",
              balance: "4M CULTS",
              value: "$2.68K",
              percentage: "0.41%",
            },
            {
              name: "Occultist",
              address: "0x1C5D...",
              balance: "2M CULTS",
              value: "$1.34K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "8/10",
          originality: "9/10",
          timeliness: "8/10",
          memePotential: "7/10",
          spreadFactors: ["High", "High", "Medium"],
          viralSpeed: "High",
          barriers: ["Sensitive topic", "Market education"]
        },
        description: "Cults Token ($CULTS) is a unique meme token that explores the intersection of internet culture and cryptocurrency communities. The token combines humor with social commentary, appealing to those who understand the meta-narrative of crypto culture.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Meta"]
      },
      LUNA: {
        name: "Terra Luna",
        symbol: "LUNA",
        price: "$0.00034",
        priceChange: "-42.18%",
        marketCap: "$340M",
        volume: "$89M",
        buys: 1200,
        sells: 1800,
        totalHolders: 234567,
        smartWallets: {
          count: 890,
          holders: [
            {
              name: "LunaWhale",
              address: "0x45F7...",
              balance: "100M LUNA",
              value: "$34K",
              percentage: "1.22%",
            },
            {
              name: "TerraTrader",
              address: "0x2B9C...",
              balance: "75M LUNA",
              value: "$25.5K",
              percentage: "0.91%",
            },
            {
              name: "StableSeeker",
              address: "0x6D3E...",
              balance: "50M LUNA",
              value: "$17K",
              percentage: "0.61%",
            },
            {
              name: "AnchorHolder",
              address: "0x8A1F...",
              balance: "30M LUNA",
              value: "$10.2K",
              percentage: "0.37%",
            },
            {
              name: "USTFan",
              address: "0x1C5D...",
              balance: "20M LUNA",
              value: "$6.8K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "6/10",
        metrics: {
          virality: "7/10",
          originality: "8/10",
          timeliness: "5/10",
          memePotential: "6/10",
          spreadFactors: ["Medium", "High", "Low"],
          viralSpeed: "Medium",
          barriers: ["Historical crash", "Trust issues"]
        },
        description: "Terra Luna (LUNA) is a blockchain platform that experienced a significant crash in 2022. Despite its challenges, it maintains a dedicated community working on rebuilding and innovating in the DeFi space.",
        contract: "0xabcdef1234567890...",
        tags: ["DeFi", "Stablecoin"]
      },
      FTT: {
        name: "FTX Token",
        symbol: "FTT",
        price: "$1.23",
        priceChange: "-38.92%",
        marketCap: "$123M",
        volume: "$45M",
        buys: 1500,
        sells: 2000,
        totalHolders: 345678,
        smartWallets: {
          count: 1234,
          holders: [
            {
              name: "ExchangeWhale",
              address: "0x45F7...",
              balance: "100K FTT",
              value: "$123K",
              percentage: "1.22%",
            },
            {
              name: "TradingPro",
              address: "0x2B9C...",
              balance: "75K FTT",
              value: "$92.25K",
              percentage: "0.91%",
            },
            {
              name: "FeeCollector",
              address: "0x6D3E...",
              balance: "50K FTT",
              value: "$61.5K",
              percentage: "0.61%",
            },
            {
              name: "MarginTrader",
              address: "0x8A1F...",
              balance: "30K FTT",
              value: "$36.9K",
              percentage: "0.37%",
            },
            {
              name: "SpotHolder",
              address: "0x1C5D...",
              balance: "20K FTT",
              value: "$24.6K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "5/10",
        metrics: {
          virality: "6/10",
          originality: "7/10",
          timeliness: "4/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Medium", "Low"],
          viralSpeed: "Low",
          barriers: ["Exchange collapse", "Regulatory issues"]
        },
        description: "FTX Token (FTT) was the native token of the FTX cryptocurrency exchange. Following the exchange's collapse, the token continues to trade but faces significant challenges in rebuilding trust and value.",
        contract: "0xabcdef1234567890...",
        tags: ["Exchange", "Utility"]
      },
      SAFEMOON: {
        name: "SafeMoon",
        symbol: "SAFEMOON",
        price: "$0.000089",
        priceChange: "-31.45%",
        marketCap: "$89M",
        volume: "$12M",
        buys: 800,
        sells: 1200,
        totalHolders: 123456,
        smartWallets: {
          count: 567,
          holders: [
            {
              name: "MoonWhale",
              address: "0x45F7...",
              balance: "1B SAFEMOON",
              value: "$89K",
              percentage: "1.22%",
            },
            {
              name: "SafeHolder",
              address: "0x2B9C...",
              balance: "750M SAFEMOON",
              value: "$66.75K",
              percentage: "0.91%",
            },
            {
              name: "Reflector",
              address: "0x6D3E...",
              balance: "500M SAFEMOON",
              value: "$44.5K",
              percentage: "0.61%",
            },
            {
              name: "TokenTrader",
              address: "0x8A1F...",
              balance: "300M SAFEMOON",
              value: "$26.7K",
              percentage: "0.37%",
            },
            {
              name: "MoonFan",
              address: "0x1C5D...",
              balance: "200M SAFEMOON",
              value: "$17.8K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "4/10",
        metrics: {
          virality: "7/10",
          originality: "6/10",
          timeliness: "3/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "Low", "Low"],
          viralSpeed: "Low",
          barriers: ["Controversy", "Market sentiment"]
        },
        description: "SafeMoon (SAFEMOON) is a token that gained popularity through its unique tokenomics and marketing. Despite facing challenges and controversy, it maintains a community of holders who believe in its long-term potential.",
        contract: "0xabcdef1234567890...",
        tags: ["Meme", "Reflection"]
      },
      ICP: {
        name: "Internet Computer",
        symbol: "ICP",
        price: "$8.47",
        priceChange: "-28.73%",
        marketCap: "$847M",
        volume: "$89M",
        buys: 2000,
        sells: 2500,
        totalHolders: 456789,
        smartWallets: {
          count: 1567,
          holders: [
            {
              name: "Web3Whale",
              address: "0x45F7...",
              balance: "10K ICP",
              value: "$84.7K",
              percentage: "1.22%",
            },
            {
              name: "CloudBuilder",
              address: "0x2B9C...",
              balance: "7.5K ICP",
              value: "$63.53K",
              percentage: "0.91%",
            },
            {
              name: "NetworkNode",
              address: "0x6D3E...",
              balance: "5K ICP",
              value: "$42.35K",
              percentage: "0.61%",
            },
            {
              name: "ProtocolPro",
              address: "0x8A1F...",
              balance: "3K ICP",
              value: "$25.41K",
              percentage: "0.37%",
            },
            {
              name: "ChainLinker",
              address: "0x1C5D...",
              balance: "2K ICP",
              value: "$16.94K",
              percentage: "0.24%",
            }
          ]
        },
        concentration: {
          smartWallets: "18.92%",
          liquidityPools: "28.45%",
          regularHolders: "52.63%",
          top5: "35.67%",
          top10: "48.23%",
          top20: "61.89%",
          top50: "78.45%"
        },
        narrativeScore: "7/10",
        metrics: {
          virality: "6/10",
          originality: "9/10",
          timeliness: "7/10",
          memePotential: "5/10",
          spreadFactors: ["Medium", "High", "Medium"],
          viralSpeed: "Medium",
          barriers: ["Technical complexity", "Market education"]
        },
        description: "Internet Computer (ICP) is a blockchain platform that aims to extend the functionality of the public internet. It enables developers to build and deploy software directly on the internet, creating a more decentralized web infrastructure.",
        contract: "0xabcdef1234567890...",
        tags: ["Web3", "Infrastructure"]
      }
    }

    return coinDatabase[coinSymbol] || coinDatabase.DOGE // Default to DOGE if symbol not found
  }

  // Update the component to use the dynamic data
  const coinData = getCoinData(coinSymbol)

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[95vh] overflow-y-auto bg-black border border-cyan-500/30 p-0 text-white shadow-2xl shadow-cyan-500/20">
        <DialogHeader>
          <DialogTitle className="sr-only">${coinData.symbol} Token Details</DialogTitle>
        </DialogHeader>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/30 bg-gradient-to-r from-black via-gray-900/20 to-black">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-500/30">
              <span className="text-black font-bold text-xl">D</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">${coinData.symbol}</h2>
                <Badge className="bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 text-xs">
                  {coinData.tags[0]}
                </Badge>
              </div>
              <div className="text-xs text-gray-400">Contract: {coinData.contract}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="bg-black border border-cyan-500/50 hover:bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 shadow-lg shadow-cyan-500/20"
            >
              Dex
            </Button>
            <Button
              size="sm"
              className="bg-black border border-purple-500/50 hover:bg-purple-500/10 text-purple-400 text-xs px-3 py-1 shadow-lg shadow-purple-500/20"
            >
              Bull1k
            </Button>
            <Button
              size="sm"
              className="bg-black border border-green-500/50 hover:bg-green-500/10 text-green-400 text-xs px-3 py-1 shadow-lg shadow-green-500/20"
            >
              Phantom
            </Button>
            <Button
              size="sm"
              className="bg-black border border-pink-500/50 hover:bg-pink-500/10 text-pink-400 text-xs px-3 py-1 shadow-lg shadow-pink-500/20"
            >
              Action
            </Button>
            <Button
              size="sm"
              className="bg-black border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 text-xs px-3 py-1 shadow-lg shadow-yellow-500/20"
            >
              SSS
            </Button>
            <Button
              size="sm"
              className="bg-black border border-blue-500/50 hover:bg-blue-500/10 text-blue-400 text-xs px-3 py-1 shadow-lg shadow-blue-500/20"
            >
              Nova
            </Button>
            <Button
              size="sm"
              className="bg-black border border-indigo-500/50 hover:bg-indigo-500/10 text-indigo-400 text-xs px-3 py-1 shadow-lg shadow-indigo-500/20"
            >
              GMAI
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white hover:bg-red-500/10 hover:shadow-lg hover:shadow-red-500/20 ml-2"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-cyan-500/30">
          <div className="bg-black border border-cyan-500/30 p-3 rounded-lg shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300">
            <div className="text-xs text-cyan-400 mb-1">💰 PRICE</div>
            <div className="text-lg font-bold text-white">{coinData.price}</div>
          </div>
          <div className="bg-black border border-green-500/30 p-3 rounded-lg shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300">
            <div className="text-xs text-green-400 mb-1">📊 MARKET CAP</div>
            <div className="text-lg font-bold text-white">{coinData.marketCap}</div>
          </div>
          <div className="bg-black border border-purple-500/30 p-3 rounded-lg shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300">
            <div className="text-xs text-purple-400 mb-1">📈 24H VOLUME</div>
            <div className="text-lg font-bold text-white">{coinData.volume}</div>
          </div>
          <div className="bg-black border border-pink-500/30 p-3 rounded-lg shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-300">
            <div className="text-xs text-pink-400 mb-1">⚖️ BUY/SELL RATIO</div>
            <div className="text-lg font-bold text-white">1.27</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Left Column - Holders */}
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3">Holders</h3>
                <div className="bg-black border border-cyan-500/30 p-3 rounded-lg shadow-lg shadow-cyan-500/10">
                  <div className="text-xs text-cyan-400 mb-1">👥 Total Holders</div>
                  <div className="text-xl font-bold text-white">{coinData.totalHolders.toLocaleString()}</div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-cyan-400 mb-3">Top Holders</h3>
                <div className="bg-black border border-cyan-500/30 p-3 rounded-lg shadow-lg shadow-cyan-500/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Smart Wallets</span>
                    <span className="text-xs text-cyan-400">{coinData.concentration.smartWallets}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-1.5 rounded-full shadow-lg shadow-cyan-500/50"
                      style={{ width: coinData.concentration.smartWallets }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Liquidity Pools (1)</span>
                    <span className="text-xs text-blue-400">{coinData.concentration.liquidityPools}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 rounded-full shadow-lg shadow-blue-500/50"
                      style={{ width: coinData.concentration.liquidityPools }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Regular Holders</span>
                    <span className="text-xs text-gray-300">{coinData.concentration.regularHolders}</span>
                  </div>

                  <div className="border-t border-cyan-500/20 pt-3 mt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white">Top 5 Holders</span>
                      <span className="text-xs text-red-400">{coinData.concentration.top5}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                      <div
                        className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 rounded-full shadow-lg shadow-red-500/50"
                        style={{ width: coinData.concentration.top5 }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white">Top 10 Holders</span>
                    <span className="text-xs text-yellow-400">{coinData.concentration.top10}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-1.5 rounded-full shadow-lg shadow-yellow-500/50"
                      style={{ width: coinData.concentration.top10 }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white">Top 20 Holders</span>
                    <span className="text-xs text-purple-400">{coinData.concentration.top20}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-purple-400 h-1.5 rounded-full shadow-lg shadow-purple-500/50"
                      style={{ width: coinData.concentration.top20 }}
                    ></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white">Top 50 Holders</span>
                    <span className="text-xs text-pink-400">{coinData.concentration.top50}</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-pink-500 to-pink-400 h-1.5 rounded-full shadow-lg shadow-pink-500/50"
                      style={{ width: coinData.concentration.top50 }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Smart Wallets */}
            <div>
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">Smart Wallets</h3>
              <div className="space-y-2">
                {coinData.smartWallets.holders.slice(0, 5).map((holder: CoinHolder, index: number) => (
                  <div
                    key={index}
                    className="bg-black border border-purple-500/30 p-3 rounded-lg shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                        <span className="text-white font-bold text-xs">{holder.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">{holder.name}</div>
                        <div className="text-xs text-gray-400">{holder.address}</div>
                      </div>
                      <div className="ml-auto text-xs text-purple-400">{holder.percentage}</div>
                    </div>
                    <div className="text-xs text-gray-400">Balance: {holder.balance}</div>
                    <div className="text-xs text-purple-300">Value: {holder.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Narrative Analysis */}
          <div className="border-t border-cyan-500/30 pt-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Left - Narrative Analysis */}
              <div className="bg-black border border-cyan-500/30 p-4 rounded-lg shadow-lg shadow-cyan-500/10">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3">📖 Narrative Analysis</h3>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">📝 Summary</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{coinData.description}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-cyan-400 mb-2">🌐 Cultural Context</h4>
                  <p className="text-xs text-gray-300 leading-relaxed mb-2">
                    {coinData.symbol === "DOGE"
                      ? "Dogecoin taps into the rich vein of internet culture, where anthropomorphized animals and memes play significant roles in creating communal bonds and shared humor."
                      : coinData.symbol === "SHIB"
                        ? "Shiba Inu leverages the power of community-driven movements and the 'meme coin' narrative, building an entire ecosystem around a single cultural phenomenon."
                        : coinData.symbol === "PEPE"
                          ? "PEPE represents the raw essence of internet meme culture, tapping into one of the most recognizable and controversial memes in digital history."
                          : coinData.tags.includes("Political")
                            ? "This token operates at the intersection of politics and cryptocurrency, where digital assets become vehicles for political expression and community building."
                            : "This token represents the evolving landscape of meme culture, where internet trends rapidly transform into financial instruments and community rallying points."}
                  </p>
                  <div className="text-xs text-gray-400 mb-1">Cultural References</div>
                  <div className="flex flex-wrap gap-1">
                    {coinData.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="bg-black border border-cyan-500/30 px-2 py-1 rounded text-xs text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="bg-black border border-cyan-500/30 px-2 py-1 rounded text-xs text-cyan-400">
                      Internet culture
                    </span>
                  </div>
                </div>
              </div>

              {/* Right - Scores */}
              <div className="space-y-4">
                <div className="bg-black border border-purple-500/30 p-4 rounded-lg shadow-lg shadow-purple-500/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold text-purple-400">⭐ Narrative Score</h4>
                    <div className="text-xl font-bold text-purple-400">{coinData.narrativeScore}</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Originality</span>
                      <span className="text-purple-400">{coinData.metrics.originality}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Timeliness</span>
                      <span className="text-purple-400">{coinData.metrics.timeliness}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Meme Potential</span>
                      <span className="text-purple-400">{coinData.metrics.memePotential}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-pink-500/30 p-4 rounded-lg shadow-lg shadow-pink-500/10">
                  <h4 className="text-xs font-semibold text-pink-400 mb-3">🧬 Memetic Analysis</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-400">Virality Score</span>
                      <span className="text-pink-400">{coinData.metrics.virality}</span>
                    </div>
                    <div className="text-xs text-gray-400 mb-1">Spread Factors</div>
                    <div className="text-xs text-pink-400">Viral Speed</div>
                    <div className="text-xs text-pink-400">Barriers</div>
                    <div className="text-xs text-gray-400">Market saturation, Meme longevity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-cyan-500/30 p-4 text-center bg-gradient-to-r from-black via-gray-900/20 to-black">
          <Button
            variant="ghost"
            className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            🔒 Close Details
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
