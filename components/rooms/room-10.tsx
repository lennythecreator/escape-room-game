"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"
import { Card } from "@/components/ui/card"

interface Room10Props {
  partNumber: number
  onComplete: () => void
}

export function Room10({ partNumber, onComplete }: Room10Props) {
  const story = getStoryForRoom(10, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Recursive function to calculate factorial
def factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test
result = factorial(5)
print(f"5! = {result}")`
      case 2:
        return `# List comprehension to filter and transform
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Create a list of squares of even numbers
squares_of_evens = [num ** 2 for num in numbers if num % 2 == 0]

print(squares_of_evens)`
      case 3:
        return `# Final challenge: Complete program combining everything
def analyze_security_codes(codes):
    # Filter codes that are greater than 100
    valid_codes = [code for code in codes if code > 100]
    
    # Calculate the sum of valid codes
    total = 0
    for code in valid_codes:
        total = total + code
    
    # Return both the count and total
    return len(valid_codes), total

def check_access(count, total):
    if count >= 3 and total > 500:
        return "ACCESS GRANTED"
    else:
        return "ACCESS DENIED"

# Main program
security_codes = [50, 150, 200, 75, 300, 125]
valid_count, code_sum = analyze_security_codes(security_codes)
access_status = check_access(valid_count, code_sum)

print(f"Valid codes: {valid_count}")
print(f"Total: {code_sum}")
print(f"Status: {access_status}")`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Create a recursive function that calls itself to solve a problem.",
          requirements: [
            "Define a function that calls itself",
            "Include a base case to stop recursion",
            "Use the recursive call to break down the problem",
          ],
        }
      case 2:
        return {
          objective: "Use list comprehension to create a new list with filtering and transformation.",
          requirements: [
            "Use [expression for item in list] syntax",
            "Add an if condition to filter items",
            "Transform items with an expression",
          ],
        }
      case 3:
        return {
          objective: "FINAL CHALLENGE: Combine all concepts to shut down the corrupted AI system.",
          requirements: [
            "Use multiple functions working together",
            "Apply list comprehension for filtering",
            "Use loops and conditionals for logic",
            "Return and unpack multiple values",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "5! = 120"
      case 2:
        return "[4, 16, 36, 64, 100]"
      case 3:
        return "Valid codes: 4\nTotal: 775\nStatus: ACCESS GRANTED"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-10-part-${partNumber}`}
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
          src="/images/server-room.jpg"
          alt="Server room with blinking lights"
          query="dark server room with racks of computers blinking red lights and cables"
        />

        <StackCompanion message={story?.story || ""} hint={story?.hint} />

        {partNumber === 3 && (
          <Card className="p-4 bg-destructive/10 border-destructive/30">
            <p className="text-sm font-mono text-destructive-foreground">
              <span className="font-bold">FINAL CHALLENGE:</span> This is it. Combine everything you've learned to shut
              down the corrupted AI and escape!
            </p>
          </Card>
        )}

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
