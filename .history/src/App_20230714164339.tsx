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
  const { token } = useAppSelector((state) => state.AuthorizationReducer);

  return (
    <div className="App">
      {token && <Header />}
      <div>
        {token && <Menu />}
        <Routes>
          <Route path="/signIn" element={token ? <Navigate to={'/teams'} replace /> : <SignIn />} />
          <Route path="/signUp" element={token ? <Navigate to={'/teams'} replace /> : <SignUp />} />
          <Route
            path="/teams"
            element={!token ? <Navigate to={'/signIn'} replace /> : <h1>teams</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
