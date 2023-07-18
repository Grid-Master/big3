import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppDispatch, useAppSelector } from './common/hooks/reduxHooks';
import { change, signIn, signUp } from './modules/authorization/authorizationThunk';
import { getPlayer, getPlayers } from './modules/players/playersThunk';

function App() {
  const [teams, setTeams] = useState<any>([]);
  const dispatch = useAppDispatch();
  const { token, name } = useAppSelector((state) => state.AuthorizationReducer);
  // console.log(teams);
  useEffect(() => {}, []);

  const getTeams = () => {
    fetch('http://dev.trainee.dex-it.ru/api/Team/GetTeams', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setTeams([...teams, ...data.data]));
  };

  const login = () => {
    dispatch(signIn({ login: 'login5', password: '5555' }));
  };
  const register = () => {
    dispatch(
      signUp({
        userName: 'user5',
        login: 'login5',
        password: '5555',
      }),
    );
  };

  const changeData = () => {
    dispatch(change({ body: { userName: 'opana', avatarUrl: 'nonde' }, token }));
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        {token && (
          <div>
            <div onClick={() => dispatch(getPlayer({ id: 13, token }))}>get player</div>
            <div onClick={() => dispatch(getPlayers({ body: {}, token }))}>get all players</div>
            <div style={{ height: '100px' }} onClick={getTeams}>
              get teams
            </div>
          </div>
        )}
        <ul>
          <li onClick={login}>login</li>
          <li onClick={register}>register</li>
          {token && <li onClick={changeData}>change</li>}
        </ul>
      </div>
    </div>
  );
}

export default App;
