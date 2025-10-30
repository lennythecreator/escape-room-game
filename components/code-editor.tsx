"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, Play, Loader2 } from "lucide-react"
import { executePythonCode } from "@/lib/python-executor"
import { GameHint } from "@/components/game-hint"

interface CodeEditorProps {
  initialCode: string
  expectedOutput?: string
  hint: string
  onSuccess: () => void
  validateOutput?: (output: string) => boolean
  errorFeedback?: string
}

export function CodeEditor({ initialCode, expectedOutput, hint, onSuccess, validateOutput, errorFeedback }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState<string>("")
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [isPyodideLoading, setIsPyodideLoading] = useState(true)

  useEffect(() => {
    // Preload Pyodide on component mount
    const loadScript = async () => {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js"
      script.async = true
      document.head.appendChild(script)

      script.onload = () => {
        setIsPyodideLoading(false)
      }
    }

    loadScript()
  }, [])

  const handleSubmit = async () => {
    setIsRunning(true)
    setFeedback(null)
    setOutput("")

    const result = await executePythonCode(code)

    if (!result.success) {
      setFeedback({
        type: "error",
        message: `Error: ${result.error}`,
      })
      setIsRunning(false)
      return
    }

    setOutput(result.output)

    // Validate output
    const isCorrect = validateOutput ? validateOutput(result.output) : result.output === expectedOutput

    if (isCorrect) {
      setFeedback({ type: "success", message: "Correct! Door unlocking..." })
      setTimeout(() => {
        onSuccess()
      }, 1500)
    } else {
      const message = errorFeedback
        ? `Tip: ${errorFeedback}`
        : `Incorrect output. Expected: "${expectedOutput}" but got: "${result.output}"`
      setFeedback({ type: "error", message })
    }

    setIsRunning(false)
  }

  return (
    <div className="space-y-4">
      <Card className="p-4 bg-muted/30 border-border">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="font-mono text-sm min-h-[300px] bg-background border-border resize-none"
          spellCheck={false}
        />
      </Card>

      {output && (
        <Card className="p-4 bg-muted/50 border-border">
          <div className="space-y-2">
            <p className="text-xs font-mono text-muted-foreground">OUTPUT:</p>
            <pre className="font-mono text-sm text-foreground whitespace-pre-wrap">{output}</pre>
          </div>
        </Card>
      )}

      {feedback && (
        <Card
          className={`p-4 border-2 ${
            feedback.type === "success" ? "bg-primary/10 border-primary" : "bg-destructive/10 border-destructive"
          }`}
        >
          <div className="flex items-center gap-2">
            {feedback.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-primary" />
            ) : (
              <XCircle className="w-5 h-5 text-destructive" />
            )}
            <span className={`font-mono text-sm ${feedback.type === "success" ? "text-primary" : "text-destructive"}`}>
              {feedback.message}
            </span>
          </div>
        </Card>
      )}

      <div className="flex gap-3">
        <Button onClick={handleSubmit} className="flex-1 font-mono" size="lg" disabled={isRunning || isPyodideLoading}>
          {isRunning ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              RUNNING...
            </>
          ) : isPyodideLoading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              LOADING...
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              RUN CODE
            </>
          )}
        </Button>
        <Button onClick={() => setShowHint(!showHint)} variant="outline" size="lg" className="font-mono">
          {showHint ? "HIDE" : "HINT"}
        </Button>
      </div>

      <GameHint open={showHint} hint={hint} onClose={() => setShowHint(false)} />
    </div>
  )
}
