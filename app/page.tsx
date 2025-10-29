"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { GameIntro } from "@/components/game-intro"
import { GameRoom } from "@/components/game-room"
import { GameComplete } from "@/components/game-complete"
import { Timer } from "@/components/timer"
import { ProgressBar } from "@/components/progress-bar"

export default function EscapeRoomGame() {
  const [gameState, setGameState] = useState<"intro" | "playing" | "complete">("intro")
  const [currentRoom, setCurrentRoom] = useState(0)
  const [currentPart, setCurrentPart] = useState(1)
  const [startTime, setStartTime] = useState<number | null>(null)
  const [endTime, setEndTime] = useState<number | null>(null)

  const totalRooms = 10

  const startGame = () => {
    setGameState("playing")
    setStartTime(Date.now())
    setCurrentRoom(1)
    setCurrentPart(1)
  }

  const completePart = () => {
    if (currentPart < 3) {
      setCurrentPart(currentPart + 1)
    } else if (currentRoom < totalRooms) {
      setCurrentRoom(currentRoom + 1)
      setCurrentPart(1)
    } else {
      setEndTime(Date.now())
      setGameState("complete")
    }
  }

  const resetGame = () => {
    setGameState("intro")
    setCurrentRoom(0)
    setCurrentPart(1)
    setStartTime(null)
    setEndTime(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {gameState === "intro" && <GameIntro onStart={startGame} />}

      {gameState === "playing" && (
        <div className="flex flex-col h-screen">
          <div className="border-b border-border bg-card">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <h1 className="text-xl font-mono font-bold text-primary">BUGGED & BURIED</h1>
                  <div className="text-sm text-muted-foreground">
                    Room {currentRoom} of {totalRooms} - Part {currentPart}/3
                  </div>
                </div>
                <Timer startTime={startTime} />
              </div>
              <ProgressBar current={(currentRoom - 1) * 3 + currentPart} total={totalRooms * 3} />
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <AnimatePresence mode="wait">
              <GameRoom
                key={`room-${currentRoom}-part-${currentPart}`}
                roomNumber={currentRoom}
                partNumber={currentPart}
                onComplete={completePart}
              />
            </AnimatePresence>
          </div>
        </div>
      )}

      {gameState === "complete" && (
        <GameComplete totalTime={endTime && startTime ? endTime - startTime : 0} onRestart={resetGame} />
      )}
    </div>
  )
}
