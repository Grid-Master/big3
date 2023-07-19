import React, { useEffect, useState } from 'react';
import styles from './App.module.sass';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppSelector } from './common/hooks/reduxHooks';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Teams from './pages/teams/Teams';
import TeamInfo from './pages/teamInfo/TeamInfo';
import AddTeam from './pages/addTeam/AddTeam';
import NotFound from './pages/notFound/NotFound';

function App() {
  const [isBurger, setIsBurger] = useState<boolean>(false);
  const { token } = useAppSelector((state) => state.AuthorizationReducer);

  return (
    <div className={styles.app}>
      {token && <Header isBurger={isBurger} setIsBurger={setIsBurger} />}
      <div className={token ? styles.container : styles.sign}>
        {token && <Menu isBurger={isBurger} setIsBurger={setIsBurger} />}
        <Routes>
          <Route path="/signIn" element={token ? <Navigate to={'/teams'} replace /> : <SignIn />} />
          <Route path="/signUp" element={token ? <Navigate to={'/teams'} replace /> : <SignUp />} />
          <Route path="/teams" element={!token ? <Navigate to={'/signIn'} replace /> : <Teams />} />
          <Route
            path="/addTeam"
            element={!token ? <Navigate to={'/signIn'} replace /> : <AddTeam />}
          />
          <Route
            path="/updateTeam/:id"
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
