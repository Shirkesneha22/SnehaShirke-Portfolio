import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <h2 className="text-4xl font-bold mb-4">404 - Not Found</h2>
      <p className="mb-8">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md">
        Return Home
      </Link>
    </div>
  )
}
