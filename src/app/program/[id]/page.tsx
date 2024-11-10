

import { Suspense } from 'react'
import ProgramContent from './program-content'
type PageProps = {
  params: Promise<{
    id: string
  }>
}


export default async function ProgramPage({ params }: PageProps) {
  const resolvedParams = await params; // Await the params if it's a Promise
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <ProgramContent id={resolvedParams.id} />
        </Suspense>
      </div>
    </div>
  )
}

