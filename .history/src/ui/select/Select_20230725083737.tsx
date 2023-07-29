import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPositions } from '../../modules/positions/positionsSelector';
import AsyncSelect from 'react-select/async';
import { ActionMeta, StylesConfig } from 'react-select';
import { getPositions } from '../../modules/positions/positionsThunk';
import style from './select.module.sass';

interface IOptions {
  value: string;
  label: string;
}

interface ISelect {
  label: string;
}

const Select: FC<ISelect> = ({ label }) => {
  const dispatch = useAppDispatch();
  const { positions } = useAppSelector(selectPositions);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  const loadOptions = (inputValue: string, callback: (options: IOptions[]) => void) => {
    callback(positions.map((option) => ({ value: option, label: option })));
  };

  const handleChange = (selectedOption: IOptions | null) => {
    console.log('Selected position: ', selectedOption);
  };

  const styles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      marginBottom: '26px',
    }),
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <AsyncSelect
        styles={styles}
        cacheOptions
        defaultOptions
        loadOptions={loadOptions}
        //@ts-ignore
        onChange={handleChange}
        isMulti={false}
      />
    </>
  );
};

export default Select;
