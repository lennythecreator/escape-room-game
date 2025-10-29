interface RoomImageProps {
  src?: string
  alt: string
  className?: string
}

export function RoomImage({ src, alt, className = "" }: RoomImageProps) {
  const imageSrc = src || `/placeholder.svg?height=300&width=600&query=${encodeURIComponent(alt)}`

  return (
    <div className={`relative overflow-hidden rounded-lg border border-primary/20 ${className}`}>
      <img src={imageSrc || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
