import { FC, useState } from 'react';

import Select from 'react-select';

interface IOption {
  value: string;
  label: string;
}

interface IMultiSelect {
  options: IOption[];
}

const MultiSelect: FC<IMultiSelect> = ({ options }) => {
  const handleSelectChange = (selectedOption: IOption) => {
    console.log(selectedOption);
  };
  return (
    <Select
      // styles={styles}
      options={options}
      menuPlacement="top"
      // @ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default MultiSelect;
