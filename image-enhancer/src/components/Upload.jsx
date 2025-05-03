import React from 'react';

function Upload(props) {

    const showImage = (e) => {
        const file = e.target.files[0]
        if (file){
            props.uploadFile(file)
        }
    }


  return (
    <div className="bg-black border border-white/40 p-8 rounded-xl shadow-lg md:w-full max-w-md mx-auto">
      <label 
        htmlFor="fileInput" 
        className="block w-full text-center cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white font-medium py-3 px-6 rounded-lg shadow-sm"
      >
        Choose File
      </label>
      <input 
        type="file" 
        id="fileInput" 
        className="hidden"
        onChange={showImage}
      />
    </div>
  );
}

export default Upload;
