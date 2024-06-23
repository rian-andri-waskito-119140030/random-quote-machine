import React, { useState } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';

function App() {
  const [appColor, setAppColor] = useState('#282c34');

  return (
    <div className="App" style={{ backgroundColor: appColor }}>
      <QuoteBox setAppColor={setAppColor} />
      <footer className="footer">
        by rian
      </footer>
    </div>
  );
}

export default App;
