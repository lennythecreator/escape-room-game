"use client"

import { motion } from "framer-motion"
import { StackCompanion } from "@/components/stack-companion"
import { ChallengeObjective } from "@/components/challenge-objective"
import { RoomImage } from "@/components/room-image"
import { CodeEditor } from "@/components/code-editor"
import { ObjectiveType } from "@/lib/objectives"

interface Room8Props {
  objective: ObjectiveType
  onComplete: () => void
}

export function Room8({ objective, onComplete }: Room8Props) {
  return (
    <motion.div
      key={`room-8-part-${objective.part}`}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8 max-w-4xl"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-mono font-bold text-primary">{objective.roomTitle}</h2>
          {objective.roomIntro && <p className="text-muted-foreground leading-relaxed">{objective.roomIntro}</p>}
        </div>

        <RoomImage
          src={objective.imageUrl}
          alt="Padded isolation chamber"
          query="dark abandoned asylum isolation chamber with padded walls"
        />

        <StackCompanion message={objective.story} hint={objective.hint} />

        <ChallengeObjective objective={objective.objective} requirements={objective.requirements} />

        <CodeEditor
          initialCode={objective.initialCode}
          expectedOutput={objective.expectedOutput}
          hint={objective.hint}
          errorFeedback={objective.errorFeedback}
          onSuccess={onComplete}
        />
      </div>
    </motion.div>
  )
}
