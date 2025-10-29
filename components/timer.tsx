"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

interface TimerProps {
  startTime: number | null
}

export function Timer({ startTime }: TimerProps) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    if (!startTime) return

    const interval = setInterval(() => {
      setElapsed(Date.now() - startTime)
    }, 100)

    return () => clearInterval(interval)
  }, [startTime])

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex items-center gap-2 font-mono text-primary">
      <Clock className="w-4 h-4" />
      <span className="text-lg font-bold">{formatTime(elapsed)}</span>
    </div>
  )
}
