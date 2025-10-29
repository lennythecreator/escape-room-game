"use client"

import { Card } from "@/components/ui/card"
import { Target } from "lucide-react"

interface ChallengeObjectiveProps {
  objective: string
  requirements?: string[]
}

export function ChallengeObjective({ objective, requirements }: ChallengeObjectiveProps) {
  return (
    <Card className="p-4 bg-primary/5 border-primary/30">
      <div className="flex items-start gap-3">
        <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
        <div className="space-y-2 flex-1">
          <h3 className="font-mono font-bold text-primary">OBJECTIVE:</h3>
          <p className="text-sm leading-relaxed">{objective}</p>
          {requirements && requirements.length > 0 && (
            <ul className="space-y-1 text-sm text-muted-foreground">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  )
}
