import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';
import styles from './addPlayer.module.sass';

import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Button from '../../ui/button/Button';
import { getPositions } from '../../modules/positions/positionsThunk';
import { getAllTeams } from '../../modules/teams/teamsThunk';
import SingleSelect from '../../ui/singleSelect/Select';

const AddPlayer: FC = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form className={styles.form}>
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
              <SingleSelect label="Position" query={getPositions} />
              <SingleSelect label="Teams" query={getAllTeams} />
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
              <Button disable={false} onClick={() => {}}>
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
