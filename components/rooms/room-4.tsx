"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room4Props {
  partNumber: number
  onComplete: () => void
}

export function Room4({ partNumber, onComplete }: Room4Props) {
  const story = getStoryForRoom(4, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Check if the medication is in stock
medication_count = 15

if medication_count > 10:
    print("In stock")
else:
    print("Low stock")`
      case 2:
        return `# Check if patient can receive treatment
age = 25
has_insurance = True

if age >= 18 and has_insurance:
    print("Treatment approved")
else:
    print("Treatment denied")`
      case 3:
        return `# Complex access control system
security_level = 3
has_keycard = True

if security_level >= 5:
    if has_keycard:
        print("Full access granted")
    else:
        print("Keycard required")
else:
    print("Insufficient clearance")`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Use comparison operators to evaluate numeric conditions.",
          requirements: [
            "Use operators like ==, !=, <, >, <=, >=",
            "Compare numeric values",
            "Make decisions based on the comparison",
          ],
        }
      case 2:
        return {
          objective: "Combine multiple conditions using boolean logic (and/or).",
          requirements: [
            "Use 'and' to require both conditions to be true",
            "Or use 'or' to require at least one condition",
            "Test multiple variables in one if statement",
          ],
        }
      case 3:
        return {
          objective: "Create nested if statements to handle complex decision logic.",
          requirements: [
            "Place an if statement inside another if statement",
            "Use proper indentation for nested blocks",
            "Handle multiple levels of conditions",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "In stock"
      case 2:
        return "Treatment approved"
      case 3:
        return "Insufficient clearance"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-4-part-${partNumber}`}
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
          src="/images/pharmacy.jpg"
          alt="Old pharmacy with medicine cabinets"
          query="dark abandoned asylum pharmacy with old medicine cabinets and bottles"
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
