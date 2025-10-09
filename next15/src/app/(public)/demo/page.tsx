import type { Metadata } from "next";
import Demo from "@/components/website/Demo";

export const metadata: Metadata = {
  title: "Demo | AI Platform",
  description: "Get in touch with our AI experts and explore tailored solutions.",
};

export default function DemoPage() {
  return (
    <div>
      <Demo />
    </div>
  );
}
