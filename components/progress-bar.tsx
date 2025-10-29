interface ProgressBarProps {
  current: number
  total: number
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="mt-4">
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div className="h-full bg-primary transition-all duration-500" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  )
}
