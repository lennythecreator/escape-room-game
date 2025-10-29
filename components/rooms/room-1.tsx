"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room1Props {
  partNumber: number
  onComplete: () => void
}

export function Room1({ partNumber, onComplete }: Room1Props) {
  const story = getStoryForRoom(1, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Calculate the result
result = 15 + 27
print(result)`
      case 2:
        return `# Print the welcome message
print("Welcome to Ravencrest Asylum")`
      case 3:
        return `# Calculate and print the door code
door_code = 100 - 42
print(door_code)`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Fix the calculation to add two numbers correctly and display the result.",
          requirements: ["Use the + operator to add 15 and 27", "Store the result in a variable or print it directly"],
        }
      case 2:
        return {
          objective: "Display a welcome message to the terminal.",
          requirements: ["Use the print() function", "Include text inside quotes (single or double)"],
        }
      case 3:
        return {
          objective: "Calculate the door code by subtracting 42 from 100 and print the result.",
          requirements: ["Use the - operator for subtraction", "Print the final result to unlock the door"],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "42"
      case 2:
        return "Welcome to Ravencrest Asylum"
      case 3:
        return "58"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-1-part-${partNumber}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-mono font-bold text-primary">{story?.title}</h2>
          {story?.intro && <p className="text-muted-foreground leading-relaxed">{story.intro}</p>}
        </div>

        <RoomImage
          src="/images/entrance-hall.jpg"
          alt="Dark entrance hall of Ravencrest Asylum"
          query="dark abandoned asylum entrance hall with flickering lights"
        />

        <StackCompanion message={story?.story || ""} hint={story?.hint} />

        <ChallengeObjective objective={objective.objective} requirements={objective.requirements} />

        <CodeEditor
          initialCode={getInitialCode(partNumber)}
          expectedOutput={getExpectedOutput(partNumber)}
          hint={story?.hint || ""}
          onSuccess={onComplete}
        />
      </div>
    </motion.div>
  )
}
