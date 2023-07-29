import { FC, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';
import styles from './playerInfo.module.sass';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';
import { getTeam } from '../../modules/teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';

const PlayerInfo: FC = () => {
  const [teamName, setTeamName] = useState<string | null>(null);
  const location = useLocation();
  const dispatch = useAppDispatch();
  //@ts-ignore
  const id = parseInt(location.pathname.split('/').pop(), 10);
  const { name, number, position, team, height, weight, birthday, avatarUrl } =
    useAppSelector(selectPlayerInfo);

  const calculateAge = (birthDateString: string) => {
    const birthDate = new Date(birthDateString);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - birthDate.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);

    const age = Math.floor(diffInDays / 365.25);
    return age;
  };

  const findTeamName = async (id: number | null) => {
    if (id) {
      try {
        const res = await dispatch(getTeam(id));
        const team = unwrapResult(res);
        setTeamName(team.name);
        console.log(teamName);
      } catch (error) {}
    }
  };
  useEffect(() => {
    findTeamName(id);
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.containerInfo}>
        <div className={styles.links}>
          <Breadcrumbs page="Players" item={name} />
          <div>
            <EditIcon path="/updatePlayer" id={id} />
            <DeleteIcon id={id} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.containerImage}>
            <img src={`http://dev.trainee.dex-it.ru/images/a0ofoyso.png`} alt="player" />
          </div>
          <div>
            <h1 className={styles.name}>
              {name} <span>#{number}</span>
            </h1>
            <div className={styles.details}>
              <div>
                <h2>Position</h2>
                <p>{position}</p>
              </div>
              <div>
                <h2>Team</h2>
                <p>{teamName}</p>
              </div>
            </div>
            <div className={styles.details}>
              <div>
                <h2>Height</h2>
                <p>{height} cm</p>
              </div>
              <div>
                <h2>Weight</h2>
                <p>{weight} cm</p>
              </div>
            </div>
            <div className={styles.age}>
              <h2>Age</h2>
              <p>{calculateAge(birthday)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerInfo;
