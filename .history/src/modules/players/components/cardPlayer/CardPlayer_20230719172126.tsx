import { FC, useEffect, useState } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';

const CardPlayer: FC<IPlayer> = ({ name, number, id, team }) => {
  const [teamName, setTeamName] = useState<string>('');
  const dispatch = useAppDispatch();

  const fetchTeam = async () => {
    const res = await dispatch(getTeam(team));
    setTeamName(res.payload.name);
  };

  useEffect(() => {
    fetchTeam();
  }, []);
  return (
    <div>
      <div>
        <img />
      </div>
      <img />
      <div>
        <h2>
          {name} <span>#{number}</span>
        </h2>
        <p>{teamName}</p>
      </div>
    </div>
  );
};

export default CardPlayer;
