import { Link, Outlet } from "react-router-dom";

const Product = () => {
    return (
       <>
            <div className="max-w-7xl mx-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <input 
                        type="text" 
                        name="search" 
                        id="search" 
                        placeholder="Search products..." 
                        className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <nav className="mb-6">
                    <ul className="flex space-x-6">
                        <li>
                            <Link 
                                to="featured" 
                                className="text-lg text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
                            >
                               Product Featurs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="new" 
                                className="text-lg text-blue-600 hover:text-blue-800 font-semibold transition duration-200"
                            >
                                New Product
                            </Link>
                        </li>
                    </ul>
                </nav>

                <Outlet />
            </div>
       </>
    );
};

export default Product;
