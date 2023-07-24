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
      width: '88px',
      height: '40px',
      textAlign: 'center',
      color: '#303030',
      backgroundColor: '#FFF',
      borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderColor: '#D1D1D1',
      },
      '@media screen and (max-width: 1000px)': {
        width: '60px',
      },
    }),
  };
  return (
    <Select
      // styles={styles}
      options={options}
      menuPlacement="top"
      isMulti
      // @ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default MultiSelect;
