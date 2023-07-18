import { FC } from 'react';
import EditIcon from '../../assets/icons/EditIcon';
import DeleteIcon from '../../assets/icons/DeleteIcon';

const TeamInfo: FC = () => {
  return (
    <div>
      <div>
        <div>
          <div>хлеюные крошки</div>
          <div>
            <EditIcon />
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
