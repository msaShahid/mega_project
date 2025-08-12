const NewProducts = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">New Products</h2>
            <p className="text-gray-600">Explore the latest products we have added to our store.</p>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">New Product 1</h3>
                    <p className="text-gray-500">Description for new product 1.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">New Product 2</h3>
                    <p className="text-gray-500">Description for new product 2.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200">
                    <h3 className="font-semibold text-lg text-gray-800">New Product 3</h3>
                    <p className="text-gray-500">Description for new product 3.</p>
                </div>
                
            </div>
        </div>
    );
};

export default NewProducts;
