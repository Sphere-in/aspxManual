// import { Suspense } from 'react';
// // import ProgramContent from './program-content';

// import ProgramContent from './program-content1';
// interface PageProps {
//   params: {
//     id: string;
//   };
// }

// export default function ProgramPage({ params }: PageProps) {
//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto"> {/* Increased from max-w-4xl to max-w-7xl */}
//         <Suspense fallback={<div>Loading...</div>}>
//           <ProgramContent id={params.id} />
//         </Suspense>
//       </div>
//     </div>
//   );
// }

import { Suspense } from 'react'
import ProgramContent from './program-content'

interface PageProps {
  params: {
    id: string
  }
}

export default function ProgramPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <ProgramContent id={params.id} />
        </Suspense>
      </div>
    </div>
  )
}