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
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

function App() {
  // const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.AuthorizationReducer);
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/signIn');
  // }, []);

  return (
    <div className="App">
      {token && <Header />}
      <div>
        {token && <Menu />}
        <Routes>
          <Route path="/signIn" element={token ? <Navigate to={'/teams'} replace /> : <SignIn />} />
          <Route path="/signUp" element={token ? <Navigate to={'/teams'} replace /> : <SignUp />} />
          <Route path="/teams" element={<h1>teams</h1>} />
        </Routes>
      </div>
      {/* {!token ? (
        <SignIn />
      ) : (
        <SignUp />
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
      )} */}
    </div>
  );
}

export default App;
