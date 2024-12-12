
import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Product3 = () => {
  // Array of products
  const products = [
    { img: '/p1.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p2.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p3.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p4.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/c2.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/t3.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p6.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/t4.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/c1.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p2.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/p3.jpg', title: 'Library School Chair', price: '$20' },
    { img: '/c3.png', title: 'Library School Chair', price: '$20' },
  ];

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-semibold text-gray-800 mt-6">All Products</h1>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg hover:text-cyan-600 text-gray-800">{product.title}</h2>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-600 font-bold">{product.price}</p>
                  <CiShoppingCart
                    className="text-gray-500 text-3xl cursor-pointer bg-gray-200 hover:bg-cyan-600"
                    title="Add to Cart"
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

export default Product3;
