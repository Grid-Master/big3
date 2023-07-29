import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPositions } from '../../modules/positions/positionsSelector';
// import AsyncSelect from 'react-select/async';
// import  Select,{ ActionMeta, StylesConfig } from 'react-select';
import Select from 'react-select';
import { getPositions } from '../../modules/positions/positionsThunk';
import style from './select.module.sass';
import { unwrapResult } from '@reduxjs/toolkit';

interface IOption {
  value: string;
  label: string;
}

interface ISelect {
  label: string;
  query: any;
}

const SingleSelect: FC<ISelect> = ({ label, query }) => {
  const [optionsSelect, setOptionsSelect] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const { positions } = useAppSelector(selectPositions);

  const fetchOptions = async () => {
    const res = await dispatch(query());
    // const fetchedOptions = unwrapResult(res).map((el: any) => ({ value: el, label: el }));
    setOptionsSelect(unwrapResult(res));
    // console.log(options);
  };

  useEffect(() => {
    fetchOptions();
  }, [dispatch]);

  const loadOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
    callback(optionsSelect.map((option) => ({ value: option, label: option })));
  };

  const handleChange = (selectedOption: IOption | null) => {
    console.log('Selected position: ', selectedOption);
  };

  const styles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      marginBottom: '26px',
      marginTop: '8px',
    }),
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <Select
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

export default SingleSelect;
