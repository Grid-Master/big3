import { FC, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import { addImage } from '../../modules/teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import { getPlayer, updatePlayer } from '../../modules/playerInfo/playerInfoThunk';

const AddPlayer: FC = () => {
  const params = useParams();
  const { id } = params;
  const imageAdder = useRef<HTMLInputElement>(null);
  const methods = useForm<Omit<IPlayer, 'id'>>();
  const { control } = methods;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { avatarUrl } = useAppSelector(selectPlayerInfo);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedImage(event.target.files[0]);
      console.log(selectedImage);
    }
  };

  const handleAddPhoto = () => {
    if (imageAdder.current) {
      imageAdder.current.click();
    }
  };

  const submitHandler: SubmitHandler<any> = async (data: Omit<IPlayer, 'id'>) => {
    let imagePath = null;

    if (selectedImage) {
      const imageResponse = await dispatch(addImage(selectedImage));
      imagePath = unwrapResult(imageResponse);
    } else if (avatarUrl) {
      imagePath = avatarUrl;
    } else {
      return;
    }
    if (imagePath && id) {
      await dispatch(
        updatePlayer({
          id: +id,
          name: data.name,
          number: data.number,
          //@ts-ignore
          position: data.position.value,
          //@ts-ignore
          team: data.team.id,
          birthday: data.birthday,
          weight: data.weight,
          height: data.height,
          avatarUrl: imagePath,
        }),
      );
      alert('Player was updated');
      methods.reset();
      navigate(`/players/${id}`);
    } else if (imagePath) {
      const addPlayerResponse = await dispatch(
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
          avatarUrl: imagePath,
        }),
      );
      const { id } = unwrapResult(addPlayerResponse);
      alert('Player was added');
      methods.reset();
      await dispatch(getPlayer(id));
      navigate(`/players/${id}`);
    }
    console.log(data);
    // await dispatch(
    //   addPlayer({
    //     name: data.name,
    //     number: data.number,
    //     //@ts-ignore
    //     position: data.position.value,
    //     //@ts-ignore
    //     team: data.team.id,
    //     birthday: data.birthday,
    //     weight: data.weight,
    //     height: data.height,
    //     avatarUrl: '2121',
    //   }),
    // );
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submitHandler)} className={styles.form}>
        <p>
          <Breadcrumbs page="Players" item={'Add new player'} />
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
