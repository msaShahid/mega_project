import { Link } from 'react-router-dom';

const NewProducts = () => {

    const products = [
        { id: 1, name: 'New Product 1' },
        { id: 2, name: 'New Product 2' },
        { id: 3, name: 'New Product 3' }
    ];

    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Products</h2>
            <p className="text-gray-600">Explore the latest products!</p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                <div
                    key={product.id}
                    className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200"
                >
                    <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                    <Link 
                        to={`/product/new/${product.id}`} 
                        className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                        View Details
                    </Link>
                </div>
                ))}
            </div>
        </div>
    );
};

export default NewProducts;
