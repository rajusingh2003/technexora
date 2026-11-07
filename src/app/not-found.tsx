import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="px-5 py-2.5 bg-black text-white rounded-xl text-sm font-semibold">
        Return Home
      </Link>
    </div>
  );
}
