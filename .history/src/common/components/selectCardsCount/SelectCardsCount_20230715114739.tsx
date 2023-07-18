import { FC } from 'react';
import Select from 'react-select';

const options = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
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
  //@ts-ignore
  return <Select options={options} menuPlacement="top" getOptionLabel={} />;
};

export default SelectCardsCount;
