// import ProgramList from '../components/ProgramList';
import ProgramList from "@/components/ProgramList";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">ASP.NET Lab Manual Programs</h1>
        <ProgramList />
      </div>
    </main>
  );
}