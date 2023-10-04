import React from 'react';

const EmpowerWomen = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-2 gap-4 p-8">
        <div className="col-start-2 md:col-span-1">
          <img src="/assets/images/nurse-sitting-with-old-man-woman.jpg" alt="Image 1" className="w-full h-96" />
        </div>
        <div className="col-span-2 md:col-span-1">
          <img src="/image2.jpg" alt="Image 2" className="w-full h-96" />
        </div>
        {/* Text */}
        <div className="col-span-2 md:col-span-2 bg-white p-4">
          <h1 className="text-3xl font-bold mb-4">Welcome to Our Landing Page</h1>
          <p className="text-gray-600">
            This is some text that describes your product or service. You can customize this content as needed.
          </p>
        </div>
        {/* Image 3 */}
        <div className="col-span-2 md:col-span-1">
          <img src="/image3.jpg" alt="Image 3" className="w-full h-96" />
        </div>
        {/* Image 4 */}
        <div className="col-span-2 md:col-span-1">
          <img src="/image4.jpg" alt="Image 4" className="w-full h-96" />
        </div>
        {/* Image 5 */}
        <div className="col-span-2 md:col-span-1">
          <img src="/image5.jpg" alt="Image 5" className="w-full h-96" />
        </div>
        {/* Image 6 */}
        <div className="col-span-2 md:col-span-1">
          <img src="/image6.jpg" alt="Image 6" className="w-full h-96" />
        </div>
      </div>
    </div>
  );
};

export default EmpowerWomen;
