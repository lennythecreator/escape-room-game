"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface GameIntroProps {
  onStart: () => void
}

export function GameIntro({ onStart }: GameIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full p-8 bg-card border-2 border-primary/30">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-mono font-bold text-primary glitch">BUGGED & BURIED</h1>
            <p className="text-sm text-muted-foreground font-mono">[RAVENCREST ASYLUM - SYSTEM CORRUPTED]</p>
          </div>

          <div className="space-y-4 text-foreground/90">
            <p className="leading-relaxed">
              You wake up in the abandoned Ravencrest Mental Asylum. The building's security system has gone haywire,
              locking all exits with corrupted code puzzles. But you're not alone...
            </p>

            <div className="bg-primary/10 p-4 rounded border border-primary/30 flex items-start gap-3">
              <div className="text-4xl">🐕</div>
              <div>
                <p className="font-mono font-semibold text-primary mb-1">Meet Stack - Dog Detective</p>
                <p className="text-sm leading-relaxed">
                  A scruffy terrier detective who got trapped investigating the asylum. Stack knows his way around code
                  and will guide you through each Python challenge. He's got a nose for bugs and a tail for debugging!
                </p>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded border border-border">
              <h3 className="font-mono font-semibold text-primary mb-2">Mission Objectives:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Escape 10 rooms by solving 3 Python challenges in each (30 total puzzles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Master operations, conditionals, loops, and functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Uncover the dark truth about Stack and Ravencrest Asylum</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">▸</span>
                  <span>Beat the clock: 30 min (intermediate) or 50 min (beginner)</span>
                </li>
              </ul>
            </div>

            <div className="bg-destructive/10 border border-destructive/30 p-4 rounded">
              <p className="text-sm text-destructive-foreground">
                <span className="font-mono font-bold">WARNING:</span> The corrupted system is hunting for intruders.
                Debug fast, escape faster...
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button onClick={onStart} size="lg" className="font-mono text-lg px-8">
              BEGIN ESCAPE SEQUENCE
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
