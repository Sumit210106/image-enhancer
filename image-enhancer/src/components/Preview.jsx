import React from 'react';
import Loading from './Loading'; // Ensure this path is correct based on your project structure

function Preview(props) {
  return (
    <div className="flex flex-col md:flex-row gap-15 md:gap-30 w-full mx-auto p-4 text-black">
      
      {/* Original image */}
      <div className="w-full md:w-3/5 bg-black text-white border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Original Image</h2>

        {props.uploaded && (
          <div className="w-full h-60 bg-black flex items-center justify-center rounded">
            <img src={props.uploaded} alt="" className="object-cover w-full h-full" />
          </div>
        )}
        
        {!props.uploaded && (
          <div className="w-full h-60 bg-black border border-white/20 flex items-center justify-center rounded">
            <p className="text-gray-500">No image uploaded</p>
          </div>
        )}
      </div>

      {/* Enhanced image */}
      <div className="w-full md:w-3/5 bg-black text-white border border-gray-300 p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Enhanced Image</h2>
        
        <div className="w-full h-60  bg-black border border-white/20 flex items-center justify-center rounded">
          {props.enhanced && !props.loading && (
            <img src={props.enhanced} alt="enhanced image" className="object-cover w-full h-full" />
          )}
          {props.loading && <Loading />}
        </div>
      </div>
    </div>
  );
}

export default Preview;
