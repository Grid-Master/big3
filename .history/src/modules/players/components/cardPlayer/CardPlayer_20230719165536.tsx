import { FC } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';

const CardPlayer: FC<IPlayer> = ({ name, number, teamName }) => {
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
