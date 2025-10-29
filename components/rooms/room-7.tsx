"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room7Props {
  partNumber: number
  onComplete: () => void
}

export function Room7({ partNumber, onComplete }: Room7Props) {
  const story = getStoryForRoom(7, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Define a function that prints a greeting
def greet():
    print("Hello from the Operating Theater")

# Call the function
greet()`
      case 2:
        return `# Define a function that takes a name parameter
def greet_patient(name):
    print(f"Hello, {name}")

# Call the function with an argument
greet_patient("Dr. Smith")`
      case 3:
        return `# Define a function that returns a value
def calculate_dosage(weight, rate):
    dosage = weight * rate
    return dosage

# Call and print the result
result = calculate_dosage(70, 0.5)
print(result)`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Define and call a basic function with no parameters.",
          requirements: [
            "Use def keyword to define a function",
            "Include parentheses and a colon",
            "Call the function using its name with ()",
          ],
        }
      case 2:
        return {
          objective: "Create a function that accepts parameters to make it reusable.",
          requirements: [
            "Add parameters inside the function definition",
            "Use the parameters inside the function",
            "Pass arguments when calling the function",
          ],
        }
      case 3:
        return {
          objective: "Use the return statement to send a value back from a function.",
          requirements: [
            "Define a function with parameters",
            "Calculate a result inside the function",
            "Use return to send the value back",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "Hello from the Operating Theater"
      case 2:
        return "Hello, Dr. Smith"
      case 3:
        return "35.0"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-7-part-${partNumber}`}
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
          src="/images/operating-theater.jpg"
          alt="Old operating theater with surgical equipment"
          query="dark abandoned asylum operating theater with old surgical equipment and operating table"
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
