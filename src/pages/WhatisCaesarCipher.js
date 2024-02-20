import React from 'react';
import bokz from '../images/alex.jpg';
import arch from '../images/arch.jpg';
import backgroundImage from '../images/caesar.png'; // Import the image file

const WhatisCaesarCipher= () => {
  return (
   

   
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="h-80 lg:h-auto lg:w-80 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden border-r border-b border-l border-gray-400  lg:border-t lg:border-gray-400  ml-10" style={{ backgroundImage: `url(${backgroundImage})` }} title="Woman holding a mug">
        </div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
              <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
              </svg>
              Quiz 1
            </p>
            <div className="flex items-center text-white-900 font-bold text-xl mb-2">
  <span className="text-[50px]  mr-2 mt-2 ">Welcome to </span>
  <span className="text-emerald-600 text-[50px]">Caesar Cipher</span>
</div>

            <p className="text-gray-700 text-base mt-3">The Caesar Cipher, used by Julius Caesar around 58 BC, is a substitution cipher that shifts letters in a message to make it unreadable if intercepted. To decrypt, the receiver reverses the shift. Arab mathematician Al-Kindi broke the Caesar Cipher using frequency analysis, which exploits patterns in letter frequencies.</p>
          </div>
          <div className="flex items-center">
            <img src={bokz} alt="profile" className="w-10 h-10 rounded-full mr-4" />
            <div className="text-sm me-3">
              <p className="text-white-900 leading-none">Alex J.Labajero Jr.</p>
              <p className="text-gray-600">Programmer</p>
            </div>

            <img src={arch} alt="profile" className="w-10 h-10 rounded-full mr-4" />
            <div className="text-sm">
              <p className="text-white-900 leading-none">Arch Escarda.</p>
              <p className="text-gray-600">Documentarian</p>
            </div>
          </div>
        </div>
      </div>
   


    
  );
};

export default WhatisCaesarCipher;
