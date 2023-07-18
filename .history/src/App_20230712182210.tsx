import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppDispatch, useAppSelector } from './common/hooks/reduxHooks';
import { change, signIn, signUp } from './modules/authorization/authorizationThunk';

function App() {
  const [teams, setTeams] = useState<any>([]);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.AuthorizationReducer.token);
  console.log(teams);
  useEffect(() => {}, []);

  const getTeams = () => {
    fetch('http://dev.trainee.dex-it.ru/api/Team/GetTeams', {
      headers: {
        accept: 'application/json',

        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidXNlcjIiLCJ0ZW5hbnQiOiIyNSIsIm5iZiI6MTY4OTA4MTg2MywiZXhwIjoxNjg5MTY4MjYzLCJpc3MiOiJUZXN0LUJhY2tlbmQtMSIsImF1ZCI6IkJhc2tldEJhbGxDbHViU2FtcGxlIn0.4QP_HizCV3eZI0UAw0FhgF3IWm_KtFNcxf0lfzCDW0s',
      },
    })
      .then((response) => response.json())
      .then((data) => setTeams([...teams, ...data.data]));
  };

  const login = () => {
    dispatch(signIn({ login: 'login4', password: '4444' }));
  };
  const register = () => {
    dispatch(
      signUp({
        userName: 'user4',
        login: 'login4',
        password: '4444',
      }),
    );
  };

  const changeData = () => {
    dispatch(change({ body: { userName: 'changed name', avatarUrl: 'none' }, token }));
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        <div style={{ height: '100px' }} onClick={getTeams}>
          content
        </div>
        <ul>
          <li onClick={login}>login</li>
          <li onClick={register}>register</li>
          <li onClick={changeData}>change</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
