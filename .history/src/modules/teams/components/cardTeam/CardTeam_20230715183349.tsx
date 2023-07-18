import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ITeam } from '../../../../api/dto/ITeams';
import styles from './cardTeam.module.sass';
import teamLogo from '../../../../assets/images/POR.png';

const CardTeam: FC<Omit<Omit<ITeam, 'division'>, 'conference'>> = ({
  name,
  foundationYear,
  imageUrl,
  id,
}) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(id)} className={styles.container}>
      <div className={styles.containerLogo}>
        <img src={teamLogo} alt="logo" />
      </div>
      <div className={styles.containerInfo}>
        <h2>{name}</h2>
        <p>Year of foundation: {foundationYear}</p>
      </div>
    </div>
  );
};

export default CardTeam;
