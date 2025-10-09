import type { Metadata } from "next";
import Contact from "@/components/website/Contact";

export const metadata: Metadata = {
  title: "Contact Us | AI Platform",
  description: "Get in touch with our AI experts and explore tailored solutions.",
};

export default function ContactPage() {
  return (
    <div>
      <Contact />
    </div>
  );
}
