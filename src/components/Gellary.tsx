
import React from 'react';

const Gellary = () => {
  return (
    <section className="bg-white py-8 sm:mb-96 lg:mb-1 md:mb-5">
      <div className="container mx-auto max-w-[1320px] h-[648px] flex flex-wrap lg:flex-nowrap gap-4">
        {/* Vertical Text */}
        {/* <div className="lg:rotate-[-90deg] lg:mb-0 mb-4">
          <p className="text-gray-600 font-medium tracking-wide text-lg">
             EXPLORE NEW AND POPULAR STYLES
          </p>
          </div> */}
        {/* Large Image */}
        <div className="w-full lg:w-[648px] h-[648px]">
          <img
            src="/t1.jpg"
            alt="Large Chair"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Grid - 4 Small Images */}
        <div className="flex flex-wrap justify-between gap-4 w-full lg:w-[648px] sm:grid-cols-2">
          {/* Small Image 1 */}
          <div className="w-[48%] h-[312px]">
            <img
              src="/t2.jpg"
              alt="Chair 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Small Image 2 */}
          <div className="w-[48%] h-[312px]">
            <img
              src="/t5.jpg"
              alt="Chair 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Small Image 3 */}
          <div className="w-[48%] h-[312px]">
            <img
              src="/t4.jpg"
              alt="Chair 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {/* Small Image 4 */}
          <div className="w-[48%] h-[312px]">
            <img
              src="/t3.jpg"
              alt="Chair 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gellary;


