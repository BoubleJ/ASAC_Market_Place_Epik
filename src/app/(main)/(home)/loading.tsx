export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full p-36">
      <div className="bg-gradient-to-r from-white to-brand-primary-400 w-12 h-12 rounded-full animate-spin relative">
        <div className="absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block h-10 w-10 bg-white"></div>
      </div>
    </div>
  )
}
