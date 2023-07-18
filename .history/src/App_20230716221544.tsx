import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppSelector } from './common/hooks/reduxHooks';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Teams from './pages/teams/Teams';
import TeamInfo from './pages/teamInfo/TeamInfo';
import AddTeam from './pages/addTeam/AddTeam';

function App() {
  const { token } = useAppSelector((state) => state.AuthorizationReducer);

  const styles = {
    display: token ? 'flex' : 'block',
    background: 'var(--ui-lightest-grey-1, #F6F6F6)';
  };

  return (
    <div className="App">
      {token && <Header />}
      <div style={styles}>
        {token && <Menu />}
        <Routes>
          <Route path="/signIn" element={token ? <Navigate to={'/teams'} replace /> : <SignIn />} />
          <Route path="/signUp" element={token ? <Navigate to={'/teams'} replace /> : <SignUp />} />
          <Route path="/teams" element={!token ? <Navigate to={'/signIn'} replace /> : <Teams />} />
          <Route
            path="/addTeam"
            element={!token ? <Navigate to={'/signIn'} replace /> : <AddTeam />}
          />
          <Route
            path="/teams/:id"
            element={!token ? <Navigate to={'/signIn'} replace /> : <TeamInfo />}
          />
          <Route
            path="/players"
            element={!token ? <Navigate to={'/signIn'} replace /> : <h1>players</h1>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
