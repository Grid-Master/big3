import { FC } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';

const CardPlayer: FC<IPlayer> = ({ name, number }) => {
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
        <p>Portland trail blazers</p>
      </div>
    </div>
  );
};

export default CardPlayer;
