'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log error (replace with Sentry, Datadog, etc.)
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-semibold">
        Something went wrong
      </h2>

      <p className="text-sm text-gray-500">
        {error.message}
      </p>

      <button
        onClick={reset}
        className="rounded bg-black px-4 py-2 text-white hover:opacity-80"
      >
        Try again
      </button>
    </div>
  );
};
