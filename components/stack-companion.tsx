"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { GameHint } from "./game-hint"

interface StackCompanionProps {
  message: string
  hint?: string
  showHintButton?: boolean
}

export function StackCompanion({ message, hint, showHintButton = true }: StackCompanionProps) {
  const [showHint, setShowHint] = useState(false)

  return (
    <Card className="bg-primary/5 border-primary/30 p-4">
      <div className="flex items-start gap-3">
        <div className="text-3xl shrink-0">🐕</div>
        <div className="flex-1 space-y-2">
          <div className="font-mono font-semibold text-primary text-sm">Stack says:</div>
          <p className="text-sm leading-relaxed text-foreground/90">{message}</p>

          {hint && showHintButton && (
            <div className="pt-2">
              <Button variant="outline" size="sm" onClick={() => setShowHint(true)} className="text-xs">
                Need a hint?
              </Button>
            </div>
          )}
        </div>
      </div>
      <GameHint open={Boolean(showHint)} hint={hint ?? ""} onClose={() => setShowHint(false)} />
    </Card>
  )
}
