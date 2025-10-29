"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room8Props {
  partNumber: number
  onComplete: () => void
}

export function Room8({ partNumber, onComplete }: Room8Props) {
  const story = getStoryForRoom(8, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Function with default parameter
def set_alarm(time="08:00"):
    print(f"Alarm set for {time}")

# Call with and without argument
set_alarm()
set_alarm("06:30")`
      case 2:
        return `# Function returning multiple values
def get_patient_stats(age, weight):
    bmi = weight / ((age / 100) ** 2)
    category = "Normal" if 18.5 <= bmi <= 24.9 else "Check"
    return bmi, category

# Receive multiple return values
bmi_value, health_category = get_patient_stats(25, 70)
print(f"BMI: {bmi_value}, Status: {health_category}")`
      case 3:
        return `# Function calling another function
def calculate_total(price, quantity):
    return price * quantity

def apply_discount(total, discount_percent):
    discount = total * (discount_percent / 100)
    return total - discount

def final_price(price, quantity, discount):
    total = calculate_total(price, quantity)
    final = apply_discount(total, discount)
    return final

# Declare the result variable before using it
result = final_price(100, 3, 10)
print(f"Final price: ${result}")`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Create a function with default parameter values.",
          requirements: [
            "Set a default value in the parameter definition",
            "Call the function with and without arguments",
            "The default value should be used when no argument is provided",
          ],
        }
      case 2:
        return {
          objective: "Return multiple values from a function and unpack them.",
          requirements: [
            "Return multiple values separated by commas",
            "Unpack the returned values into separate variables",
            "Use the unpacked values in your code",
          ],
        }
      case 3:
        return {
          objective: "Create functions that call other functions to build complex logic.",
          requirements: [
            "Define multiple functions",
            "Call one function from inside another",
            "Chain function calls to solve a problem",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "Alarm set for 08:00\nAlarm set for 06:30"
      case 2:
        return "BMI: 112.0, Status: Check"
      case 3:
        return "Final price: $270.0"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-8-part-${partNumber}`}
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
          src="/images/isolation-chamber.jpg"
          alt="Padded isolation chamber"
          query="dark abandoned asylum isolation chamber with padded walls"
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
