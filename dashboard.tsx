"use client"

import { useState } from "react"
import { Search, Menu, User, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CoinDetailModal } from "./components/coin-detail-modal"

export default function Component() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCoin, setSelectedCoin] = useState("")

  const handleCoinClick = (symbol: string) => {
    setSelectedCoin(symbol)
    setModalOpen(true)
  }

  return (
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
          <Button variant="ghost" size="icon" className="hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
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

        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-cyan-400" />
            <Input
              placeholder="What trends are you looking for?"
              className="pl-10 bg-black border-cyan-500/50 text-white placeholder-gray-400 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20"
            />
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

      {/* Stats Bar */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-black via-gray-900/10 to-black border-b border-purple-500/20 text-sm">
        <div className="flex items-center gap-8">
          <div className="px-3 py-1 rounded-lg bg-black border border-cyan-500/30 shadow-lg shadow-cyan-500/10">
            <span className="text-gray-300">Market Cap</span>
            <span className="ml-2 text-cyan-400 font-semibold">$3.4T</span>
            <span className="ml-1 text-red-400">-1.54 $2B</span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-black border border-green-500/30 shadow-lg shadow-green-500/10">
            <span className="text-gray-300">Trading Volume</span>
            <span className="ml-2 text-green-400 font-semibold">$131.27B</span>
            <span className="ml-1 text-green-400">+0.12%</span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-black border border-purple-500/30 shadow-lg shadow-purple-500/10">
            <span className="text-gray-300">Sentiment</span>
            <span className="ml-2 text-purple-400 font-semibold">70%</span>
            <span className="ml-1 text-green-400">+1%</span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-black border border-pink-500/30 shadow-lg shadow-pink-500/10">
            <span className="text-gray-300">Engagements</span>
            <span className="ml-2 text-pink-400 font-semibold">367.45M</span>
            <span className="ml-1 text-red-400">+74.1%</span>
          </div>
          <div className="px-3 py-1 rounded-lg bg-black border border-yellow-500/30 shadow-lg shadow-yellow-500/10">
            <span className="text-gray-300">Mentions</span>
            <span className="ml-2 text-yellow-400 font-semibold">565.13K</span>
            <span className="ml-1 text-red-400">+29.7%</span>
          </div>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black border border-blue-500/30 shadow-lg shadow-blue-500/10">
          <span className="text-gray-300">Highlights</span>
          <div className="w-3 h-3 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 animate-pulse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 main-container">
        {/* Top Widgets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Top Gainers */}
          <Card className="bg-black/80 border border-green-500/20 shadow-lg shadow-green-500/10 hover:shadow-green-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-green-400 font-semibold">Top Gainers</CardTitle>
            </CardHeader>
            <CardContent className="p-0 px-3 pb-3">
              <div className="h-48 overflow-y-auto custom-scrollbar green-scroll space-y-2">
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("pig wif hat")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/pigwifhat.png"
                        alt="pig wif hat"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #34D399", boxShadow: "0 0 5px rgba(52, 211, 153, 0.5)" }}
                      />
                    </div>
                    <span className="text-xs text-white">pig wif hat</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.0007576</div>
                    <div className="text-xs text-green-400 font-bold">+965.56%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("TRUMP DOGS")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/trumpdogs.png"
                        alt="TRUMP DOGS"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #34D399", boxShadow: "0 0 5px rgba(52, 211, 153, 0.5)" }}
                      />
                    </div>
                    <span className="text-xs text-white">TRUMP DOGS</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.0004463</div>
                    <div className="text-xs text-green-400 font-bold">+368.32%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("Trump Dinner")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/trumpdinner.png"
                        alt="Trump Dinner"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #34D399", boxShadow: "0 0 5px rgba(52, 211, 153, 0.5)" }}
                      />
                    </div>
                    <span className="text-xs text-white">Trump Dinner</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.000318</div>
                    <div className="text-xs text-green-400 font-bold">+346.06%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("PEPE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-green-400 shadow-lg shadow-green-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-green-400 to-green-600 text-xs text-black font-bold">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-white">PEPE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.000018</div>
                    <div className="text-xs text-green-400 font-bold">+215.23%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("SHIB")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-orange-400 shadow-lg shadow-orange-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                        S
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-white">SHIB</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.000024</div>
                    <div className="text-xs text-green-400 font-bold">+158.45%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("DOGE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-blue-400 shadow-lg shadow-blue-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                        D
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-white">DOGE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.11218</div>
                    <div className="text-xs text-green-400 font-bold">+112.77%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 cursor-pointer hover:bg-green-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("unstable coin")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/unstablecoin.png"
                        alt="unstable coin"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #34D399", boxShadow: "0 0 5px rgba(52, 211, 153, 0.5)" }}
                      />
                    </div>
                    <span className="text-xs text-white">unstable coin</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-green-400 font-semibold">$0.000526</div>
                    <div className="text-xs text-green-400 font-bold">+86.73%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Coin of the Day */}
          <Card className="bg-black/80 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-cyan-400 flex items-center gap-2 font-semibold">
                Coin of the Day
                <TrendingUp className="h-4 w-4 text-cyan-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0 px-3 pb-3">
              <div className="h-48 overflow-y-auto custom-scrollbar cyan-scroll space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg shadow-purple-500/30"></div>
                    <span className="text-sm text-white">Bubblemaps</span>
                  </div>
                  <span className="text-xs text-purple-400">Today</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg shadow-green-500/30"></div>
                    <span className="text-sm text-white">Launch On Pump</span>
                  </div>
                  <span className="text-xs text-green-400">1d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-lg shadow-cyan-500/30"></div>
                    <span className="text-sm text-white">PancakeSwap</span>
                  </div>
                  <span className="text-xs text-cyan-400">2d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg shadow-yellow-500/30"></div>
                    <span className="text-sm text-white">Uniswap V3</span>
                  </div>
                  <span className="text-xs text-yellow-400">3d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full shadow-lg shadow-pink-500/30"></div>
                    <span className="text-sm text-white">SushiSwap</span>
                  </div>
                  <span className="text-xs text-pink-400">4d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-lg shadow-indigo-500/30"></div>
                    <span className="text-sm text-white">1inch Network</span>
                  </div>
                  <span className="text-xs text-indigo-400">5d ago</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg shadow-red-500/30"></div>
                    <span className="text-sm text-white">Curve Finance</span>
                  </div>
                  <span className="text-xs text-red-400">6d ago</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hourly Performers */}
          <Card className="bg-black/80 border border-pink-500/20 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-pink-400 font-semibold">Hourly Performers</CardTitle>
            </CardHeader>
            <CardContent className="p-0 px-3 pb-3">
              <div className="h-48 overflow-y-auto custom-scrollbar pink-scroll space-y-2">
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$BEAR")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/brown-bear.png" alt="BEAR" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$BEAR</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00042</div>
                    <div className="text-xs text-pink-400 font-bold">+28.7%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$ADHD")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/adhd-logo.png" alt="ADHD" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$ADHD</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00018</div>
                    <div className="text-xs text-pink-400 font-bold">+22.3%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$KITTY")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/hello-kitty.png" alt="KITTY" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$KITTY</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00076</div>
                    <div className="text-xs text-pink-400 font-bold">+19.8%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$ROBOT")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/robot-face.png" alt="ROBOT" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$ROBOT</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00231</div>
                    <div className="text-xs text-pink-400 font-bold">+17.5%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$YARD")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/dogs-yard.png" alt="YARD" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$YARD</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00058</div>
                    <div className="text-xs text-pink-400 font-bold">+15.2%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$NERD")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/glasses-guy.png" alt="NERD" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$NERD</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00124</div>
                    <div className="text-xs text-pink-400 font-bold">+12.9%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-1.5 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 cursor-pointer hover:bg-pink-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("$DOTS")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-pink-400">
                      <img src="/images/dot-pattern.png" alt="DOTS" className="w-full h-full object-cover" />
                    </div>
                    <span className="text-xs text-white">$DOTS</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-pink-400 font-semibold">$0.00037</div>
                    <div className="text-xs text-pink-400 font-bold">+10.4%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hot Topics */}
          <Card className="bg-black/80 border border-indigo-500/20 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-indigo-400 font-semibold">Hot Topics</CardTitle>
            </CardHeader>
            <CardContent className="p-0 px-3 pb-3">
              <div className="h-48 overflow-y-auto custom-scrollbar indigo-scroll space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                    <span className="text-sm text-white">AI</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+24.3%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <span className="text-sm text-white">Memes</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+18.7%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <span className="text-sm text-white">Political</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+12.1%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">G</span>
                    </div>
                    <span className="text-sm text-white">Gaming</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+9.8%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">D</span>
                    </div>
                    <span className="text-sm text-white">DeFi</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+7.4%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">N</span>
                    </div>
                    <span className="text-sm text-white">NFT</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+5.2%</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #EC4899, #F472B6)",
                        border: "2px solid #EC4899",
                        boxShadow: "0 0 5px rgba(236, 72, 153, 0.5)",
                      }}
                    >
                      <span className="text-white font-bold text-xs">L</span>
                    </div>
                    <span className="text-sm text-white">Layer 2</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">+3.9%</span>
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
              <CardTitle className="text-sm text-blue-400 font-semibold">Momentum Gainers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-h-48 overflow-y-auto custom-scrollbar blue-scroll space-y-3">
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("DOGE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-blue-400 shadow-lg shadow-blue-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-blue-400 to-blue-600 text-xs text-black font-bold">
                        D
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">DOGE</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">1</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("SHIB")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-orange-400 shadow-lg shadow-orange-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-orange-400 to-orange-600 text-xs text-black font-bold">
                        S
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">SHIB</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">2</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("PEPE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-green-400 shadow-lg shadow-green-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-green-400 to-green-600 text-xs text-black font-bold">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">PEPE</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">3</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("pig wif hat")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/pigwifhat.png"
                        alt="pig wif hat"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #3B82F6", boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">pig wif hat</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">4</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("TRUMP DOGS")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/trumpdogs.png"
                        alt="TRUMP DOGS"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #3B82F6", boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">TRUMP DOGS</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">5</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("Trump Dinner")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/trumpdinner.png"
                        alt="Trump Dinner"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #3B82F6", boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">Trump Dinner</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">6</span>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 cursor-pointer hover:bg-blue-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("unstable coin")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/unstablecoin.png"
                        alt="unstable coin"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #3B82F6", boxShadow: "0 0 5px rgba(59, 130, 246, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">unstable coin</span>
                  </div>
                  <span className="text-xs text-blue-400 font-bold">7</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recently Added */}
          <Card className="bg-black/80 border border-purple-500/20 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-purple-400 font-semibold">Holder Gainer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-h-48 overflow-y-auto custom-scrollbar purple-scroll space-y-3">
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("unstable coin")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/unstablecoin.png"
                        alt="unstable coin"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #A855F7", boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">unstable coin</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.000526</div>
                    <div className="text-xs text-green-400">+36.73%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("pig wif hat")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/pigwifhat.png"
                        alt="pig wif hat"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #A855F7", boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">pig wif hat</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.0007576</div>
                    <div className="text-xs text-green-400">+965.56%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("PEPE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-purple-400 shadow-lg shadow-purple-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                        P
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">PEPE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.000018</div>
                    <div className="text-xs text-green-400">+15.23%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("SHIB")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-purple-400 shadow-lg shadow-purple-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                        S
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">SHIB</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.000024</div>
                    <div className="text-xs text-green-400">+8.45%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("DOGE")}
                >
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6 border border-purple-400 shadow-lg shadow-purple-500/30">
                      <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-xs text-black font-bold">
                        D
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-white">DOGE</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.11218</div>
                    <div className="text-xs text-green-400">+12.77%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("TRUMP DOGS")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/trumpdogs.png"
                        alt="TRUMP DOGS"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #A855F7", boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">TRUMP DOGS</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.0004463</div>
                    <div className="text-xs text-green-400">+368.32%</div>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 cursor-pointer hover:bg-purple-500/20 transition-all duration-200"
                  onClick={() => handleCoinClick("Pepes Dog")}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="/images/pepesdog.png"
                        alt="Pepes Dog"
                        className="w-full h-full object-cover"
                        style={{ border: "2px solid #A855F7", boxShadow: "0 0 5px rgba(168, 85, 247, 0.5)" }}
                      />
                    </div>
                    <span className="text-sm text-white">Pepes Dog</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-purple-400 font-semibold">$0.016</div>
                    <div className="text-xs text-red-400">-53.37%</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Trending Topics */}
          <Card className="bg-black/80 border border-yellow-500/20 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-yellow-400 font-semibold">Hot &lt;500K</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-h-48 overflow-y-auto custom-scrollbar yellow-scroll space-y-3">
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">DT</span>
                    </div>
                    <span className="text-sm text-white">Donald Trump</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">760.8M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">D</span>
                    </div>
                    <span className="text-sm text-white">doge</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">326.42M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">L1</span>
                    </div>
                    <span className="text-sm text-white">Layer 1</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">223.86M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">B</span>
                    </div>
                    <span className="text-sm text-white">Bitcoin</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">189.34M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">E</span>
                    </div>
                    <span className="text-sm text-white">Ethereum</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">156.78M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">S</span>
                    </div>
                    <span className="text-sm text-white">Solana</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">134.92M</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        background: "linear-gradient(to bottom right, #FACC15, #FDE047)",
                        border: "2px solid #FACC15",
                        boxShadow: "0 0 5px rgba(250, 204, 21, 0.5)",
                      }}
                    >
                      <span className="text-black font-bold text-xs">C</span>
                    </div>
                    <span className="text-sm text-white">Cardano</span>
                  </div>
                  <span className="text-xs text-yellow-400 font-semibold">98.45M</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Buzz */}
          <Card className="bg-black/80 border border-red-500/20 shadow-lg shadow-red-500/10 hover:shadow-red-500/20 transition-all duration-300 backdrop-blur-[0.5rem]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-red-400 font-semibold">Worst Performers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 p-2 rounded-lg bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center shadow-lg shadow-red-500/30">
                  <span className="text-white font-bold">T</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-red-400">77 minutes ago</span>
                    <span className="text-xs text-white">Crypto Beast</span>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Tesla to buy an additional $3 billion worth of bitcoin, they already own $1...
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* WHSPR Picks */}
        <Card className="bg-black/80 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 mb-6 backdrop-blur-[0.5rem]">
          <CardHeader className="border-b border-cyan-500/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-cyan-400 font-bold">🔥 WHSPR Picks</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
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
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-black border border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-lg"></div>

                {/* Header with profile and close */}
                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-green-400 shadow-lg shadow-green-500/30">
                        <img src="/images/ninja-cat.png" alt="MASK" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black animate-pulse"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">$MASK</span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">catwifmask</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$13.0M</div>
                    <div className="text-gray-400 text-xs mt-1">👥 2.9K</div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-red-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 rounded-lg text-green-400 font-semibold transition-all duration-200 flex items-center gap-2">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-gray-400 text-xs">Called</div>
                    <div className="text-white font-bold">2d ago</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Current Gain</div>
                    <div className="text-green-400 font-bold">116.5x</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Highest Gain</div>
                    <div className="text-green-400 font-bold">177.9x</div>
                  </div>
                </div>
              </div>

              {/* Pick 2 - $PEPE */}
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-black border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-lg"></div>

                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-purple-400 shadow-lg shadow-purple-500/30">
                        <img src="/images/space-pig.png" alt="PEPE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full border-2 border-black animate-pulse"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">$PEPE</span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">pepewifhat</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$7.8B</div>
                    <div className="text-gray-400 text-xs mt-1">👥 234K</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-red-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 rounded-lg text-purple-400 font-semibold transition-all duration-200 flex items-center gap-2">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-gray-400 text-xs">Called</div>
                    <div className="text-white font-bold">5h ago</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Current Gain</div>
                    <div className="text-green-400 font-bold">89.2x</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Highest Gain</div>
                    <div className="text-green-400 font-bold">124.7x</div>
                  </div>
                </div>
              </div>

              {/* Pick 3 - $DOGE */}
              <div className="relative p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-black border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-lg"></div>

                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-lg overflow-hidden border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
                        <img src="/images/blue-bunny.png" alt="DOGE" className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full border-2 border-black animate-pulse"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-lg">$DOGE</span>
                        <button className="w-4 h-4 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors">
                          <span className="text-xs text-gray-300">📋</span>
                        </button>
                      </div>
                      <span className="text-gray-400 text-sm">dogewifcoin</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-xs">MC</div>
                    <div className="text-white font-semibold">$15.4B</div>
                    <div className="text-gray-400 text-xs mt-1">👥 4.8K</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                    <span className="text-red-400">✕</span>
                  </button>
                  <div className="flex gap-1">
                    <button className="w-8 h-8 bg-gray-800 hover:bg-yellow-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-yellow-400">⭐</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-red-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-red-400">❤️</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-blue-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-blue-400">👤</span>
                    </button>
                    <button className="w-8 h-8 bg-gray-800 hover:bg-green-500/20 rounded-lg flex items-center justify-center transition-colors border border-gray-600">
                      <span className="text-green-400">💬</span>
                    </button>
                  </div>
                  <button className="ml-auto px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 rounded-lg text-cyan-400 font-semibold transition-all duration-200 flex items-center gap-2">
                    <span>⚡</span>
                    Trade
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-gray-400 text-xs">Called</div>
                    <div className="text-white font-bold">1d ago</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Current Gain</div>
                    <div className="text-green-400 font-bold">45.8x</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs">Highest Gain</div>
                    <div className="text-green-400 font-bold">67.3x</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smart Traders */}
        <Card className="bg-black/80 border border-cyan-500/20 shadow-lg shadow-cyan-500/10 backdrop-blur-[0.5rem]">
          <CardHeader className="border-b border-cyan-500/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-cyan-400 font-bold">Smart Traders</CardTitle>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-black border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
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
              <div className="p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-cyan-400 shadow-lg shadow-cyan-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-cyan-600 text-black font-bold">
                      CW
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">CryptoWhale47</h3>
                    <p className="text-xs text-cyan-400">Elite Trader</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-cyan-400 font-bold">+$2.4M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">12.3K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-green-400">BTC +15.2% • 2h ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 2 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-purple-400 shadow-lg shadow-purple-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-purple-400 to-purple-600 text-black font-bold">
                      DM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">DefiMaster</h3>
                    <p className="text-xs text-purple-400">Pro Trader</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">87.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-purple-400 font-bold">+$1.8M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">8.7K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-green-400">ETH +8.4% • 1h ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 3 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-green-400 shadow-lg shadow-green-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-green-400 to-green-600 text-black font-bold">
                      AS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">AltcoinSniper</h3>
                    <p className="text-xs text-green-400">Rising Star</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">91.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-green-400 font-bold">+$890K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">5.2K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-green-400">SOL +22.1% • 30m ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 4 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-yellow-500/10 to-orange-500/5 border border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-yellow-400 shadow-lg shadow-yellow-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-black font-bold">
                      BH
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">BlockchainHunter</h3>
                    <p className="text-xs text-yellow-400">Veteran</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">89.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-yellow-400 font-bold">+$1.2M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">9.8K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-green-400">AVAX +12.7% • 45m ago</span>
                  </div>
                </div>
              </div>

              {/* Trader 5 */}
              <div className="p-4 rounded-lg bg-gradient-to-br from-pink-500/10 to-red-500/5 border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-pink-400 shadow-lg shadow-pink-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-pink-400 to-pink-600 text-black font-bold">
                      NF
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">NFTFlipKing</h3>
                    <p className="text-xs text-pink-400">Specialist</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">85.6%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-pink-400 font-bold">+$650K</span>
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
              <div className="p-4 rounded-lg bg-gradient-to-br from-indigo-500/10 to-blue-500/5 border border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12 border-2 border-indigo-400 shadow-lg shadow-indigo-500/30">
                    <AvatarFallback className="bg-gradient-to-br from-indigo-400 to-indigo-600 text-black font-bold">
                      QT
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-white font-semibold">QuantumTrader</h3>
                    <p className="text-xs text-indigo-400">Algorithm Expert</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50 animate-pulse"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Win Rate</span>
                    <span className="text-sm text-green-400 font-bold">92.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Total Profit</span>
                    <span className="text-sm text-indigo-400 font-bold">+$1.5M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Followers</span>
                    <span className="text-sm text-white font-semibold">7.9K</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Last Trade</span>
                    <span className="text-xs text-green-400">ADA +18.9% • 1h ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Stats Row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400">247</div>
                <div className="text-sm text-gray-300">Active Traders</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20">
                <div className="text-2xl font-bold text-green-400">$12.8M</div>
                <div className="text-sm text-gray-300">Total Volume Today</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20">
                <div className="text-2xl font-bold text-purple-400">89.2%</div>
                <div className="text-sm text-gray-300">Avg Win Rate</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20">
                <div className="text-2xl font-bold text-pink-400">1,847</div>
                <div className="text-sm text-gray-300">Trades Today</div>
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

  /* Custom Scrollbar Styles - Color Specific */
  .custom-scrollbar {
  scrollbar-width: thin;
}

