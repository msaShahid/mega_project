"use client";
import { BarChart3, Brain, MessageSquare, Zap } from "lucide-react";

export default function ProductSection(){
    return(
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transform rotate-45 scale-150"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Revolutionizing Industries with AI
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform the way your business operates with our cutting-edge AI platform. Our tools help businesses solve complex problems with ease, efficiency, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl mb-4 inline-block group-hover:shadow-2xl group-hover:shadow-blue-500/25">
                <Brain className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-300">Machine Learning</h3>
              <p className="text-gray-400">Advanced algorithms that learn and adapt</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl mb-4 inline-block group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                <MessageSquare className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-purple-300">Natural Language Processing</h3>
              <p className="text-gray-400">Understand and process human language</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-2xl mb-4 inline-block group-hover:shadow-2xl group-hover:shadow-green-500/25">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-green-300">Data Analytics</h3>
              <p className="text-gray-400">Extract insights from complex datasets</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl mb-4 inline-block group-hover:shadow-2xl group-hover:shadow-orange-500/25">
                <Zap className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-orange-300">Automation</h3>
              <p className="text-gray-400">Streamline processes with intelligent automation</p>
            </div>
          </div>
        </div>
      </section>
    )
}