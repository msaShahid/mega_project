import type { Metadata } from "next";
import Home from "@/components/website/home";

export const metadata: Metadata = {
  title: "Home | AI Platform",
  description: "Get in touch with our AI experts and explore tailored solutions.",
};

export default function HomePage() {
  return (
    <div>
     <Home/>
    </div>
  );
}
