
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const ProductCard2 = () => {
  const products = [
    { imgSrc: "/p1.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/p2.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/p3.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/p4.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/c1.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/t3.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/p6.jpg", title: "Library School Chair", price: 20 },
    { imgSrc: "/t4.jpg", title: "Library School Chair", price: 20 },
  ];

  return (
    <section className="relative bg-white py-8 px-4 sm:px-6 mt-16 sm:mt-20 lg:mt-24">
      {/* Container */}
      <div className="container mx-auto max-w-[1320px]">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Our Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={product.imgSrc}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg hover:text-cyan-600 text-gray-800">
                  {product.title}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-600 font-bold">${product.price}</p>
                  <CiShoppingCart className="text-gray-500 text-3xl hover:bg-cyan-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard2;

