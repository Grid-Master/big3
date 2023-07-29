import { useState, useEffect } from 'react';
import styles from './App.module.sass';
import Header from './common/components/header/Header';
import Menu from './common/components/menu/Menu';
import { useAppDispatch, useAppSelector } from './common/hooks/reduxHooks';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import { Routes, Route, Navigate } from 'react-router-dom';
import Teams from './pages/teams/Teams';
import TeamInfo from './pages/teamInfo/TeamInfo';
import AddTeam from './pages/addTeam/AddTeam';
import NotFound from './pages/notFound/NotFound';
import Players from './pages/players/Players';
import PlayerInfo from './pages/playerInfo/PlayerInfo';
import AddPlayer from './pages/addPlayer/AddPlayer';
import { getToken, getUserName } from './modules/authorization/authorizationSlice';
import { selectAlertOptions } from './modules/alert/alertSelector';
import Alert from './common/components/alert/Alert';

function App() {
  const [isBurger, setIsBurger] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { token } = useAppSelector((state) => state.AuthorizationReducer);
  const { showed: alertShowed } = useAppSelector(selectAlertOptions);
  // const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getToken());
    // dispatch(getUserName());
  }, []);

  return (
    <div className={styles.app}>
      {token && <Header isBurger={isBurger} setIsBurger={setIsBurger} />}
      <div className={token ? styles.container : styles.sign}>
        {token && <Menu isBurger={isBurger} setIsBurger={setIsBurger} />}
        <Routes>
          <Route path="/" element={<Navigate to={'/teams'} />} />
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
            element={!token ? <Navigate to={'/signIn'} replace /> : <Players />}
          />
          <Route
            path="/addPlayer"
            element={!token ? <Navigate to={'/signIn'} replace /> : <AddPlayer />}
          />
          <Route
            path="/updatePlayer/:id"
            element={!token ? <Navigate to={'/signIn'} replace /> : <AddPlayer />}
          />
          <Route
            path="/players/:id"
            element={!token ? <Navigate to={'/signIn'} replace /> : <PlayerInfo />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {alertShowed && <Alert />}
    </div>
  );
}

export default App;
