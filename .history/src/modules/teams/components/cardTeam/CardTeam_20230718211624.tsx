import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITeam } from '../../../../api/dto/ITeams';
import styles from './cardTeam.module.sass';
import teamLogo from '../../../../assets/images/POR.png';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';

const CardTeam: FC<Omit<Omit<ITeam, 'division'>, 'conference'>> = ({
  name,
  foundationYear,
  imageUrl,
  id,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const navigateToTeamInfo = async () => {
    await dispatch(getTeam(id));
    navigate(`/teams/${id}`);
  };

  return (
    <div onClick={navigateToTeamInfo} className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt="logo" />
      </div>
      <div className={styles.containerInfo}>
        <h2>{name}</h2>
        <p>Year of foundation: {foundationYear}</p>
      </div>
    </div>
  );
};

export default CardTeam;
