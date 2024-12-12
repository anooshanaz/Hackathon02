import React from 'react';

const Category = () => {
  const categories = [
    {
      id: 1,
      name: "Wing Chair",
      image: "/c1.jpg", 
      alt: "Wing Chair",
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: "/c2.jpg", 
      alt: "Wooden Chair",
    },
    {
      id: 3,
      name: "Desk Chair",
      image: "/c3.png", 
      alt: "Desk Chair",
    },
  ];

  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8 sm:mb-[400px] lg:mb-0 md:mb-0">
        {/* Section Heading */}
        <div className="flex flex-col text-left w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Top Categories
          </h1>
        </div>

        {/* Grid of Cards */}
        <div className="flex flex-wrap justify-center mb-4">
          {categories.map((category) => (
            <div key={category.id} className="p-4 w-full sm:w-1/2 lg:w-1/3">
              <div className="relative group bg-gray-100 overflow-hidden shadow-lg rounded-lg">
                {/* Image */}
                <img
                  alt={category.alt}
                  className="w-full h-[424px] object-cover transform transition-transform duration-500 group-hover:scale-110"
                  src={category.image}
                />

                {/* Hidden Content */}
                <div className="absolute inset-0 bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <button className="w-full absolute bottom-0 bg-gray-500 opacity-2 text-white px-4 py-2 rounded-sm hover:opacity-100 transition-opacity duration-300 mt-2 text-center text-2xl">
                    {category.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
