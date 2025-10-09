"use client";
import { Star } from "lucide-react";

export default function SocialSection(){
    return(
              <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-300">
              Discover how businesses across industries are leveraging our AI platform to drive growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                The AI platform transformed our data analysis capabilities. We are now making decisions 10x faster with unprecedented accuracy.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-white">John Smith</p>
                  <p className="text-gray-400">CTO, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Implementation was seamless and the ROI was immediate. Our customer service efficiency increased by 300%.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MJ</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Maria Johnson</p>
                  <p className="text-gray-400">VP Operations, DataFlow Inc</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                The predictive modeling features helped us reduce costs by 40% while improving our product quality significantly.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RK</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Robert Kim</p>
                  <p className="text-gray-400">Director of Analytics, FutureTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}