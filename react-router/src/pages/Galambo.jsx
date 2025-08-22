import { Search, Image, Crown, Zap, Heart, Gamepad2, Laptop, UserStar } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios'

const Galambo = () => {

    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');
    const token = '**********************';

    const handleSearch = async () => {
        console.log('search : ', search)
        if(!search) return alert('Please enter search data!');

        setLoading(true)

        try {

            const formData = new FormData();
            formData.append('llm_provider', 'openai');
            formData.append('user_id', 'default');
            formData.append('user_query', search);

            const response = await axios.post(
                'https://www.google.com/search',
                formData,
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            const data = response.data;
            setResult(data);
            //console.log(data);

        } catch (error) {
            console.log(error);
            setError(error.message);
        } finally {
            setLoading(false)
        }
    }

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
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Start Searching Now"
                            className="flex-1 bg-transparent px-4 py-4 text-lg placeholder-gray-400 focus:outline-none"
                        />
                        <button 
                            className="m-2 bg-orange-500 text-white p-3 rounded-lg hover:bg-orange-600 transition-colors"
                            onClick={handleSearch}
                        >
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


                {loading && <div className='text-gray-400 px-4 py-2 text-2xl'>Loading...</div>}
                {error && <div className='px-4 py-2 text-2xl text-red-500'>{error}</div>}

                <div className="mt-8">
                    {result.length > 0 ? (
                        <div className="px-4 py-2 text-2xl">
                            {result ? 'Search done' : 'Not found'}
                        </div>
                    ) : (
                        !loading && <div className="text-center text-gray-500">No results found.</div>
                    )}
                </div>

            </div>
        </>
    )
}

export default Galambo;