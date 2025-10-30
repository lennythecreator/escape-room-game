"use client"

import { useState } from "react"
import { objectives } from "@/lib/objectives"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronRight, Copy, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function DevView() {
  const [expandedRooms, setExpandedRooms] = useState<Set<number>>(new Set())
  const [expandedParts, setExpandedParts] = useState<Set<string>>(new Set())

  const toggleRoom = (room: number) => {
    const newSet = new Set(expandedRooms)
    if (newSet.has(room)) {
      newSet.delete(room)
    } else {
      newSet.add(room)
    }
    setExpandedRooms(newSet)
  }

  const togglePart = (key: string) => {
    const newSet = new Set(expandedParts)
    if (newSet.has(key)) {
      newSet.delete(key)
    } else {
      newSet.add(key)
    }
    setExpandedParts(newSet)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-mono font-bold text-primary mb-2">
                🔍 DEV VIEW - All Challenges
              </h1>
              <p className="text-muted-foreground">
                Overview of all rooms, challenges, and expected outputs
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                const newSet = new Set(expandedRooms)
                if (newSet.size === Object.keys(objectives).length) {
                  setExpandedRooms(new Set())
                } else {
                  Object.keys(objectives).forEach((key) => newSet.add(parseInt(key)))
                  setExpandedRooms(newSet)
                }
              }}
            >
              {expandedRooms.size === Object.keys(objectives).length ? "Collapse All" : "Expand All"}
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
              <div className="text-2xl font-mono font-bold text-primary">
                {Object.keys(objectives).length}
              </div>
              <div className="text-sm text-muted-foreground">Total Rooms</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-mono font-bold text-green-600 dark:text-green-400">
                {Object.values(objectives).reduce((sum, parts) => sum + Object.keys(parts).length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Total Challenges</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-mono font-bold text-orange-600 dark:text-orange-400">
                {Object.values(objectives).reduce(
                  (sum, parts) =>
                    sum +
                    Object.values(parts).filter(
                      (obj) => obj.initialCode.includes("BUG") || obj.initialCode.includes("TODO")
                    ).length,
                  0
                )}
              </div>
              <div className="text-sm text-muted-foreground">Bug Fix Challenges</div>
            </Card>
            <Card className="p-4">
              <div className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
                {Object.values(objectives).reduce(
                  (sum, parts) =>
                    sum +
                    Object.values(parts).filter((obj) => obj.errorFeedback !== undefined).length,
                  0
                )}
              </div>
              <div className="text-sm text-muted-foreground">With Error Feedback</div>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(objectives).map(([roomNum, parts]) => {
            const roomNumber = parseInt(roomNum)
            const isExpanded = expandedRooms.has(roomNumber)

            return (
              <Card key={roomNumber} className="overflow-hidden">
                <div
                  className="p-4 bg-card hover:bg-muted/30 cursor-pointer transition-colors"
                  onClick={() => toggleRoom(roomNumber)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {isExpanded ? (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      )}
                      <div>
                        <h2 className="text-xl font-mono font-bold text-primary">
                          Room {roomNumber}: {Object.values(parts)[0].roomTitle}
                        </h2>
                        {Object.values(parts)[0].roomIntro && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {Object.values(parts)[0].roomIntro}
                          </p>
                        )}
                      </div>
                    </div>
                    <Badge variant="secondary">{Object.keys(parts).length} parts</Badge>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t">
                    {Object.entries(parts).map(([partNum, objective]) => {
                      const partKey = `${roomNumber}-${partNum}`
                      const isPartExpanded = expandedParts.has(partKey)

                      return (
                        <div key={partNum} className="border-b last:border-b-0">
                          <div
                            className="px-6 py-4 bg-muted/30 hover:bg-muted/50 cursor-pointer transition-colors"
                            onClick={() => togglePart(partKey)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {isPartExpanded ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                                <div>
                                  <h3 className="font-mono font-semibold text-lg">
                                    Part {partNum}
                                  </h3>
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {objective.story}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {isPartExpanded && (
                            <div className="px-6 py-6 space-y-6 bg-background">
                              {/* Objective */}
                              <div>
                                <h4 className="font-mono font-semibold mb-2 text-primary">
                                  Objective
                                </h4>
                                <p className="text-sm text-muted-foreground">{objective.objective}</p>
                              </div>

                              {/* Requirements */}
                              {objective.requirements && objective.requirements.length > 0 && (
                                <div>
                                  <h4 className="font-mono font-semibold mb-2 text-primary">
                                    Requirements
                                  </h4>
                                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                                    {objective.requirements.map((req, idx) => (
                                      <li key={idx}>{req}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Initial Code */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-mono font-semibold text-primary">
                                    Initial Code
                                  </h4>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyToClipboard(objective.initialCode)}
                                  >
                                    <Copy className="w-3 h-3 mr-1" />
                                    Copy
                                  </Button>
                                </div>
                                <Card className="p-4 bg-muted/50">
                                  <pre className="text-xs font-mono whitespace-pre-wrap overflow-x-auto">
                                    <code>{objective.initialCode}</code>
                                  </pre>
                                </Card>
                              </div>

                              {/* Expected Output */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-mono font-semibold text-green-600 dark:text-green-400">
                                    Expected Output
                                  </h4>
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => copyToClipboard(objective.expectedOutput)}
                                  >
                                    <Copy className="w-3 h-3 mr-1" />
                                    Copy
                                  </Button>
                                </div>
                                <Card className="p-4 bg-green-500/10 border-green-500/20">
                                  <pre className="text-xs font-mono whitespace-pre-wrap">
                                    <code className="text-green-700 dark:text-green-400">
                                      {objective.expectedOutput}
                                    </code>
                                  </pre>
                                </Card>
                              </div>

                              {/* Hint */}
                              <div>
                                <h4 className="font-mono font-semibold mb-2 text-orange-600 dark:text-orange-400">
                                  Hint
                                </h4>
                                <p className="text-sm text-muted-foreground italic">
                                  {objective.hint}
                                </p>
                              </div>

                              {/* Error Feedback */}
                              {objective.errorFeedback && (
                                <div>
                                  <h4 className="font-mono font-semibold mb-2 text-red-600 dark:text-red-400">
                                    Error Feedback
                                  </h4>
                                  <p className="text-sm text-muted-foreground italic">
                                    {objective.errorFeedback}
                                  </p>
                                </div>
                              )}

                              {/* Room Title */}
                              <div className="pt-4 border-t">
                                <div className="grid grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-semibold text-muted-foreground">
                                      Room:{" "}
                                    </span>
                                    {objective.roomTitle}
                                  </div>
                                  <div>
                                    <span className="font-semibold text-muted-foreground">
                                      Image:{" "}
                                    </span>
                                    {objective.imageUrl}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </Card>
            )
          })}
        </div>

        <div className="mt-8 p-4 bg-card border rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Code className="w-4 h-4" />
            <span>
              Total: {Object.keys(objectives).length} rooms,{" "}
              {Object.values(objectives).reduce(
                (sum, parts) => sum + Object.keys(parts).length,
                0
              )}{" "}
              challenges
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}