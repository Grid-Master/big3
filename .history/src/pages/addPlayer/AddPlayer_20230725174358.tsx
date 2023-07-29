import { FC } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';
import styles from './addPlayer.module.sass';

import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Button from '../../ui/button/Button';
import { getPositions } from '../../modules/positions/positionsThunk';
import { getAllTeams } from '../../modules/teams/teamsThunk';
import SingleSelect from '../../ui/singleSelect/Select';
import { IPlayer } from '../../api/dto/IPlyers';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import { addPlayer } from '../../modules/players/playersThunk';

const AddPlayer: FC = () => {
  const methods = useForm<Omit<IPlayer, 'id'>>();
  const dispatch = useAppDispatch();

  const submitHandler: SubmitHandler<any> = async (data: Omit<IPlayer, 'id'>) => {
    console.log(data);
    await dispatch(
      addPlayer({
        name: data.name,
        number: data.number,
        //@ts-ignore
        position: data.position.value,
        //@ts-ignore
        team: data.team,
        birthday: data.birthday,
        weight: data.weight,
        height: data.height,
        avatarUrl: '2121',
      }),
    );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)} className={styles.form}>
        <p>
          <Breadcrumbs page="Players" item={'ы'} />
        </p>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <AddPhotoIcon />
          </div>
          <div className={styles.inputsContainer}>
            <div>
              <Input name="name" type="text" label="Name" />
              <SingleSelect label="position" query={getPositions} />
              <SingleSelect label="team" query={getAllTeams} />
              <div className={styles.inputsWrapper}>
                <Input name="height" type="number" label="Height (cm)" />
                <Input name="weight" type="number" label="Weight (kg)" />
              </div>
              <div className={styles.inputsWrapper}>
                <Input name="birthday" type="date" label="Birthday" />
                <Input name="number" type="number" label="Number" />
              </div>
            </div>
            <div className={styles.buttons}>
              <Button typeButton="cancel" disable={false} onClick={() => {}}>
                Cancel
              </Button>
              <Button disable={false} onClick={methods.handleSubmit(submitHandler)}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddPlayer;
