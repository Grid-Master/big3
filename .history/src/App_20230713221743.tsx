import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppDispatch, useAppSelector } from './common/hooks/reduxHooks';
import { change, signIn, signUp } from './modules/authorization/authorizationThunk';
import { addPlayer, getPlayer, getPlayers } from './modules/players/playersThunk';
import { IPlayer } from './api/dto/IPlyers';
import { addTeam, getTeams } from './modules/teams/teamsThunk';
import { ITeam } from './api/dto/ITeams';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

const player: IPlayer = {
  //id: 13,
  name: 'andrew a',
  number: 1,
  position: 'Forward',
  team: 31,
  birthday: new Date('2023-07-11T18:05:08.808Z'),
  height: 0,
  weight: 0,
  avatarUrl: 'null',
};

const addingTeam: ITeam = {
  name: 'dreamteam',
  foundationYear: 2022,
  division: 'lala',
  conference: 'lala',
  imageUrl: 'lala',
};

function App() {
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.AuthorizationReducer);

  return (
    <div className="App">
      {!token ? (
        // <SignIn />
        <SignUp />
      ) : (
        <>
          <Header />
          <div style={{ display: 'flex' }}>
            <Menu />
            <div>
              <div onClick={() => dispatch(getPlayer(13))}>get player</div>
              <div onClick={() => dispatch(addPlayer(player))}>add player</div>
              <div onClick={() => dispatch(getPlayers({}))}>get all players</div>
              <div onClick={() => dispatch(addTeam(addingTeam))}>add team</div>
              <div onClick={() => dispatch(getTeams({}))}>get teams</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
