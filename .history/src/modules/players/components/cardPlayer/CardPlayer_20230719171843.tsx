import { FC, useEffect, useState } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { useAppDispatch, useAppSelector } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';
import { selectTeamInfo } from '../../../teamInfo/teamInfoSelector';

const CardPlayer: FC<IPlayer> = ({ name, number, id, team }) => {
  const [teamName, setTeamName] = useState<string>('');
  const dispatch = useAppDispatch();
  const { name: selectedTeamName } = useAppSelector(selectTeamInfo);

  const fetchTeam = async () => {
    await dispatch(getTeam(team));
    setTeamName(selectedTeamName ? selectedTeamName : 'error');
    //@ts-ignore
    // setTeamName(res.payload.name);
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
