import { FC, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

interface IOptions {
  value: number;
  label: number;
}

interface ISelectedSize {
  setSelectedSize: React.Dispatch<React.SetStateAction<number>>;
}

const options: IOptions[] = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
];

const styles: StylesConfig = {
  control: (styles) => ({ ...styles, color: 'red' }),
};

const SelectPageSize: FC<ISelectedSize> = ({ setSelectedSize }) => {
  const handleSelectChange = (selectedOption: IOptions) => {
    setSelectedSize(selectedOption.value);
  };

  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="top"
      defaultValue={options[0]}
      //@ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default SelectPageSize;
