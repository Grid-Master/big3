import { FC, useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useAppDispatch } from '../../common/hooks/reduxHooks';
import Select, { StylesConfig } from 'react-select';
import style from './select.module.sass';
import { unwrapResult } from '@reduxjs/toolkit';

interface IOption {
  value: string;
  label: string;
  id?: number;
}

interface ISelect {
  label: string;
  name: string;
  defaultOption: IOption | null;
  query: any;
}

const SingleSelect: FC<ISelect> = ({ label, query, name, defaultOption }) => {
  const [optionsSelect, setOptionsSelect] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fetchOptions = async () => {
    const res = await dispatch(query());
    const fetchedOptions = unwrapResult(res).map((el: any) =>
      typeof el === 'string'
        ? { value: el, label: el }
        : { value: el.name, label: el.name, id: el.id },
    );
    setOptionsSelect(fetchedOptions);
  };

  console.log(defaultOption);

  useEffect(() => {
    fetchOptions();
  }, [dispatch]);

  const handleChange = (selectedOption: IOption | null) => {
    console.log('Selected position: ', selectedOption);
  };

  const styles: StylesConfig = {
    container: (styles) => ({
      ...styles,
      marginBottom: '26px',
      marginTop: '8px',
    }),
    control: (styles) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'end',
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: errors[name]?.type ? '#FF768E' : '#F6F6F6',
      background: '#F6F6F6',
      position: 'relative',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: errors[name]?.type ? '#FF768E' : '#F6F6F6',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: errors[name]?.type ? '#FF768E' : '#F6F6F6',
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
      color: '#707070',
      fontFamily: 'Avenir',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      color: '#D1D1D1',
      ':first-child': {
        display: 'none',
      },
      div: {
        cursor: 'pointer',
        color: '#D1D1D1 !important',
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      color: '#D1D1D1',
    }),
  };

  return (
    <>
      <label className={style.label}>
        {label}
        {errors[name]?.type === 'required' && <p>Required</p>}
      </label>
      <Controller
        // defaultValue={defaultOption ? defaultOption : null}
        name={name}
        control={control}
        rules={{ required: ' ' }}
        render={({ field }) => (
          <Select
            {...field}
            styles={styles}
            options={optionsSelect}
            defaultValue={
              defaultOption
                ? { value: defaultOption.value, label: defaultOption.label, id: defaultOption.id }
                : ''
            }
            //@ts-ignore
            onChange={(value) => {
              field.onChange(value);
              handleChange(value);
            }}
            isMulti={false}
          />
        )}
      />
    </>
  );
};

export default SingleSelect;
