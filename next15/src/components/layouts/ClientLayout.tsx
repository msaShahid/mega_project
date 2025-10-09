'use client';

import { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '@/components/loaders/ErrorFallback';
import Header from '@/components/website/Header';
import Footer from '@/components/website/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [errorBoundaryKey, setErrorBoundaryKey] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">
        <ErrorBoundary
          key={errorBoundaryKey}
          FallbackComponent={(props) => (
            <ErrorFallback
              {...props}
              resetErrorBoundary={() => {
                console.log('🔁 Resetting Error Boundary from ClientLayout');
                setErrorBoundaryKey((k) => k + 1); // force re-render
              }}
            />
          )}
          onError={(error, info) => {
            console.error('🧨 Caught by Layout ErrorBoundary:', error, info);
          }}
        >
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
