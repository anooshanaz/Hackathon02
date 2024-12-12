
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const SingleProduct = () => {
  return (
    <section className="bg-white py-8">
      {/* Container */}
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 mt-4 mb-10">
        {/* Header */}
        <div className="text-left mb-8 flex justify-between">
          <h1 className="text-3xl font-semibold text-gray-800">Featured Products</h1>
          <h5 className="text-2xl font-semibold text-gray-800 hover:underline">View all</h5>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {/* Product Cards */}
          {[
            { img: '/p6.jpg', title: 'Library School Chair', price: '$20' },
            { img: '/p1.jpg', title: 'Library School Chair', price: '$20' },
            { img: '/c3.png', title: 'Library School Chair', price: '$20' },
            { img: '/t1.jpg', title: 'Library School Chair', price: '$20' },
            { img: '/c1.jpg', title: 'Library School Chair', price: '$20' },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex justify-between">
                <h2 className="text-lg  text-gray-800 hover:text-cyan-600">
                  {product.title}
                </h2>
                <div className="flex justify-between items-center ">
                  <p className="text-sm text-gray-600 font-bold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;

