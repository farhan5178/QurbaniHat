import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-base-100 px-4">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-black text-primary/20">404</h1>
        <h2 className="text-4xl font-bold text-base-content">Page Not Found</h2>
        <p className="text-lg text-base-content/60 max-w-md mx-auto">
          Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
        </p>
        <Link href="/" className="btn btn-primary mt-4 px-8 rounded-full shadow-lg hover:shadow-primary/50 transition-all">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
