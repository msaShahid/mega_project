import type { Metadata } from "next";
import AboutSection from '@/components/website/About';

export const metadata: Metadata = {
  title: "About | AI Platform",
  description: "Get in touch with our AI experts and explore tailored solutions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 py-16 max-w-7xl mx-auto">
      <AboutSection />
    </div>
  );
}
