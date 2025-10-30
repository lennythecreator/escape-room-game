"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
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
  const [teamName, setTeamName] = useState<string>("")
  const [teamDialogOpen, setTeamDialogOpen] = useState(false)
  const [teamNameInput, setTeamNameInput] = useState("")

  const totalRooms = 10

  // load persisted state on mount
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem("escape-game-state") : null
      if (raw) {
        const saved = JSON.parse(raw)
        if (saved) {
          setGameState(saved.gameState ?? "intro")
          setCurrentRoom(saved.currentRoom ?? 0)
          setCurrentPart(saved.currentPart ?? 1)
          setStartTime(saved.startTime ?? null)
          setEndTime(saved.endTime ?? null)
          setTeamName(saved.teamName ?? "")
        }
      }
    } catch {}
  }, [])

  // persist on change
  useEffect(() => {
    try {
      const data = {
        gameState,
        currentRoom,
        currentPart,
        startTime,
        endTime,
        teamName,
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("escape-game-state", JSON.stringify(data))
      }
    } catch {}
  }, [gameState, currentRoom, currentPart, startTime, endTime, teamName])

  const proceedStart = () => {
    setGameState("playing")
    setStartTime(Date.now())
    setCurrentRoom(1)
    setCurrentPart(1)
  }

  const startGame = () => {
    if (!teamName) {
      setTeamNameInput("")
      setTeamDialogOpen(true)
      return
    }
    proceedStart()
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
      // save score entry
      try {
        const total = (Date.now() - (startTime ?? Date.now()))
        const raw = typeof window !== "undefined" ? localStorage.getItem("escape-game-scores") : null
        const scores = raw ? JSON.parse(raw) : []
        scores.push({ teamName: teamName || "", totalTimeMs: total, completedAt: new Date().toISOString() })
        if (typeof window !== "undefined") {
          localStorage.setItem("escape-game-scores", JSON.stringify(scores))
        }
      } catch {}
    }
  }

  const resetGame = () => {
    setGameState("intro")
    setCurrentRoom(0)
    setCurrentPart(1)
    setStartTime(null)
    setEndTime(null)
    // keep teamName for convenience; if you want to clear it, uncomment next line
    // setTeamName("")
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {gameState === "intro" && <GameIntro onStart={startGame} />}
      <Dialog open={teamDialogOpen} onOpenChange={setTeamDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-mono">Enter your team name</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <Input
              placeholder="e.g. Debug Detectives"
              value={teamNameInput}
              onChange={(e) => setTeamNameInput(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setTeamDialogOpen(false)
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                const name = teamNameInput.trim()
                if (!name) return
                setTeamName(name)
                setTeamDialogOpen(false)
                proceedStart()
              }}
            >
              Start Game
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
                {teamName && (
                  <div className="text-base text-green-500 font-mono text-muted-foreground">Team: {teamName}</div>
                )}
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
