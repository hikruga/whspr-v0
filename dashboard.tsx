"use client"

import { useState } from "react"
import { Menu, User, TrendingUp, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CoinDetailModal } from "./components/coin-detail-modal"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Component() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState("")

  const handleCoinClick = (symbol: string) => {
    setSelectedCoin(symbol)
    setModalOpen(true)
  }

  return (
    <TooltipProvider delayDuration={100}>
      <div className="min-h-screen bg-black text-white">
        {/* Animated Grid Background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="grid-background"></div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
          <div className="particle particle-6"></div>
          <div className="particle particle-7"></div>
          <div className="particle particle-8"></div>
        </div>

        {/* Scanning Lines */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="scan-line"></div>
        </div>

        {/* Header */}
        <header className="flex items-center justify-between p-4 border-b border-cyan-500/30 bg-gradient-to-r from-black via-gray-900/20 to-black shadow-lg shadow-cyan-500/10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <Menu className="h-5 w-5 text-cyan-400" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/30">
                <span className="text-black font-bold text-sm">W</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                WHSPR
              </span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <User className="h-5 w-5 text-purple-400" />
          </Button>
        </header>

        {/* Main Content */}
        <div className="p-4 main-container">
          {/* Monitors Section */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Activity className="h-6 w-6 text-cyan-400" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Monitors
              </h1>
            </div>
            <div className="bg-black/60 border border-cyan-500/20 rounded-lg p-4 backdrop-blur-[0.5rem] shadow-lg shadow-cyan-500/10">
              <p className="text-gray-300 text-sm leading-relaxed">
                WHSPR monitors are carefully curated lists of coins we are tracking. Each monitor focuses on specific
                market patterns and opportunities to help you stay ahead of the curve.
              </p>
            </div>
          </div>

          {/* Top Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Top Gainers */}
            <Card className="bg-black/80 border border-green-500/20 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-green-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Top Gainers</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-green-500/30 shadow-lg shadow-green-500/20 text-green-400"
                    >
                      <p className="text-sm text-green-300">
                        Displays highest performing Solana memecoins over 24 hours, ranked by percentage price increase.
                        These tokens show exceptional growth and significant upward momentum.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$KILLBILL")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9JRY3Mxw2fB4DebD3gvEJTHTOeJHRk.png"
                          alt="KILLBILL"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #34D399", boxShadow: "0 0 7px rgba(52, 211, 153, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$KILLBILL</span>
                        <span className="text-xs text-gray-400">Kill Bill</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00</div>
                        <div className="text-xs text-green-400 font-bold">+21.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$3.3M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$MASK")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xTqCUgyMuwfVYeFdR7JKOp0V9OZhjc.png"
                          alt="MASK"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #34D399", boxShadow: "0 0 7px rgba(52, 211, 153, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$MASK</span>
                        <span className="text-xs text-gray-400">catwifmask</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.02</div>
                        <div className="text-xs text-green-400 font-bold">+23.99%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$22.1M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$MBTC")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1MaQcsKXzZnzL9afY2643Dlb7f5Lny.png"
                          alt="MBTC"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #EF4444", boxShadow: "0 0 7px rgba(239, 68, 68, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$MBTC</span>
                        <span className="text-xs text-gray-400">Wrapped BTC (Morahole)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$103,419.77</div>
                        <div className="text-xs text-red-400 font-bold">-1.95%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$379.2M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$Bonk")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Y3NJqPEq0RceGjVf008N8rVuhf8Uxz.png"
                          alt="Bonk"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #EF4444", boxShadow: "0 0 7px rgba(239, 68, 68, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$Bonk</span>
                        <span className="text-xs text-gray-400">Bonk</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00</div>
                        <div className="text-xs text-red-400 font-bold">-5.93%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$1.4B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$CULTS")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ptQjpixxwPt6HhwGynUTdHaPn53Vah.png"
                          alt="CULTS"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #34D399", boxShadow: "0 0 7px rgba(52, 211, 153, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$CULTS</span>
                        <span className="text-xs text-gray-400">CULTS</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00</div>
                        <div className="text-xs text-green-400 font-bold">+169.77%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$1.4M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("PEPE")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-green-400 shadow-lg shadow-green-500/30">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BbodFqJOPhaRNCpn00UUIHaYMBD0K5.png"
                          alt="PEPE"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">PEPE</span>
                        <span className="text-xs text-gray-400">Pepe</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.000018</div>
                        <div className="text-xs text-green-400 font-bold">+215.23%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$7.8B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("unstable coin")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iEtQhAD847FkVheivAQUxLGXrfK0SY.png"
                          alt="unstable coin"
                          className="w-full h-full object-cover"
                          style={{ border: "4px solid #34D399", boxShadow: "0 0 7px rgba(52, 211, 153, 0.5)" }}
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">unstable coin</span>
                        <span className="text-xs text-gray-400">Unstable</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.000526</div>
                        <div className="text-xs text-green-400 font-bold">+86.73%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$52.6M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hourly Performers */}
            <Card className="bg-black/80 border border-pink-500/20 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-pink-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Hourly Performers</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-pink-500/30 shadow-lg shadow-pink-500/20 text-pink-400"
                    >
                      <p className="text-sm text-pink-300">
                        Displays highest performing Solana memecoins over the last hour, ranked by percentage price increase.
                        These tokens show exceptional short-term growth and momentum.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$BEAR")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-400 shadow-lg shadow-pink-500/30">
                        <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$BEAR</span>
                        <span className="text-xs text-gray-400">Brown Bear</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00042</div>
                        <div className="text-xs text-green-400 font-bold">+28.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-pink-400 font-semibold">$420K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$ADHD")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-400 shadow-lg shadow-pink-500/30">
                        <img src="/images/adhd-logo.png" alt="ADHD" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$ADHD</span>
                        <span className="text-xs text-gray-400">ADHD Coin</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00018</div>
                        <div className="text-xs text-green-400 font-bold">+22.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-pink-400 font-semibold">$180K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$KITTY")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-400 shadow-lg shadow-pink-500/30">
                        <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$KITTY</span>
                        <span className="text-xs text-gray-400">Hello Kitty</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00076</div>
                        <div className="text-xs text-green-400 font-bold">+19.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-pink-400 font-semibold">$760K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$ROBOT")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-400 shadow-lg shadow-pink-500/30">
                        <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$ROBOT</span>
                        <span className="text-xs text-gray-400">Robot Face</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00231</div>
                        <div className="text-xs text-green-400 font-bold">+17.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-pink-400 font-semibold">$2.31M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$YARD")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-pink-400 shadow-lg shadow-pink-500/30">
                        <img src="/images/dogs-yard.png" alt="YARD" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$YARD</span>
                        <span className="text-xs text-gray-400">Dogs Yard</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00058</div>
                        <div className="text-xs text-green-400 font-bold">+15.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-pink-400 font-semibold">$580K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Volume Spike */}
            <Card className="bg-black/80 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-yellow-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Volume Spike</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-yellow-500/30 shadow-lg shadow-yellow-500/20 text-yellow-400"
                    >
                      <p className="text-sm text-yellow-300">
                        Provides alerts for tokens launched on pump.fun and moonshot that experience a significant
                        increase in volume following at least 30 minutes of no buy pressure.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$BEAR")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-400 shadow-lg shadow-yellow-500/30">
                        <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$BEAR</span>
                        <span className="text-xs text-gray-400">Brown Bear</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00042</div>
                        <div className="text-xs text-green-400 font-bold">+28.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-yellow-400 font-semibold">$420K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$ADHD")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-400 shadow-lg shadow-yellow-500/30">
                        <img src="/images/adhd-logo.png" alt="ADHD" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$ADHD</span>
                        <span className="text-xs text-gray-400">ADHD Coin</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00018</div>
                        <div className="text-xs text-green-400 font-bold">+22.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-yellow-400 font-semibold">$180K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$KITTY")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-400 shadow-lg shadow-yellow-500/30">
                        <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$KITTY</span>
                        <span className="text-xs text-gray-400">Hello Kitty</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00076</div>
                        <div className="text-xs text-green-400 font-bold">+19.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-yellow-400 font-semibold">$760K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$ROBOT")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-400 shadow-lg shadow-yellow-500/30">
                        <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$ROBOT</span>
                        <span className="text-xs text-gray-400">Robot Face</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00231</div>
                        <div className="text-xs text-green-400 font-bold">+17.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-yellow-400 font-semibold">$2.31M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 cursor-pointer hover:bg-yellow-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("$YARD")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-yellow-400 shadow-lg shadow-yellow-500/30">
                        <img src="/images/dogs-yard.png" alt="YARD" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">$YARD</span>
                        <span className="text-xs text-gray-400">Dogs Yard</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00058</div>
                        <div className="text-xs text-green-400 font-bold">+15.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-yellow-400 font-semibold">$580K</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Strong Survivors */}
            <Card className="bg-black/80 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-cyan-400 flex items-center gap-2 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Strong Survivors</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-cyan-500/30 shadow-lg shadow-cyan-500/20 text-cyan-400"
                    >
                      <p className="text-sm text-cyan-300">
                        Coins launched 2+ days ago that maintain steady volume, holder growth, or price accumulation —
                        indicating long-term interest and potential staying power beyond early hype.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                  <TrendingUp className="h-4 w-4 text-cyan-400" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Bubblemaps")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/bubblemaps.png" alt="Bubblemaps" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">BUBBLE</span>
                        <span className="text-xs text-gray-400">Bubblemaps</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000234</div>
                        <div className="text-xs text-green-400 font-bold">+12.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$2.34M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Launch On Pump")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/launch-on-pump.png" alt="Launch On Pump" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">PUMP</span>
                        <span className="text-xs text-gray-400">Launch On Pump</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000456</div>
                        <div className="text-xs text-green-400 font-bold">+18.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$4.56M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("PancakeSwap")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/pancakeswap.png" alt="PancakeSwap" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">CAKE</span>
                        <span className="text-xs text-gray-400">PancakeSwap</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$2.34</div>
                        <div className="text-xs text-green-400 font-bold">+5.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$234M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Uniswap")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/uniswap.png" alt="Uniswap" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">UNI</span>
                        <span className="text-xs text-gray-400">Uniswap V3</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$5.67</div>
                        <div className="text-xs text-green-400 font-bold">+8.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$3.2B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("SushiSwap")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/sushiswap.png" alt="SushiSwap" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">SUSHI</span>
                        <span className="text-xs text-gray-400">SushiSwap</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$1.23</div>
                        <div className="text-xs text-green-400 font-bold">+6.4%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$234M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("1inch")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/1inch.png" alt="1inch" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">1INCH</span>
                        <span className="text-xs text-gray-400">1inch Network</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.45</div>
                        <div className="text-xs text-green-400 font-bold">+4.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$567M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 cursor-pointer hover:bg-cyan-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Curve")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/curve.png" alt="Curve" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">CRV</span>
                        <span className="text-xs text-gray-400">Curve Finance</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.56</div>
                        <div className="text-xs text-green-400 font-bold">+7.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-cyan-400 font-semibold">$456M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Second Row Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Momentum */}
            <Card className="bg-black/80 border border-blue-500/20 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-blue-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Momentum Gainers</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-blue-500/30 shadow-lg shadow-blue-500/20 text-blue-400"
                    >
                      <p className="text-sm text-blue-300">
                        Tokens ranked by sustained upward momentum and trading velocity. These coins show consistent
                        buying pressure and strong technical indicators for continued growth.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  {/* Example coin row, repeat for each coin */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("DOGE")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-blue-400 shadow-lg shadow-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                          D
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">DOGE</span>
                        <span className="text-xs text-gray-400">Dogecoin</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.12</div>
                        <div className="text-xs text-blue-400 font-bold">+8.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-blue-400 font-semibold">$17.2B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  {/* Repeat for other coins... */}
                  {/* Momentum Gainers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("SOL")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-blue-400 shadow-lg shadow-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">SOL</span>
                        <span className="text-xs text-gray-400">Solana</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$142.35</div>
                        <div className="text-xs text-blue-400 font-bold">+12.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-blue-400 font-semibold">$62.4B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("BONK")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-blue-400 shadow-lg shadow-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                          B
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">BONK</span>
                        <span className="text-xs text-gray-400">Bonk</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000234</div>
                        <div className="text-xs text-blue-400 font-bold">+15.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-blue-400 font-semibold">$1.2B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Momentum Gainers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("RAY")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-blue-400 shadow-lg shadow-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                          R
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">RAY</span>
                        <span className="text-xs text-gray-400">Raydium</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$1.87</div>
                        <div className="text-xs text-blue-400 font-bold">+18.4%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-blue-400 font-semibold">$468M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("JTO")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-blue-400 shadow-lg shadow-blue-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                          J
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">JTO</span>
                        <span className="text-xs text-gray-400">Jito</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$2.34</div>
                        <div className="text-xs text-blue-400 font-bold">+22.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-blue-400 font-semibold">$234M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recently Added */}
            <Card className="bg-black/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-purple-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Holder Gainer</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-purple-500/30 shadow-lg shadow-purple-500/20 text-purple-400"
                    >
                      <p className="text-sm text-purple-300">
                        Tokens experiencing the fastest growth in unique wallet holders. Indicates growing community
                        adoption and long-term interest beyond just price speculation.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  {/* Example coin row, repeat for each coin */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("unstable coin")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-purple-400 shadow-lg shadow-purple-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                          U
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">unstable coin</span>
                        <span className="text-xs text-gray-400">Unstable</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.000526</div>
                        <div className="text-xs text-purple-400 font-bold">+36.73%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-purple-400 font-semibold">$52.6M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  {/* Repeat for other coins... */}
                  {/* Holder Gainer - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("JUP")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-purple-400 shadow-lg shadow-purple-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                          J
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">JUP</span>
                        <span className="text-xs text-gray-400">Jupiter</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$1.23</div>
                        <div className="text-xs text-purple-400 font-bold">+28.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-purple-400 font-semibold">$1.8B</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("PYTH")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-purple-400 shadow-lg shadow-purple-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                          P
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">PYTH</span>
                        <span className="text-xs text-gray-400">Pyth Network</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.89</div>
                        <div className="text-xs text-purple-400 font-bold">+42.1%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-purple-400 font-semibold">$890M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Holder Gainer - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("ORCA")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-purple-400 shadow-lg shadow-purple-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                          O
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">ORCA</span>
                        <span className="text-xs text-gray-400">Orca</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$5.67</div>
                        <div className="text-xs text-purple-400 font-bold">+35.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-purple-400 font-semibold">$567M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("MARINADE")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-purple-400 shadow-lg shadow-purple-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                          M
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">MNDE</span>
                        <span className="text-xs text-gray-400">Marinade</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.45</div>
                        <div className="text-xs text-purple-400 font-bold">+31.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-purple-400 font-semibold">$45M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trending Topics */}
            <Card className="bg-black/80 border border-orange-500/20 shadow-lg shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-orange-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Big Dips</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-orange-500/30 shadow-lg shadow-orange-500/20 text-orange-400"
                    >
                      <p className="text-sm text-orange-300">
                        Tokens with a market cap of 5M or higher that experience a sudden price drop of at least 50%.
                        Potential recovery opportunities for risk-tolerant investors.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  {/* Example coin row, repeat for each coin */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Donald Trump")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-orange-400 shadow-lg shadow-orange-500/30">
                        <img src="/images/trump-token.png" alt="Donald Trump" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">Donald Trump</span>
                        <span className="text-xs text-gray-400">Trump</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.00023</div>
                        <div className="text-xs text-orange-400 font-bold">-58.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-orange-400 font-semibold">$5.1M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  {/* Repeat for other coins... */}
                  {/* Big Dips - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("WIF")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-orange-400 shadow-lg shadow-orange-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                          W
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">WIF</span>
                        <span className="text-xs text-gray-400">dogwifhat</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$2.45</div>
                        <div className="text-xs text-orange-400 font-bold">-52.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-orange-400 font-semibold">$245M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("MYRO")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-orange-400 shadow-lg shadow-orange-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                          M
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">MYRO</span>
                        <span className="text-xs text-gray-400">Myro</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.078</div>
                        <div className="text-xs text-orange-400 font-bold">-48.9%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-orange-400 font-semibold">$78M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Big Dips - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("SAMO")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-orange-400 shadow-lg shadow-orange-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">SAMO</span>
                        <span className="text-xs text-gray-400">Samoyedcoin</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0089</div>
                        <div className="text-xs text-orange-400 font-bold">-51.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-orange-400 font-semibold">$89M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 cursor-pointer hover:bg-orange-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("COPE")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-orange-400 shadow-lg shadow-orange-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                          C
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">COPE</span>
                        <span className="text-xs text-gray-400">Cope</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0045</div>
                        <div className="text-xs text-orange-400 font-bold">-49.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-orange-400 font-semibold">$4.5M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Worst Performers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("SAMO")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">SAMO</span>
                        <span className="text-xs text-gray-400">Samoyedcoin</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0089</div>
                        <div className="text-xs text-red-400 font-bold">-75.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$89M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("COPE")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          C
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">COPE</span>
                        <span className="text-xs text-gray-400">Cope</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0045</div>
                        <div className="text-xs text-red-400 font-bold">-82.1%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$4.5M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  {/* Worst Performers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("BOME")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          B
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">BOME</span>
                        <span className="text-xs text-gray-400">Book of Meme</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000123</div>
                        <div className="text-xs text-red-400 font-bold">-88.5%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$12.3M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("SMOG")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          S
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">SMOG</span>
                        <span className="text-xs text-gray-400">Smog</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000089</div>
                        <div className="text-xs text-red-400 font-bold">-91.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$8.9M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  {/* Worst Performers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("TOSHI")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          T
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">TOSHI</span>
                        <span className="text-xs text-gray-400">Toshi</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000156</div>
                        <div className="text-xs text-red-400 font-bold">-85.7%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$15.6M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("NINJA")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          N
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">NINJA</span>
                        <span className="text-xs text-gray-400">Ninja Solana</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000098</div>
                        <div className="text-xs text-red-400 font-bold">-89.3%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$9.8M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("MOONCAT")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          M
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">MOONCAT</span>
                        <span className="text-xs text-gray-400">Moon Cat</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0000067</div>
                        <div className="text-xs text-red-400 font-bold">-93.1%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$6.7M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Buzz */}
            <Card className="bg-black/80 border border-red-500/20 shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-red-400 font-semibold">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-default">Worst Performers</span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="max-w-xs bg-black border border-red-500/30 shadow-lg shadow-red-500/20 text-red-400"
                    >
                      <p className="text-sm text-red-300">
                        Tokens with the largest price declines over 24 hours. Useful for identifying oversold
                        opportunities or avoiding falling knives in volatile market conditions.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 px-3 pb-3">
                <div className="h-64 overflow-y-auto custom-scrollbar space-y-2">
                  {/* Example coin row, repeat for each coin */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("Pepes Dog")}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-red-400 shadow-lg shadow-red-500/30">
                        <img src="/images/pepesdog.png" alt="Pepes Dog" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">Pepes Dog</span>
                        <span className="text-xs text-gray-400">Pepes Dog</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.016</div>
                        <div className="text-xs text-red-400 font-bold">-53.37%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$1.2M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                  {/* Repeat for other coins... */}
                  {/* Worst Performers - Additional coins */}
                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("POPCAT")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          P
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">POPCAT</span>
                        <span className="text-xs text-gray-400">Popcat</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0045</div>
                        <div className="text-xs text-red-400 font-bold">-67.2%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$4.5M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between p-2.5 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-all duration-200"
                    onClick={() => handleCoinClick("BOOK")}
                  >
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10 border border-red-400 shadow-lg shadow-red-500/30">
                        <AvatarFallback className="bg-gradient-to-br from-red-400 to-red-600 text-xs text-black font-bold">
                          B
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="text-xs text-white font-semibold">BOOK</span>
                        <span className="text-xs text-gray-400">Book of Meme</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-xs text-white font-semibold">$0.0123</div>
                        <div className="text-xs text-red-400 font-bold">-72.8%</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400">MC</div>
                        <div className="text-xs text-red-400 font-semibold">$12.3M</div>
                      </div>
                      <button className="px-3 py-1 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 text-xs">
                        Trade
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* WHSPR Picks */}
          <Card className="bg-black/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 mb-6 backdrop-blur-[0.5rem]">
            <CardHeader className="border-b border-purple-500/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-purple-400 font-bold">🔥 WHSPR Picks</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Featured
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Trending
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-green-500/50 text-green-400 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    Hot Picks
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Pick 1 - $MASK */}
                <div className="relative p-4 rounded-lg bg-gradient-to-br from-purple-900/20 via-cyan-900/10 to-black border border-purple-500/40 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Neon accent line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60"></div>

                  {/* Header with profile and close */}
                  <div className="relative flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-400/60 shadow-lg shadow-purple-500/30 group-hover:shadow-purple-400/50 transition-all duration-300">
                          <img src="/images/ninja-cat.png" alt="MASK" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            $MASK
                          </span>
                          <button className="w-4 h-4 bg-gray-700 hover:bg-purple-600/50 rounded flex items-center justify-center transition-colors">
                            <span className="text-xs text-gray-300">📋</span>
                          </button>
                        </div>
                        <span className="text-gray-400 text-sm">catwifmask</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 text-xs">MC</div>
                      <div className="text-white font-semibold">$13.0M</div>
                      <div className="text-cyan-400 text-xs mt-1">👥 2.9K</div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-2 mb-4">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                      <span className="text-red-400">✕</span>
                    </button>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                        <span className="text-yellow-400">⭐</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                        <span className="text-pink-400">❤️</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                        <span className="text-blue-400">👤</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                        <span className="text-green-400">💬</span>
                      </button>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                      <span>⚡</span>
                      Trade
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-purple-400 text-xs">Picked</div>
                      <div className="text-white font-bold">2d ago</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 text-xs">Current Gain</div>
                      <div className="text-emerald-400 font-bold text-lg">116.5x</div>
                    </div>
                    <div>
                      <div className="text-pink-400 text-xs">Highest Gain</div>
                      <div className="text-emerald-400 font-bold">177.9x</div>
                    </div>
                  </div>
                </div>

                {/* Pick 2 - $PEPE */}
                <div className="relative p-4 rounded-lg bg-gradient-to-br from-green-900/20 via-pink-900/10 to-black border border-green-500/40 hover:border-green-400/60 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-300 overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-pink-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Neon accent line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-60"></div>

                  <div className="relative flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-green-400/60 shadow-lg shadow-green-500/30 group-hover:shadow-green-400/50 transition-all duration-300">
                          <img src="/images/space-pig.png" alt="PEPE" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-lg bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent">
                            $PEPE
                          </span>
                          <button className="w-4 h-4 bg-gray-700 hover:bg-green-600/50 rounded flex items-center justify-center transition-colors">
                            <span className="text-xs text-gray-300">📋</span>
                          </button>
                        </div>
                        <span className="text-gray-400 text-sm">pepewifhat</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 text-xs">MC</div>
                      <div className="text-white font-semibold">$7.8B</div>
                      <div className="text-pink-400 text-xs mt-1">👥 234K</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                      <span className="text-red-400">✕</span>
                    </button>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                        <span className="text-yellow-400">⭐</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                        <span className="text-pink-400">❤️</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                        <span className="text-blue-400">👤</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                        <span className="text-green-400">💬</span>
                      </button>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                      <span>⚡</span>
                      Trade
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-green-400 text-xs">Picked</div>
                      <div className="text-white font-bold">5h ago</div>
                    </div>
                    <div>
                      <div className="text-pink-400 text-xs">Current Gain</div>
                      <div className="text-emerald-400 font-bold text-lg">89.2x</div>
                    </div>
                    <div>
                      <div className="text-cyan-400 text-xs">Highest Gain</div>
                      <div className="text-emerald-400 font-bold">124.7x</div>
                    </div>
                  </div>
                </div>

                {/* Pick 3 - $DOGE */}
                <div className="relative p-4 rounded-lg bg-gradient-to-br from-cyan-900/20 via-orange-900/10 to-black border border-cyan-500/40 hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden group">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-orange-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Neon accent line */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60"></div>

                  <div className="relative flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-400/50 transition-all duration-300">
                          <img src="/images/blue-bunny.png" alt="DOGE" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-black animate-pulse shadow-lg shadow-emerald-400/50"></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-white font-bold text-lg bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                            $DOGE
                          </span>
                          <button className="w-4 h-4 bg-gray-700 hover:bg-cyan-600/50 rounded flex items-center justify-center transition-colors">
                            <span className="text-xs text-gray-300">📋</span>
                          </button>
                        </div>
                        <span className="text-gray-400 text-sm">dogewifcoin</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 text-xs">MC</div>
                      <div className="text-white font-semibold">$15.4B</div>
                      <div className="text-orange-400 text-xs mt-1">👥 4.8K</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-red-400/50">
                      <span className="text-red-400">✕</span>
                    </button>
                    <div className="flex gap-1">
                      <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-yellow-400/50">
                        <span className="text-yellow-400">⭐</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-pink-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-pink-400/50">
                        <span className="text-pink-400">❤️</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-blue-400/50">
                        <span className="text-blue-400">👤</span>
                      </button>
                      <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600 hover:border-green-400/50">
                        <span className="text-green-400">💬</span>
                      </button>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-gray-700/50 rounded-lg text-gray-300 font-semibold transition-all duration-200 flex items-center gap-2 shadow-md">
                      <span>⚡</span>
                      Trade
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-cyan-400 text-xs">Picked</div>
                      <div className="text-white font-bold">1d ago</div>
                    </div>
                    <div>
                      <div className="text-orange-400 text-xs">Current Gain</div>
                      <div className="text-emerald-400 font-bold text-lg">45.8x</div>
                    </div>
                    <div>
                      <div className="text-purple-400 text-xs">Highest Gain</div>
                      <div className="text-emerald-400 font-bold">67.3x</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Smart Traders */}
          <Card className="bg-black/80 border border-orange-500/20 shadow-lg shadow-orange-500/10 backdrop-blur-[0.5rem]">
            <CardHeader className="border-b border-orange-500/20">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-orange-400 font-bold">Smart Traders</CardTitle>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20"
                  >
                    Top Performers
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/20"
                  >
                    Recent Activity
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-green-500/50 text-green-400 hover:bg-green-500/10 hover:shadow-lg hover:shadow-green-500/20"
                  >
                    High Volume
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-black border-pink-500/50 text-pink-400 hover:bg-pink-500/10 hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    All Traders
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Trader 1 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        CW
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">CryptoWhale47</h3>
                      <p className="text-xs text-gray-400">Elite Trader</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">94.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$2.4M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">12.3K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-emerald-400">BTC +15.2% • 2h ago</span>
                    </div>
                  </div>
                </div>

                {/* Trader 2 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        DM
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">DefiMaster</h3>
                      <p className="text-xs text-gray-400">Pro Trader</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">87.8%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$1.8M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">8.7K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-emerald-400">ETH +8.4% • 1h ago</span>
                    </div>
                  </div>
                </div>

                {/* Trader 3 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        AS
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">AltcoinSniper</h3>
                      <p className="text-xs text-gray-400">Rising Star</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">91.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$890K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">5.2K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-emerald-400">SOL +22.1% • 30m ago</span>
                    </div>
                  </div>
                </div>

                {/* Trader 4 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        BH
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">BlockchainHunter</h3>
                      <p className="text-xs text-gray-400">Veteran</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">89.3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$1.2M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">9.8K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-emerald-400">AVAX +12.7% • 45m ago</span>
                    </div>
                  </div>
                </div>

                {/* Trader 5 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        NF
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">NFTFlipKing</h3>
                      <p className="text-xs text-gray-400">Specialist</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">85.6%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$650K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">4.1K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-red-400">MATIC -2.1% • 3h ago</span>
                    </div>
                  </div>
                </div>

                {/* Trader 6 */}
                <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black border border-gray-700/50 hover:border-gray-600/70 hover:shadow-lg hover:shadow-gray-500/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-gray-600 shadow-lg shadow-gray-700/30">
                      <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-white font-bold">
                        QT
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-white font-semibold">QuantumTrader</h3>
                      <p className="text-xs text-gray-400">Algorithm Expert</p>
                    </div>
                    <div className="ml-auto">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg shadow-emerald-500/50 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Win Rate</span>
                      <span className="text-sm text-emerald-400 font-bold">92.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Total Profit</span>
                      <span className="text-sm text-gray-200 font-bold">+$1.5M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Followers</span>
                      <span className="text-sm text-white font-semibold">7.9K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Last Trade</span>
                      <span className="text-xs text-emerald-400">ADA +18.9% • 1h ago</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Stats Row */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-gray-200">247</div>
                  <div className="text-sm text-gray-400">Active Traders</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-emerald-400">$12.8M</div>
                  <div className="text-sm text-gray-400">Total Volume Today</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-gray-200">89.2%</div>
                  <div className="text-sm text-gray-400">Avg Win Rate</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50">
                  <div className="text-2xl font-bold text-gray-200">1,847</div>
                  <div className="text-sm text-gray-400">Trades Today</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coin Detail Modal */}
        <CoinDetailModal isOpen={modalOpen} onClose={() => setModalOpen(false)} coinSymbol={selectedCoin} />

        {/* Add the CSS styles */}
        <style jsx>{`
.grid-background {
  background-image: 
    linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  width: 100%;
  height: 100%;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  animation: float 15s infinite linear;
}

.particle-1 {
  top: 10%;
  left: 10%;
  animation-delay: 0s;
  animation-duration: 12s;
}

.particle-2 {
  top: 20%;
  left: 80%;
  animation-delay: -2s;
  animation-duration: 18s;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.8) 0%, transparent 70%);
}

.particle-3 {
  top: 60%;
  left: 20%;
  animation-delay: -4s;
  animation-duration: 14s;
  background: radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, transparent 70%);
}

.particle-4 {
  top: 80%;
  left: 70%;
  animation-delay: -6s;
  animation-duration: 16s;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.8) 0%, transparent 70%);
}

.particle-5 {
  top: 30%;
  left: 50%;
  animation-delay: -8s;
  animation-duration: 20s;
  background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, transparent 70%);
}

.particle-6 {
  top: 70%;
  left: 90%;
  animation-delay: -10s;
  animation-duration: 13s;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.8) 0%, transparent 70%);
}

.particle-7 {
  top: 40%;
  left: 5%;
  animation-delay: -12s;
  animation-duration: 17s;
  background: radial-gradient(circle, rgba(239, 68, 68, 0.8) 0%, transparent 70%);
}

.particle-8 {
  top: 90%;
  left: 40%;
  animation-delay: -14s;
  animation-duration: 19s;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.8) 0%, transparent 70%);
}

@keyframes float {
  0% {
    transform: translateY(100vh) translateX(0px) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
    transform: translateY(90vh) translateX(10px) scale(1);
  }
  90% {
    opacity: 1;
    transform: translateY(-10vh) translateX(-10px) scale(1);
  }
  100% {
    transform: translateY(-20vh) translateX(0px) scale(0);
    opacity: 0;
  }
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(6, 182, 212, 0.6) 50%, 
    transparent 100%);
  animation: scan 8s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(6, 182, 212, 0.5);
}

@keyframes scan {
  0%, 100% {
    transform: translateY(0vh);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh);
    opacity: 0;
  }
}

.main-container {
  position: relative;
  z-index: 1;
}

.card:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Custom Scrollbar - Radix UI inspired */
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(168, 85, 247, 0.5) rgba(0, 0, 0, 0.2);
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  margin: 2px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, rgba(168, 85, 247, 0.5), rgba(139, 92, 246, 0.5));
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 3px rgba(255, 255, 255, 0.15);
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, rgba(168, 85, 247, 0.7), rgba(139, 92, 246, 0.7));
}

.custom-scrollbar::-webkit-scrollbar-corner {
  background: transparent;
}
      `}</style>
      </div>
    </TooltipProvider>
  )
}
