"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface GameHintProps {
  hint: string
  open: boolean
  onClose: () => void
  className?: string
  characterSrc?: string
  characterAlt?: string
}

export function GameHint({
  hint,
  open,
  onClose,
  className,
  characterSrc = "/Stack1.png",
  characterAlt = "Companion character",
}: GameHintProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-end pr-4 sm:pr-6">
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={cn("pointer-events-auto relative flex items-end gap-4", className)}
          >
            {/* Bubble first (on the left) */}
            <div className="relative max-w-md rounded-2xl border border-border bg-muted/60 p-5 text-base shadow-xl backdrop-blur">
              <button
                aria-label="Close hint"
                onClick={onClose}
                className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-md border border-border/70 bg-background text-muted-foreground hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="font-mono text-xs text-muted-foreground mb-1">HINT</div>
              <div className="leading-relaxed text-foreground/90">{hint}</div>

              {/* speech bubble tail (points right to character) */}
              <div className="absolute left-full top-10 -ml-px h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-border" />
              <div className="absolute left-full top-10 -ml-2 h-0 w-0 border-y-8 border-l-8 border-y-transparent border-l-muted/60" />
            </div>

            {/* Character image on the right */}
            <div className="relative h-56 w-48 select-none">
              <Image
                src={characterSrc}
                alt={characterAlt}
                fill
                className="object-contain drop-shadow-[0_6px_24px_rgba(0,0,0,0.25)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}


