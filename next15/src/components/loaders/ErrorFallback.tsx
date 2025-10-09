'use client';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-red-900 bg-opacity-80 text-red-300 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Oops! Something went wrong.</h2>
      <p className="mb-4 text-sm">{error.message}</p>
      <button
        onClick={() => {
          console.log('🔁 Try Again clicked');
          resetErrorBoundary();
        }}
        className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
      >
        Try Again
      </button>
    </div>
  );
}
