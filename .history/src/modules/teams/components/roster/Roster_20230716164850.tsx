import { FC } from 'react';

const Roster: FC = () => {
  return (
    <ul>
      <li>Roster</li>
      <li>
        <div>
          #<span>Player</span>
        </div>
        <div>
          <span>Height</span>
          <span>Weight</span>
          <span>Age</span>
        </div>
      </li>
    </ul>
  );
};

export default Roster;
