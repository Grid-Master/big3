import React from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex', height: '100%' }}>
        <Menu />
        <div>content</div>
      </div>
    </div>
  );
}

export default App;
