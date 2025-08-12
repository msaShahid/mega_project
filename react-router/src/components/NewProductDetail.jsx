import { useParams } from 'react-router-dom';

const NewProductDetail = () => {
  const { productId } = useParams();  

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Details</h2>
      <p className="text-gray-600">Viewing details for product ID: {productId}</p>
    </div>
  );
};

export default NewProductDetail;
