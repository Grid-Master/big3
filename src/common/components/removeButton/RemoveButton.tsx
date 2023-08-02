import { FC } from 'react';
import DeleteIcon from '../../../assets/icons/DeleteIcon';
import { useNavigate, useLocation } from 'react-router-dom';
import { setAlert } from '../../../modules/alert/alertSlice';
import { deletePlayer } from '../../../modules/playerInfo/playerInfoThunk';
import { deleteTeam } from '../../../modules/teamInfo/teamInfoThunk';
import { useAppDispatch } from '../../hooks/reduxHooks';

interface IDeleteIcon {
  id: number | string | undefined;
}

const RemoveButton: FC<IDeleteIcon> = ({ id }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteItem = async () => {
    if (id) {
      if (location.pathname.includes('/players')) {
        await dispatch(deletePlayer(+id));
        dispatch(setAlert({ showed: true, message: 'Player was deleted', type: 'success' }));
        navigate('/players');
      } else if (location.pathname.includes('/teams')) {
        await dispatch(deleteTeam(+id));
        dispatch(setAlert({ showed: true, message: 'Team was deleted', type: 'success' }));
        navigate('/teams');
      }
    }
  };
  return (
    <div style={{ display: 'inline' }} onClick={deleteItem}>
      <DeleteIcon />
    </div>
  );
};

export default RemoveButton;
