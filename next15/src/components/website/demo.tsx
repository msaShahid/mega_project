"use client";
import { Play } from "lucide-react";

export default function DemoSection() {
    return (
        <section id="demo" className="py-24 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                See Our AI in Action
                </h2>
            </div>

            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-sm p-8 rounded-full hover:bg-white/30 transition-all transform hover:scale-110">
                    <Play className="h-16 w-16 text-white ml-2" />
                </button>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white text-xl mb-6">Interactive AI Platform Demo</p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
                    Request a Demo
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}