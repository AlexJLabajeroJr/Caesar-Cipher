import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import successMusic from '../music/gog.mp3';
import refreshMusic from '../music/suc.mp3';

const CaesarCipherReact = () => {
  const [operation, setOperation] = useState(null); // 'encrypt', 'decrypt', or null
  const [playSuccessMusic, setPlaySuccessMusic] = useState(false);
  const [playRefreshMusic, setPlayRefreshMusic] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (playSuccessMusic) {
      audioRef.current.src = successMusic;
      audioRef.current.play();
      setPlaySuccessMusic(false);
    } else if (playRefreshMusic) {
      audioRef.current.src = refreshMusic;
      audioRef.current.play();
      setPlayRefreshMusic(false);
    }
  }, [playSuccessMusic, playRefreshMusic]);

  const toggleOperation = (selectedOperation) => {
    if (selectedOperation === null) {
      // Reset the results when going back
      setEncryptResult('');
      setDecryptResult('');
  
      // Check if the current operation is not 'encrypt' or 'decrypt' before playing the refresh sound
      if (operation !== 'encrypt' && operation !== 'decrypt') {
        setPlayRefreshMusic(true);
      }
    }
  
    setOperation(selectedOperation);
  };
  

  const [plainText, setPlainText] = useState('');
  const [plainTextShift, setPlainTextShift] = useState(0);
  const [cipherText, setCipherText] = useState('');
  const [cipherTextShift, setCipherTextShift] = useState(0);
  const [encryptResult, setEncryptResult] = useState('');
  const [decryptResult, setDecryptResult] = useState('');

  const notify = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const encrypt = () => {
    const upperCasePlainText = plainText.toUpperCase();
    let encryptedText = '';

    for (let i = 0; i < upperCasePlainText.length; i++) {
      if (upperCasePlainText[i] === ' ') {
        encryptedText += ' ';
      } else {
        const charCode = (upperCasePlainText.charCodeAt(i) - 65 + plainTextShift) % 26 + 65;
        encryptedText += String.fromCharCode(charCode);
      }
    }

    setEncryptResult(`Result : ${encryptedText}`);
    notify('🔥🔒 Encrypted successfully!');
    setPlaySuccessMusic(true);
  };

  const decrypt = () => {
    const upperCaseCipherText = cipherText.toUpperCase();
    let decryptedText = '';

    for (let i = 0; i < upperCaseCipherText.length; i++) {
      if (upperCaseCipherText[i] === ' ') {
        decryptedText += ' ';
      } else {
        const charCode = (upperCaseCipherText.charCodeAt(i) - 65 - cipherTextShift + 26) % 26 + 65;
        decryptedText += String.fromCharCode(charCode);
      }
    }

    setDecryptResult(`Result : ${decryptedText}`);
    notify('Decrypted successfully!');
    setPlaySuccessMusic(true);
  };

  const refreshPage = () => {
    setPlainText('');
    setPlainTextShift(0);
    setCipherText('');
    setCipherTextShift(0);
    setEncryptResult('');
    setDecryptResult('');
    notify('Page refreshed successfully!');
    setPlayRefreshMusic(true);
  };

  return (
    <div className=" max-w-sm w-full lg:max-w-full">
      {operation === null ? (
        <div className="flex sm:flex-col md:flex-row mb-4 ml-14  ">
          <button
            className="max-w-md w-full p-8 m-8 relative inline-flex items-center justify-center  me-2 overflow-hidden text-8xl font-bold shadow-lg shadow-indigo-500/50  text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            onClick={() => toggleOperation('encrypt')}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-dark dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
              ENCRYPT
            </span>
          </button>
          <p className="max-w-64 p-8 w-full relative items-center  text-9xl font-bold m-6"> OR</p>
          <button
            className="max-w-md w-full p-8  m-8 relative inline-flex items-center justify-center   me-2 overflow-hidden text-8xl font-bold shadow-lg shadow-pink-500/50 text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            onClick={() => toggleOperation('decrypt')}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-dark dark:bg-gray-900 rounded-lg group-hover:bg-opacity-0">
              DECRYPT
            </span>
          </button>
        </div>
      ) : (
        <div className="flex ml-10">
          {operation === 'encrypt' ? (
            <div className="flex-initial ">
              <div className="w-80">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </div>
                  <input
                    id="plainText"
                    value={plainText}
                    onChange={(e) => setPlainText(e.target.value)}
                    className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-white focus:border-white"
                    placeholder=" "
                    required
                  />
                  <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                  >
                    Enter Plain Text
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-initial">
              <div className="w-80">
                <div className="relative w-full min-w-[200px] h-10">
                  <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </div>
                  <input
                    id="cipherText"
                    value={cipherText}
                    onChange={(e) => setCipherText(e.target.value)}
                    className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-white focus:border-white"
                    placeholder=" "
                    required
                  />
                  <label
                    className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                  >
                    Enter Cipher Text
                  </label>
                </div>
              </div>
            </div>
          )}

          <div className="flex-initial pl-4 pr-4">
            <div className="w-80">
              <div className="relative w-full min-w-[200px] h-10">
                <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
                  <i className="fas fa-heart" aria-hidden="true"></i>
                </div>
                <input
                  type="number"
                  id={operation === 'encrypt' ? 'plainTextShift' : 'cipherTextShift'}
                  value={
                    operation === 'encrypt'
                      ? plainTextShift === 0
                        ? ''
                        : plainTextShift
                      : cipherTextShift === 0
                      ? ''
                      : cipherTextShift
                  }
                  onChange={(e) =>
                    operation === 'encrypt'
                      ? setPlainTextShift(parseInt(e.target.value))
                      : setCipherTextShift(parseInt(e.target.value))
                  }
                  className="peer w-full h-full bg-transparent text-white font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-white disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-white placeholder-shown:border-t-white border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-white focus:border-white"
                  placeholder=" "
                />

                <label
                  className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-white leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-white transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-white peer-focus:text-white before:border-blue-gray-200 peer-focus:before:!border-white after:border-white peer-focus:after:!border-white"
                >
                  Shift by
                </label>
              </div>
            </div>
          </div>

          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={operation === 'encrypt' ? encrypt : decrypt}
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-dark dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              {operation === 'encrypt' ? 'Encrypt' : 'Decrypt'}
            </span>
          </button>
          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={refreshPage}
          >
            <span className="relative px-8 py-4.5 transition-all ease-in duration-75 bg-dark dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Refresh Page
            </span>
          </button>

          <button
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            onClick={() => toggleOperation(null)} // Update this line
          >
            <span className="relative px-8 py-4.5 transition-all ease-in duration-75 bg-dark dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Back
            </span>
          </button>
          <br></br>
        </div>
      )}
      <div className="text-white-900 font-bold text-xl mb-2  ml-10 mt-5">
        {encryptResult && <span className="text-[70px] ">{encryptResult}</span>}
        {decryptResult && (
          <span className="text-white-600 text-[70px] ">{decryptResult}</span>
        )}
      </div>

      <audio ref={audioRef} />
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CaesarCipherReact;
