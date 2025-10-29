import { Room1 } from "@/components/rooms/room-1"
import { Room2 } from "@/components/rooms/room-2"
import { Room3 } from "@/components/rooms/room-3"
import { Room4 } from "@/components/rooms/room-4"
import { Room5 } from "@/components/rooms/room-5"
import { Room6 } from "@/components/rooms/room-6"
import { Room7 } from "@/components/rooms/room-7"
import { Room8 } from "@/components/rooms/room-8"
import { Room9 } from "@/components/rooms/room-9"
import { Room10 } from "@/components/rooms/room-10"
import { objectives } from "@/lib/objectives"

interface GameRoomProps {
  roomNumber: number
  partNumber: number
  onComplete: () => void
}

export function GameRoom({ roomNumber, partNumber, onComplete }: GameRoomProps) {
  const objective = objectives[roomNumber]?.[partNumber]
  if (!objective) return null

  switch (roomNumber) {
    case 1:
      return <Room1 objective={objective} onComplete={onComplete} />
    case 2:
      return <Room2 objective={objective} onComplete={onComplete} />
    case 3:
      return <Room3 objective={objective} onComplete={onComplete} />
    case 4:
      return <Room4 objective={objective} onComplete={onComplete} />
    case 5:
      return <Room5 objective={objective} onComplete={onComplete} />
    case 6:
      return <Room6 objective={objective} onComplete={onComplete} />
    case 7:
      return <Room7 objective={objective} onComplete={onComplete} />
    case 8:
      return <Room8 objective={objective} onComplete={onComplete} />
    case 9:
      return <Room9 objective={objective} onComplete={onComplete} />
    case 10:
      return <Room10 objective={objective} onComplete={onComplete} />
    default:
      return null
  }
}
