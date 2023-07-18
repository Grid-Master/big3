import { FC } from 'react';
import Select from 'react-select';

const options = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
];
const customStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: state.menuIsOpen ? 'none' : provided.border,
    // Другие стили control
  }),
};

const SelectCardsCount: FC = () => {
  return <Select options={options} menuPlacement="top" styles={customStyles} />;
};

export default SelectCardsCount;
