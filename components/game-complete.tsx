"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Trophy, Clock, RotateCcw } from "lucide-react"

interface GameCompleteProps {
  totalTime: number
  onRestart: () => void
}

export function GameComplete({ totalTime, onRestart }: GameCompleteProps) {
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes}m ${seconds}s`
  }

  const getPerformanceRating = (ms: number) => {
    const minutes = ms / 1000 / 60
    if (minutes < 10) return { rating: "EXCEPTIONAL", color: "text-primary" }
    if (minutes < 20) return { rating: "EXCELLENT", color: "text-accent" }
    if (minutes < 30) return { rating: "GOOD", color: "text-foreground" }
    return { rating: "COMPLETED", color: "text-muted-foreground" }
  }

  const performance = getPerformanceRating(totalTime)

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 bg-card border-2 border-primary/30">
        <div className="space-y-6 text-center">
          <div className="flex justify-center">
            <Trophy className="w-20 h-20 text-primary" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-mono font-bold text-primary">ESCAPE SUCCESSFUL</h1>
            <p className="text-muted-foreground font-mono">[ASYLUM SECURITY SYSTEM RESTORED]</p>
          </div>

          <div className="bg-muted/50 p-6 rounded border border-border space-y-4">
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Total Escape Time</div>
                <div className="text-3xl font-mono font-bold text-foreground">{formatTime(totalTime)}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-sm text-muted-foreground mb-1">Performance Rating</div>
              <div className={`text-2xl font-mono font-bold ${performance.color}`}>{performance.rating}</div>
            </div>
          </div>

          <div className="space-y-3 text-left bg-secondary/30 p-4 rounded">
            <p className="text-sm text-foreground/90">
              You've successfully debugged all 6 rooms and escaped from Ravencrest Asylum. The corrupted security system
              has been restored, and you're free to leave.
            </p>
            <p className="text-sm text-muted-foreground">Think you can do better? Try again and beat your time!</p>
          </div>

          <Button onClick={onRestart} size="lg" className="font-mono text-lg px-8">
            <RotateCcw className="w-4 h-4 mr-2" />
            RESTART SIMULATION
          </Button>
        </div>
      </Card>
    </div>
  )
}
