"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { getStoryForRoom } from "@/lib/story-data"

interface Room9Props {
  partNumber: number
  onComplete: () => void
}

export function Room9({ partNumber, onComplete }: Room9Props) {
  const story = getStoryForRoom(9, partNumber)

  function getInitialCode(part: number) {
    switch (part) {
      case 1:
        return `# Function with loop and conditionals
def count_critical_patients(patients):
    count = 0
    for patient in patients:
        if patient['status'] == 'critical':
            count = count + 1
    return count

# Test data
patient_list = [
    {'name': 'John', 'status': 'stable'},
    {'name': 'Jane', 'status': 'critical'},
    {'name': 'Bob', 'status': 'critical'}
]
result = count_critical_patients(patient_list)
print(f"Critical patients: {result}")`
      case 2:
        return `# Function that processes a list and returns results
def filter_and_transform(numbers):
    result = []
    for num in numbers:
        if num > 10:
            result.append(num * 2)
    return result

# Test
data = [5, 12, 8, 15, 20]
output = filter_and_transform(data)
print(output)`
      case 3:
        return `# Nested loops in a function
def create_schedule(days, time_slots):
    schedule = []
    for day in days:
        for time in time_slots:
            schedule.append(f"{day} at {time}")
    return schedule

# Test
days = ['Monday', 'Tuesday']
times = ['9:00', '14:00']
result = create_schedule(days, times)
for appointment in result:
    print(appointment)`
      default:
        return ""
    }
  }

  function getObjective(part: number) {
    switch (part) {
      case 1:
        return {
          objective: "Combine loops and conditionals inside a function to process data.",
          requirements: [
            "Create a function that accepts a parameter",
            "Use a for loop to iterate through data",
            "Use if statements to filter or count items",
          ],
        }
      case 2:
        return {
          objective: "Build a new list by filtering and transforming data in a function.",
          requirements: [
            "Loop through a list inside a function",
            "Use conditionals to filter items",
            "Use .append() to build a result list",
          ],
        }
      case 3:
        return {
          objective: "Use nested loops inside a function to generate combinations.",
          requirements: [
            "Create a function with nested for loops",
            "Loop through multiple lists",
            "Combine elements from different lists",
          ],
        }
      default:
        return { objective: "" }
    }
  }

  function getExpectedOutput(part: number) {
    switch (part) {
      case 1:
        return "Critical patients: 2"
      case 2:
        return "[24, 30, 40]"
      case 3:
        return "Monday at 9:00\nMonday at 14:00\nTuesday at 9:00\nTuesday at 14:00"
      default:
        return ""
    }
  }

  const objective = getObjective(partNumber)

  return (
    <motion.div
      key={`room-9-part-${partNumber}`}
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
          src="/images/records-room.jpg"
          alt="Dark records room with filing cabinets"
          query="dark abandoned asylum records room with old filing cabinets and scattered papers"
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
