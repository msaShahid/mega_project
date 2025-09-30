import type { Metadata } from "next";
import Features from "@/components/website/features";

export const metadata: Metadata = {
  title: "Features | AI Platform",
  description: "Get in touch with our AI experts and explore tailored solutions.",
};
export default function FeaturesPage() {
  return (
    <div>
      <Features/>
    </div>
  );
}
