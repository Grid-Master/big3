import { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm, SubmitHandler, Controller } from 'react-hook-form';
import Breadcrumbs from '../../common/components/breadcrumbs/Breadcrumbs';
import Input from '../../ui/input/Input';
import styles from './addPlayer.module.sass';
import AddPhotoIcon from '../../assets/icons/AddPhotoIcon';
import Button from '../../ui/button/Button';
import { getPositions } from '../../modules/positions/positionsThunk';
import { getAllTeams } from '../../modules/teams/teamsThunk';
import SingleSelect from '../../ui/singleSelect/Select';
import { IPlayer } from '../../api/dto/IPlyers';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { addPlayer } from '../../modules/players/playersThunk';
import { selectPlayerInfo } from '../../modules/playerInfo/playerInfoSelector';

const AddPlayer: FC = () => {
  const imageAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<Omit<IPlayer, 'id'>>();
  const { control } = methods;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { avatarUrl } = useAppSelector(selectPlayerInfo);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleAddPhoto = () => {
    if (imageAdder.current) {
      imageAdder.current.click();
    }
  };

  const submitHandler: SubmitHandler<any> = async (data: Omit<IPlayer, 'id'>) => {
    console.log(data);
    await dispatch(
      addPlayer({
        name: data.name,
        number: data.number,
        //@ts-ignore
        position: data.position.value,
        //@ts-ignore
        team: data.team.id,
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
          <Controller
            name="avatarUrl"
            control={control}
            defaultValue={avatarUrl ? avatarUrl : null}
            rules={{ required: '' }}
            render={({ field }) => (
              <>
                <input
                  className={styles.hidden}
                  onChange={(e) => {
                    field.onChange(e);
                    handleImageChange(e);
                  }}
                  ref={imageAdder}
                  type="file"
                  accept=".png"
                />
                <div onClick={handleAddPhoto} className={styles.imageContainer}>
                  {(selectedImage || avatarUrl) && (
                    <img
                      className={styles.prevImage}
                      src={
                        selectedImage
                          ? URL.createObjectURL(selectedImage)
                          : avatarUrl
                          ? `http://dev.trainee.dex-it.ru${avatarUrl}`
                          : ''
                      }
                    />
                  )}
                  <AddPhotoIcon />
                </div>
              </>
            )}
          />
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
              <Button
                typeButton="cancel"
                disable={false}
                onClick={() => {
                  navigate('/players');
                }}>
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
