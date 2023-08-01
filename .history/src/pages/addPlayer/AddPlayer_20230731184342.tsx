import { FC, useState, useRef, useEffect, useLayoutEffect } from 'react';
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
import { addImage, getTeam } from '../../modules/teamInfo/teamInfoThunk';
import { unwrapResult } from '@reduxjs/toolkit';
import { getPlayer, updatePlayer } from '../../modules/playerInfo/playerInfoThunk';
import { IOption } from '../../ui/multiSelect/MultiSelect';
import { setAlert } from '../../modules/alert/alertSlice';

interface IDataSubmit extends Omit<Omit<IPlayer, 'position'>, 'team'> {
  position: IOption;
  team: IOption;
}

const AddPlayer: FC = () => {
  const params = useParams();
  const { id } = params;
  const imageAdder = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [teamName, setTeamName] = useState<string | null>(null);
  const { avatarUrl, name, number, position, team, weight, height, birthday } =
    useAppSelector(selectPlayerInfo);
  const methods = useForm<Omit<IPlayer, 'id'>>({
    defaultValues: { birthday, name, number, weight, height },
  });
  const {
    control,
    formState: { errors },
  } = methods;

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

  const findTeamName = async (id: number | null) => {
    if (id) {
      const res = await dispatch(getTeam(id));
      const team = unwrapResult(res);
      setTeamName(team.name);
    }
  };

  const submitHandler: SubmitHandler<any> = async (data: IDataSubmit) => {
    let imagePath = null;

    if (selectedImage) {
      const imageResponse = await dispatch(addImage(selectedImage));
      imagePath = unwrapResult(imageResponse);
    } else if (avatarUrl) {
      imagePath = avatarUrl;
    } else {
      return;
    }

    if (new Date(data.birthday) > new Date()) {
      methods.setError('birthday', {
        type: 'manual',
        message: "You can't select a date greater than the current one!",
      });
      return;
    }

    if (imagePath && id) {
      const updatePlayerResponse = await dispatch(
        updatePlayer({
          name: data.name,
          number: data.number,
          position: data.position.value,
          team: data.team.id,
          birthday: data.birthday,
          height: data.height && +data.height,
          weight: data.weight,
          avatarUrl: imagePath,
          id: +id,
        }),
      );
      //@ts-ignore
      if (updatePlayerResponse.payload.status === 409) {
        methods.setError('name', {
          type: 'manual',
          message: 'This name already exists!',
        });
        return;
      }
      dispatch(setAlert({ showed: true, message: 'Player successfully updated', type: 'success' }));
      methods.reset();
      navigate(`/players/${id}`);
    } else if (imagePath) {
      const addPlayerResponse = await dispatch(
        addPlayer({
          name: data.name,
          number: data.number,
          position: data.position.value,
          team: data.team.id,
          birthday: data.birthday,
          weight: data.weight,
          height: data.height,
          avatarUrl: imagePath,
        }),
      );
      //@ts-ignore
      if (addPlayerResponse.payload.status === 409) {
        methods.setError('name', {
          type: 'manual',
          message: 'This name already exists!',
        });
        return;
      }
      const { id } = unwrapResult(addPlayerResponse);
      dispatch(setAlert({ showed: true, message: 'Player successfully added', type: 'success' }));
      methods.reset();
      await dispatch(getPlayer(id));
      navigate(`/players/${id}`);
    }
  };

  useEffect(() => {
    findTeamName(team);
  }, []);

  if (!teamName && id) {
    return <p>Loading...</p>;
  }

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
            rules={{ required: ' ' }}
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
                  accept=".png,.jpeg,.jpg"
                />
                <div
                  onClick={handleAddPhoto}
                  className={
                    errors.avatarUrl?.type === 'required'
                      ? `${styles.imageContainer} ${styles.required}`
                      : styles.imageContainer
                  }>
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
          {errors.avatarUrl?.type === 'required' && (
            <div className={styles.imageRequired}>Required</div>
          )}
          <div className={styles.inputsContainer}>
            <div>
              <Input name="name" type="text" label="Name" />
              <SingleSelect
                name="position"
                label="Position"
                query={getPositions}
                defaultOption={position ? { value: position, label: position } : undefined}
              />
              <SingleSelect
                name="team"
                label="Team"
                query={getAllTeams}
                defaultOption={
                  teamName && team ? { value: teamName, label: teamName, id: team } : undefined
                }
              />
              <div className={styles.inputsWrapper}>
                <Input name="height" type="number" label="Height (cm)" />
                <Input name="weight" type="number" label="Weight (kg)" />
              </div>
              <div className={styles.inputsWrapper}>
                <Input
                  name="birthday"
                  type="date"
                  label="Birthday"
                  value={birthday ? birthday.split('T')[0] : ''}
                />
                <Input name="number" type="number" label="Number" />
              </div>
            </div>
            <div className={styles.buttons}>
              <Button
                typeButton="cancel"
                disable={false}
                onClick={() => {
                  navigate(id ? `/players/${id}` : '/players');
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
