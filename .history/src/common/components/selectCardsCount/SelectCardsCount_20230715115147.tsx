import { FC } from 'react';
import Select from 'react-select';

const options = [
  { value: 6, label: 6 },
  { value: 'divider', label: 'divider', isDisabled: true },
  { value: 12, label: 12 },
  { value: 'divider', label: 'divider', isDisabled: true },
  { value: 24, label: 24 },
];
// const customStyles = {
//   control: (provided: any, state: any) => ({
//     ...provided,
//     border: state.menuIsOpen ? 'red' : provided.border,
//     outline: 'none',
//   }),
// };

const SelectCardsCount: FC = () => {
  const getOptionLabel = (option: any) => {
    if (option.isDisabled) {
      return <div style={{ height: '0.5px', background: '#D1D1D1' }}></div>;
    }
    return option.label;
  };
  return <Select options={options} menuPlacement="top" getOptionLabel={getOptionLabel} />;
};

export default SelectCardsCount;
