const FeaturedProducts = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600">Here is a list of our best-selling featured products.</p>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">Product 1</h3>
                    <p className="text-gray-500">Description for product 1.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">Product 2</h3>
                    <p className="text-gray-500">Description for product 2.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">Product 3</h3>
                    <p className="text-gray-500">Description for product 3.</p>
                </div>
                
            </div>
        </div>
    );
};

export default FeaturedProducts;
