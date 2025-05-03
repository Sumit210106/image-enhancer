import React, { useState } from 'react';
import Preview from './Preview';
import Upload from './Upload';
import enhancedImageApi from '../utils/enhancedImageApi'; 

function Images() {
  const [upload, setUpload] = useState(null);
  const [enhanced, setEnhanced] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadFile = async (file) => {
    setUpload(URL.createObjectURL(file));
    setLoading(true);
    try {
      const resp = await enhancedImageApi(file); 
      setEnhanced(resp.image);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-6xl">
        <Preview 
          loading={loading}
          uploaded={upload}
          enhanced={enhanced}
        />
      </div>
      <div className="w-full max-w-md mt-6">
        <Upload uploadFile={uploadFile} />
      </div>
    </div>
  );
}

export default Images;