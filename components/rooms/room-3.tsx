"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room3Props {
  partNumber: number
  onComplete: () => void
}

export function Room3({ partNumber, onComplete }: Room3Props) {
  const story = getStoryForRoom(3, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Check if the door code is correct
door_code = 1234
user_input = 1234

if user_input == door_code:
    print("Door unlocked!")
else:
    print("Access denied")`
      case 2:
        return `# Check the patient's temperature
temperature = 38.5

if temperature > 37.5:
    print("Fever detected")
else:
    print("Temperature normal")`
      case 3:
        return `# Determine access level based on clearance
clearance_level = 3

if clearance_level >= 5:
    print("Full access granted")
elif clearance_level >= 3:
    print("Partial access granted")
else:
    print("Access denied")`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Use an if statement to check a condition and execute code based on the result.",
          requirements: [
            "Write an if statement with a condition",
            "Use a comparison operator (==, !=, >, <)",
            "Include a colon (:) and proper indentation",
          ],
        }
      case 2:
        return {
          objective: "Handle two different outcomes using if-else logic.",
          requirements: [
            "Use an if statement for the first condition",
            "Add an else clause for the alternative",
            "Both branches should have proper indentation",
          ],
        }
      case 3:
        return {
          objective: "Check multiple conditions using if, elif, and else statements.",
          requirements: [
            "Start with an if statement",
            "Add elif for additional conditions",
            "End with else for remaining cases",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "Door unlocked!"
      case 2:
        return "Fever detected"
      case 3:
        return "Partial access granted"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-3-part-${partNumber}`}
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
          src="/images/waiting-room.jpg"
          alt="Eerie waiting room with old chairs"
          query="dark abandoned asylum waiting room with old chairs and peeling wallpaper"
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
