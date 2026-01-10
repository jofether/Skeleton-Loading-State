import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* SKELETON HEADER */}
        <div className="flex items-center space-x-4 animate-pulse">
          {/* Avatar Skeleton */}
          <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
          <div className="space-y-2 flex-1">
            {/* Title Line Skeleton */}
            <div className="h-6 bg-gray-300 rounded w-1/3"></div>
            {/* Subtitle Line Skeleton */}
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        </div>

        {/* SKELETON CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            // CARD CONTAINER
            <div key={item} className="border border-gray-100 rounded-xl p-4 shadow-sm animate-pulse">
              
              {/* Image Placeholder */}
              {/* FUTURE BUG: Remove 'bg-gray-300' - the box becomes invisible */}
              <div className="w-full h-40 bg-gray-300 rounded-lg mb-4"></div>
              
              {/* Text Lines */}
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

              {/* Footer Row */}
              <div className="mt-6 flex justify-between items-center">
                 <div className="h-8 w-20 bg-gray-300 rounded-md"></div>
                 <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
