import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppSelector } from './common/hooks/reduxHooks';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

function App() {
  const { token } = useAppSelector((state) => state.AuthorizationReducer);

  const styles = {
    display: token ? 'flex' : 'block',
  };

  return (
    <div className="App">
      {token && <Header />}
      <div style={styles}>
        {token && <Menu />}
        <Routes>
          <Route path="/signIn" element={token ? <Navigate to={'/teams'} replace /> : <SignIn />} />
          <Route path="/signUp" element={token ? <Navigate to={'/teams'} replace /> : <SignUp />} />
          <Route
            path="/teams"
            element={!token ? <Navigate to={'/signIn'} replace /> : <h1>teams</h1>}
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
