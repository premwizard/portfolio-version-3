import Link from 'next/link';
import { Cpu, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center p-4 text-center">
      <div className="w-12 h-12 rounded-xl bg-secondary/50 border border-accent/30 flex items-center justify-center mb-4">
        <Cpu className="w-6 h-6 text-accent" />
      </div>
      <h1 className="text-4xl font-extrabold text-light mb-2 font-mono">404</h1>
      <h2 className="text-xl font-semibold text-neutral mb-4">Page Not Found</h2>
      <p className="text-sm text-neutral/70 max-w-md mb-6">
        The requested neural route does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-accent text-primary-dark font-semibold text-sm hover:bg-light transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
