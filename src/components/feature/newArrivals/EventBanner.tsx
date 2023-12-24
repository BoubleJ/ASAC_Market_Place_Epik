import Image from 'next/image'

export default function EventBanner() {
  return (
    <div className="relative h-80">
      <Image
        src="/images/newArrivalsEventBanner.png"
        alt="event banner image"
        width={300}
        height={300}
        className="w-full h-80 object-fill"
      />
    </div>
  )
}
