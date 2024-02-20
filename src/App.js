import React from 'react';

import CaesarCipherReact from './pages/CaesarCipherReact';
import WhatisCaesarCipher from './pages/WhatisCaesarCipher';
const App = () => {
  return (
    <div style={{ backgroundColor: '#0d1117', color: 'white', minHeight: '100vh', padding: '1rem' }}>

    <WhatisCaesarCipher />
      <br></br>
      <CaesarCipherReact />
    </div>
 
  );
};

export default App;
