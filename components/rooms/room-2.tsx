"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room2Props {
  partNumber: number
  onComplete: () => void
}

export function Room2({ partNumber, onComplete }: Room2Props) {
  const story = getStoryForRoom(2, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Create a variable to store the patient name
patient_name = "John Doe"
print(patient_name)`
      case 2:
        return `# Combine the first and last name
first_name = "Jane"
last_name = "Smith"
full_name = first_name + " " + last_name
print(full_name)`
      case 3:
        return `# Calculate the total using variables
rooms_unlocked = 2
rooms_remaining = 8
total_rooms = rooms_unlocked + rooms_remaining
print(total_rooms)`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Create a variable to store text data and display it.",
          requirements: [
            "Use the = operator to assign a value to a variable",
            "Store a string (text in quotes)",
            "Print the variable",
          ],
        }
      case 2:
        return {
          objective: "Combine two strings together using concatenation.",
          requirements: [
            "Use the + operator to join strings",
            "Add a space between the strings",
            "Print the combined result",
          ],
        }
      case 3:
        return {
          objective: "Use variables to perform arithmetic and calculate a total.",
          requirements: ["Create variables with numeric values", "Add the variables together", "Print the total"],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "John Doe"
      case 2:
        return "Jane Smith"
      case 3:
        return "10"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-2-part-${partNumber}`}
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
          src="/images/reception.jpg"
          alt="Abandoned reception desk with scattered papers"
          query="dark abandoned asylum reception desk with old papers and flickering monitor"
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
