import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';

function App() {
  const [teams, setTeams] = useState<any>([]);
  console.log(teams);
  useEffect(() => {
    fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
      method: 'POST',
      body: JSON.stringify( {"login": "login1",
      "password": "pass"}),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidmxhZDEiLCJ0ZW5hbnQiOiIyNCIsIm5iZiI6MTY4OTA3ODY0OSwiZXhwIjoxNjg5MTY1MDQ5LCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.vv2IyQx1clZ-UJgTL2irNxEf51z-WkI9-q5om7clolo`,
        "Content-Type: application/json"
      }
    })
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
