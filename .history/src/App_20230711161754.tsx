import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';

function App() {
  const [teams, setTeams] = useState<any>([]);
  console.log(teams);
  useEffect(() => {}, []);

  const getTeams = () => {
    fetch('http://dev.trainee.dex-it.ru/api/Team/GetTeams', {
      headers: {
        accept: 'application/json',
      },
    })
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setTeams(data.message));
  };

  const login = () => {
    fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
      method: 'POST',
      body: JSON.stringify({ login: 'login1', password: 'pass' }),
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidmxhZDEiLCJ0ZW5hbnQiOiIyNCIsIm5iZiI6MTY4OTA3ODY0OSwiZXhwIjoxNjg5MTY1MDQ5LCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.vv2IyQx1clZ-UJgTL2irNxEf51z-WkI9-q5om7clolo`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'get',
      },
    }).then((response) => {
      console.log(response.status); // Вывод статуса кода
      return response.json(); // Возвращает Promise для дальнейшей обработки данных
    });
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <div style={{ height: '100px' }} onClick={getTeams}>
          content
        </div>
        <div onClick={login}>login</div>
      </div>
    </div>
  );
}

export default App;
