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
      // padding: '8px 12px',
      display: 'flex',
      justifyContent: 'end',
      overflow: 'visible'
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
      whiteSpace: 'nowrap',
      position: 'relative',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: '0',
      height: '24px',
      width: '212px',
      position: 'absolute',
      top: '10px',
      left: '12px',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#FFF',
      fontFamily: 'Avenir',
      fontSize: '14px',
    }),
    multiValue: (styles, { isFocused }) => ({
      ...styles,
      padding: '0',
      alignItems: 'center',
      height: '24px',
      background: '#E4163A',
      borderRadius: '4px',
      // transform: 'translate(12px,-4px)',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      width: '22px',
      height: '22px',
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
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
