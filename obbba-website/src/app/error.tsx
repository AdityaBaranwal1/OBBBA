'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center gap-4">
      <h1 className="text-2xl font-bold">Something went wrong</h1>
      <button
        type="button"
        onClick={reset}
        className="rounded-md bg-accent-blue px-4 py-2 text-white shadow-glowBlue focus:outline-none focus:ring-2 focus:ring-accent-blue"
      >
        Try again
      </button>
    </div>
  );
}
