import { FC } from 'react';
import { IPlayer } from '../../../../api/dto/IPlyers';

const CardPlayer: FC<IPlayer> = ({ name }) => {
  return <div>{name}</div>;
};

export default CardPlayer;
