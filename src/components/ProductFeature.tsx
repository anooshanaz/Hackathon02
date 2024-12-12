import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const ProductFeature = () => {
  const products = [
    { id: 1, name: 'Library School Chair', price: '$20', image: '/p1.jpg' },
    { id: 2, name: 'Comfortable Office Chair', price: '$25', image: '/p2.jpg' },
    { id: 3, name: 'Stylish Lounge Chair', price: '$30', image: '/p3.jpg' },
    { id: 4, name: 'Modern Wooden Chair', price: '$35', image: '/p4.jpg' },
  ];

  return (
    <section className="bg-white py-8">
      {/* Container */}
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Feature Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:grid-col-2 xs:grid-col-1">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg  text-gray-800 hover:text-cyan-600">{product.name}</h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-600 font-bold">{product.price}</p>
                  <CiShoppingCart
                    className="text-gray-500  bg-gray-200 text-3xl cursor-pointer hover:bg-cyan-500 transition-colors"
                    title="Add to cart"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;
