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
      border: '0.5px solid var(--ui-lightest-grey, #D1D1D1)',
      borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
      '&:hover': {
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderColor: '#D1D1D1',
      },
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
