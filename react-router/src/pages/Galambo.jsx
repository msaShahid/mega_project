import { Search, Image, Crown, Zap, Heart, Gamepad2, Laptop } from 'lucide-react';

const Galambo = () => {
    return(
        <>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-16">
                    <div className="mb-8 flex justify-center">
                        <div className="relative w-64 h-32">
                            <img 
                                src={'/images/galambo.png'}
                                alt={'galambo'}
                                className="w-full"
                            />
                        </div>
                    </div>
                
                    <h2 className="text-5xl font-bold text-gray-900 mb-4">AI Search</h2>

                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                        Smart AI-Powered Image Search for Accurate Results
                    </h3>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-2">
                    <div className="relative mb-8">
                        <div className="flex items-center bg-gray-50 rounded-xl border-2 border-gray-200 focus-within:border-orange-500 transition-colors">
                        <button className="p-4 text-gray-400 hover:text-gray-600">
                            <Image size={24} />
                        </button>
                        <input
                            type="text"
                            placeholder="Start Searching Now"
                            className="flex-1 bg-transparent px-4 py-4 text-lg placeholder-gray-400 focus:outline-none"
                        />
                        <button className="m-2 bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors">
                            <Search size={24} />
                        </button>
                        </div>
                    </div>
                    
                    <div className="flex justify-center space-x-4 mb-8">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                            Basic
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
                            <Crown className="text-orange-500" size={20} />
                            <span>Plus</span>
                        </button>
                        <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
                            <Zap className="text-orange-500" size={20} />
                            <span>Ultra</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Galambo;