import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppDispatch, useAppSelector } from './common/hooks/reduxHooks';
import { change, signIn, signUp } from './modules/authorization/authorizationThunk';
import { addPlayer, getPlayer, getPlayers } from './modules/players/playersThunk';
import { IPlayer } from './api/dto/IPlyers';
import { addTeam } from './modules/teams/teamsThunk';
import { ITeam } from './api/dto/ITeams';

const player: IPlayer = {
  //id: 13,
  name: 'jack1',
  number: 0,
  position: 'Forward',
  team: 21,
  birthday: new Date('2023-07-11T18:05:08.808Z'),
  height: 0,
  weight: 0,
  avatarUrl: 'null',
};

const addingTeam: ITeam = {
  name: 'vladbogteam2',
  foundationYear: 2002,
  division: 'lala',
  conference: 'lala',
  imageUrl: 'lala',
};

function App() {
  const [teams, setTeams] = useState<any>([]);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.AuthorizationReducer);
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
    dispatch(change({ userName: 'opanaUPD', avatarUrl: 'nonde' }));
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: 'flex' }}>
        <Menu />
        {token && (
          <div>
            <div onClick={() => dispatch(getPlayer(13))}>get player</div>
            <div onClick={() => dispatch(addPlayer(player))}>add player</div>
            <div onClick={() => dispatch(getPlayers({}))}>get all players</div>
            <div onClick={() => dispatch(addTeam(addingTeam))}>add team</div>
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
