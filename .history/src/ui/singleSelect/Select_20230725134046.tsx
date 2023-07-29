import { FC, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPositions } from '../../modules/positions/positionsSelector';
// import AsyncSelect from 'react-select/async';
import Select, { ActionMeta, StylesConfig } from 'react-select';
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
    const fetchedOptions = unwrapResult(res).map((el: any) =>
      typeof el === 'string' ? { value: el, label: el } : { value: el.name, label: el.name },
    );
    setOptionsSelect(fetchedOptions);
    // console.log(options);
  };

  useEffect(() => {
    fetchOptions();
  }, [dispatch]);

  // const loadOptions = (inputValue: string, callback: (options: IOption[]) => void) => {
  //   callback(optionsSelect.map((option) => ({ value: option, label: option })));
  // };

  const handleChange = (selectedOption: IOption | null) => {
    console.log('Selected position: ', selectedOption);
  };

  const styles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      marginBottom: '26px',
      marginTop: '8px',
    }),
    control: (styles, { isFocused, menuIsOpen }) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'end',
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: '#F6F6F6',
      background: '#F6F6F6',
      position: 'relative',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: '#F6F6F6',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: '#F6F6F6',
      },
    }),
    menu: (styles) => ({
      ...styles,
      width: '364px',
      overflow: 'hidden',
      borderRadius: '4px',
      maxHeight: '160px',
    }),
    menuList: (styles) => ({
      ...styles,
      padding: '0',
      maxHeight: '160px',
      // overflow: 'hidden',
      '::-webkit-scrollbar': {
        width: '0',
      },
    }),
    option: (styles) => ({
      ...styles,
      padding: '6px 12px',
      width: '364px',
      color: '#9C9C9C',
      background: '#fff !important',
      fontFamily: 'Avenir',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
      ':not(:last-child)': {
        borderBottom: '1px solid #D1D1D1',
      },
      ':hover': {
        color: '#fff',
        background: '#E4163A !important',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      position: 'absolute',
      left: '0',
      top: '0',
      color: '#707070',
      fontFamily: 'Avenir',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
    }),
  };

  return (
    <>
      <label className={style.label}>{label}</label>
      <Select
        styles={styles}
        options={optionsSelect}
        // cacheOptions
        // defaultOptions
        // loadOptions={loadOptions}
        //@ts-ignore
        onChange={handleChange}
        isMulti={false}
      />
    </>
  );
};

export default SingleSelect;
