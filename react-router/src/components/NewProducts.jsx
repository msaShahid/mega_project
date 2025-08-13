import { Link, useSearchParams } from 'react-router-dom';

const NewProducts = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter');
    const isActiveFilter = filter === 'active';

    const imageUrl = 'https://www.kasandbox.org/programming-images/avatars/leaf-blue.png';

    const products = [
        { id: 1, name: 'New Product 1', status: 'active', image: imageUrl },
        { id: 2, name: 'New Product 2', status: 'inactive', image: imageUrl },
        { id: 3, name: 'New Product 3', status: 'active', image: imageUrl }
    ];

    const filteredProducts = isActiveFilter
                            ? products.filter(product => product.status === 'active')
                            : products;

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Products</h2>
            <p className="text-gray-600">Explore the latest products!</p>

            <div className="mt-5 flex gap-3">
                <button 
                    className={`px-4 py-2 rounded-sm text-white transition duration-200 ${
                        isActiveFilter ? 'bg-blue-700' : 'bg-blue-500 hover:bg-blue-700'
                    }`}
                    onClick={() => setSearchParams({ filter: 'active' })}
                >
                    Show Active Products
                </button>

                <button
                    className="px-4 py-2 bg-red-600 text-white rounded-sm hover:bg-red-700 transition duration-200"
                    onClick={() => setSearchParams({})}
                >
                    Reset Filter
                </button>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                    <div
                        key={product.id}
                        className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                    >
                        <img 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover rounded-md mb-3"
                        />
                        <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                        <Link 
                            to={`/product/new/${product.id}`} 
                            className="text-blue-600 hover:text-blue-800 font-semibold"
                        >
                            View Details
                        </Link>
                    </div>
                ))}

                {filteredProducts.length === 0 && (
                    <div className="text-gray-500 col-span-full">No products found for this filter.</div>
                )}
            </div>
        </div>
    );
};

export default NewProducts;
