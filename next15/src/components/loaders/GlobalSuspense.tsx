'use client';
import React, { Suspense } from 'react';
import LoadingSpinner from './LoadingSpinner';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

type GlobalSuspenseProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export default function GlobalSuspense({ children, fallback }: GlobalSuspenseProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}
    onError={(error, info) => {
        console.error('🧨 Caught by GlobalSuspense ErrorBoundary:', error, info);
        // Optional: log to Sentry or monitoring service here
      }}
    >
      <Suspense fallback={fallback ?? <LoadingSpinner />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
