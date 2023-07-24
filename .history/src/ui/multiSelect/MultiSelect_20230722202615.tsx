import { FC, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

export interface IOption {
  value: string | null;
  label: string | null;
}

interface IMultiSelect {
  options: IOption[];
}

const MultiSelect: FC<IMultiSelect> = ({ options }) => {
  const handleSelectChange = (selectedOption: IOption) => {
    console.log(selectedOption);
  };

  const styles: StylesConfig = {
    control: (styles, { isFocused }) => ({
      ...styles,
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
    }),
    multiValue: (styles, { isFocused }) => ({
      ...styles,
      padding: '0',
      height: '24px',
      alignItems: 'center',
      color: '#FFF',
      fontFamily: 'Avenir',
      fontSize: '14px',
      background: '#E4163A',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      width: '22px',
      height: '22px',
    }),
  };
  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="bottom"
      isMulti
      // @ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default MultiSelect;
