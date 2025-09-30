"use client";
import { BarChart3, Brain, Globe, MessageSquare } from "lucide-react";

export default function FeaturesSection(){
    return(
        <section id="features" className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="grid grid-cols-8 gap-4 animate-pulse">
                {[...Array(32)].map((_, i) => (
                    <div key={i} className="h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                ))}
                </div>
            </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Features that Set Us Apart
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From automation to intelligent decision-making, explore our powerful AI features.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all hover:transform hover:scale-105">
                <BarChart3 className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Real-time Analytics</h3>
                <p className="text-gray-400">Monitor and analyze data as it flows through your systems</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all hover:transform hover:scale-105">
                <Brain className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-purple-300">Automated Machine Learning</h3>
                <p className="text-gray-400">Build and deploy ML models without extensive expertise</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all hover:transform hover:scale-105">
                <Globe className="h-12 w-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-green-300">Predictive Modeling</h3>
                <p className="text-gray-400">Forecast trends and outcomes with advanced algorithms</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all hover:transform hover:scale-105">
                <MessageSquare className="h-12 w-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-orange-300">Natural Language Processing</h3>
                <p className="text-gray-400">Understand and process human language at scale</p>
                </div>
            </div>
            </div>
        </section>
    )
}