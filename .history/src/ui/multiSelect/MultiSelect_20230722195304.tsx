import { FC, useState } from 'react';

import Select from 'react-select';

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
  return (
    <Select
      // styles={styles}
      options={options}
      menuPlacement="top"
      isMulti
      // @ts-ignore
      onChange={handleSelectChange}
      className="react-select-container"
      classNamePrefix="react-select"
    />
  );
};

export default MultiSelect;
