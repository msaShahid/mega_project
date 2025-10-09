"use client";
import { ArrowRight, BarChart3, Brain, MessageSquare, Zap } from "lucide-react";

export default function HeroSection(){
    return(
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Empowering Tomorrow with AI
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-300 font-medium">
            Innovative AI Solutions for a Smarter Future
          </h2>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-12 py-4 rounded-xl text-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-2xl">
            Start Your Journey Today
            <ArrowRight className="inline-block ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Floating AI Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Brain className="absolute top-1/4 left-10 h-8 w-8 text-blue-400 opacity-30 animate-bounce" />
          <Zap className="absolute top-1/3 right-20 h-6 w-6 text-purple-400 opacity-40 animate-pulse" />
          <BarChart3 className="absolute bottom-1/4 left-1/4 h-10 w-10 text-green-400 opacity-25 animate-bounce delay-500" />
          <MessageSquare className="absolute bottom-1/3 right-1/3 h-7 w-7 text-blue-300 opacity-35 animate-pulse delay-1000" />
        </div>
      </section>
    )
}