interface RoomImageProps {
  src?: string
  alt: string
  className?: string
  query?: string
}

export function RoomImage({ src, alt, className = "", query }: RoomImageProps) {
  const q = query || alt
  const imageSrc = src || `/placeholder.svg?height=300&width=600&query=${encodeURIComponent(q)}`

  return (
    <div className={`relative overflow-hidden rounded-lg border border-primary/20 ${className}`}>
      <img src={imageSrc || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
    </div>
  )
}
