import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';

function App() {
  const [teams, setTeams] = useState<any>([]);
  console.log(teams);
  useEffect(() => {
    fetch('http://dev.trainee.dex-it.ru/api/Team/GetTeams')
      .then((response) => response.json())
      .then((data) => setTeams([...teams, data]));
  }, []);

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <div style={{ height: '100px' }}>content</div>
      </div>
    </div>
  );
}

export default App;
