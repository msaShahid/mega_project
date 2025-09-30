import type { Metadata } from "next";
import Header from '@/components/website/header';
import Footer from '@/components/website/footer';

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
 
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
        <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