/* Green scrollbar for Top Gainers */
.custom-scrollbar.green-scroll {
  scrollbar-color: rgba(34, 197, 94, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.green-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.green-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.green-scroll::-webkit-scrollbar-thumb {
  background: rgba(34, 197, 94, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.green-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 197, 94, 0.5);
}

/* Cyan scrollbar for Coin of the Day */
.custom-scrollbar.cyan-scroll {
  scrollbar-color: rgba(6, 182, 212, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.cyan-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.cyan-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.cyan-scroll::-webkit-scrollbar-thumb {
  background: rgba(6, 182, 212, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.cyan-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(6, 182, 212, 0.5);
}

/* Indigo scrollbar for Hot Topics */
.custom-scrollbar.indigo-scroll {
  scrollbar-color: rgba(99, 102, 241, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.indigo-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.indigo-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.indigo-scroll::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.indigo-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.5);
}

/* Blue scrollbar for Momentum Gainers */
.custom-scrollbar.blue-scroll {
  scrollbar-color: rgba(59, 130, 246, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.blue-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.blue-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.blue-scroll::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.blue-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.5);
}

/* Purple scrollbar for Holder Gainer */
.custom-scrollbar.purple-scroll {
  scrollbar-color: rgba(168, 85, 247, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.purple-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.purple-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.purple-scroll::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.purple-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}

/* Yellow scrollbar for Hot <500K */
.custom-scrollbar.yellow-scroll {
  scrollbar-color: rgba(250, 204, 21, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.yellow-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.yellow-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.yellow-scroll::-webkit-scrollbar-thumb {
  background: rgba(250, 204, 21, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.yellow-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(250, 204, 21, 0.5);
}

/* Pink scrollbar for Hourly Performers */
.custom-scrollbar.pink-scroll {
  scrollbar-color: rgba(236, 72, 153, 0.3) rgba(0, 0, 0, 0.1);
}

.custom-scrollbar.pink-scroll::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

.custom-scrollbar.pink-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 2px;
}

.custom-scrollbar.pink-scroll::-webkit-scrollbar-thumb {
  background: rgba(236, 72, 153, 0.3);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.custom-scrollbar.pink-scroll::-webkit-scrollbar-thumb:hover {
  background: rgba(236, 72, 153, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-corner {
  background: transparent;
}
`}</style>
    </div>
  )
}
