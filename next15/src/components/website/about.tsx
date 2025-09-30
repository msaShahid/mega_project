"use client";
import React from "react";
import { Shield, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Built on enterprise-grade infrastructure with 99.9% uptime guarantee and robust security protocols.",
    color: "from-blue-500 to-blue-600 text-blue-300",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Fostering partnerships and teamwork to create AI solutions that benefit everyone in your organization.",
    color: "from-purple-500 to-purple-600 text-purple-300",
  },
  {
    icon: Globe,
    title: "Innovation",
    description:
      "Constantly pushing the boundaries of what is possible with AI to deliver cutting-edge solutions.",
    color: "from-green-500 to-green-600 text-green-300",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            At AI Platform, we believe in a future where AI drives meaningful, real-world change.
            Our team of innovators is committed to making AI accessible and impactful for businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className={`bg-gradient-to-br ${feature.color.split(" ")[0]} ${feature.color.split(" ")[1]} p-6 rounded-2xl inline-block mb-6`}>
                  <Icon className="h-12 w-12 text-white" aria-hidden="true" />
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${feature.color.split(" ")[2]}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
