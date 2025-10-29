"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room6Props {
  partNumber: number
  onComplete: () => void
}

export function Room6({ partNumber, onComplete }: Room6Props) {
  const story = getStoryForRoom(6, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Count down from 5 to 1 using while
count = 5
while count > 0:
    print(count)
    count = count - 1`
      case 2:
        return `# Find the first number divisible by 7
number = 1
while number < 100:
    if number % 7 == 0:
        print(f"Found: {number}")
        break
    number = number + 1`
      case 3:
        return `# Print only even numbers from 1 to 10
number = 1
while number <= 10:
    if number % 2 == 0:
        print(number)
    number = number + 1`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Use a while loop to repeat code as long as a condition is true.",
          requirements: [
            "Use the while keyword with a condition",
            "Update the loop variable inside the loop",
            "Include proper indentation",
          ],
        }
      case 2:
        return {
          objective: "Use the break statement to exit a loop early when a condition is met.",
          requirements: ["Create a while loop", "Check a condition inside the loop", "Use break to stop the loop"],
        }
      case 3:
        return {
          objective: "Combine while loops with conditionals to control loop behavior.",
          requirements: [
            "Use a while loop to iterate",
            "Add an if statement inside the loop",
            "Control what gets executed based on conditions",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "5\n4\n3\n2\n1"
      case 2:
        return "Found: 7"
      case 3:
        return "2\n4\n6\n8\n10"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-6-part-${partNumber}`}
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
          src="/images/patient-ward.jpg"
          alt="Abandoned patient ward with empty beds"
          query="dark abandoned asylum patient ward with empty hospital beds and dim lighting"
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
