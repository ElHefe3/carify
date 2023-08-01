// Prisma does not support Edge without the Data Proxy currently
export const runtime = "nodejs"; // default
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <div className="logo animate-spin h-32 w-32 mb-8 rounded-full border-4 border-t-4 border-gray-200"></div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Under Construction</h1>
        <p className="text-xl">
          We're working hard to finish the development of this site. Our target launch date is
          <strong className="ml-1">Soon!</strong>
        </p>
        {/* You can add a form here for users to sign up for updates */}
      </div>
    </main>
  );
}
