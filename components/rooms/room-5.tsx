"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room5Props {
  partNumber: number
  onComplete: () => void
}

export function Room5({ partNumber, onComplete }: Room5Props) {
  const story = getStoryForRoom(5, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Print numbers 0 to 4 using range
for i in range(5):
    print(i)`
      case 2:
        return `# Loop through a list of experiments
experiments = ["Test A", "Test B", "Test C"]
for experiment in experiments:
    print(experiment)`
      case 3:
        return `# Use enumerate to get index and value
samples = ["Blood", "Tissue", "DNA"]
for index, sample in enumerate(samples):
    print(f"Sample {index}: {sample}")`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Use a for loop with range() to iterate a specific number of times.",
          requirements: [
            "Use the for keyword to create a loop",
            "Use range() to generate numbers",
            "Include a colon and proper indentation",
          ],
        }
      case 2:
        return {
          objective: "Loop through each item in a list directly.",
          requirements: [
            "Use for...in syntax to iterate",
            "Loop through a list variable",
            "Access each item in the list",
          ],
        }
      case 3:
        return {
          objective: "Use enumerate() to get both the index and value while looping.",
          requirements: [
            "Use enumerate() function with a list",
            "Unpack both index and value in the loop",
            "Access both the position and item",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "0\n1\n2\n3\n4"
      case 2:
        return "Test A\nTest B\nTest C"
      case 3:
        return "Sample 0: Blood\nSample 1: Tissue\nSample 2: DNA"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-5-part-${partNumber}`}
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
          src="/images/laboratory.jpg"
          alt="Dark laboratory with test tubes and equipment"
          query="dark abandoned asylum laboratory with test tubes beakers and old equipment"
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
