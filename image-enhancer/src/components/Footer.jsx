import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-4 text-center border-t border-white/20">
      {/* my github link  */}
      <a
        href="https://github.com/Sumit210106/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white transition duration-300 "
      >
        <p className="text-sm text-gray-500 ">
        Made by <span></span>
         <span className='text-gray-100'>
           Sumit Kumar Nayak
          </span> 
        </p>
      </a>
    </footer>
  );
}

export default Footer;