import { FC, useEffect, useState } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';
import { useAppDispatch } from '../../../../common/hooks/reduxHooks';
import { getTeam } from '../../../teamInfo/teamInfoThunk';

const CardPlayer: FC<IPlayer> = ({ name, number, id }) => {
  const [team, setTeam] = useState<string>('');
  const dispatch = useAppDispatch();

  const fetchTeam = async () => {
    const res = await dispatch(getTeam(id));
    //@ts-ignore
    setTeam(res.payload.name);
  };

  useEffect(() => {}, []);
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
        <p>{team}</p>
      </div>
    </div>
  );
};

export default CardPlayer;
