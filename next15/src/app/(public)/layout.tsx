import type { Metadata } from 'next';
import ClientLayout from '@/components/layouts/ClientLayout';

export const metadata: Metadata = {
  title: {
    default: "AI Platform",
    template: "%s | AI Platform",
  },
  description: "Building the future of AI with innovative solutions.",
  openGraph: {
    siteName: "AI Platform",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
