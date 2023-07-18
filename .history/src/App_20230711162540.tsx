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
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
      },
    })
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setTeams(data.message));
  };

  const login = () => {
    fetch('http://dev.trainee.dex-it.ru/api/Auth/SignIn', {
      method: 'POST',
      body: JSON.stringify({ login: 'user', password: 'pass' }),
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcjIiLCJ0ZW5hbnQiOiIyNSIsIm5iZiI6MTY4OTA4MTg2MywiZXhwIjoxNjg5MTY4MjYzLCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.4QP_HizCV3eZI0UAw0FhgF3IWm_KtFNcxf0lfzCDW0s',
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
