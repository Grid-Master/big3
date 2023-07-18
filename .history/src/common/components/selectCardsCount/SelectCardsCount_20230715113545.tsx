import { FC } from 'react';
import Select from 'react-select';

const options = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
];

const SelectCardsCount: FC = () => {
  return (
    <Select
      options={options}
      classNames={{ control: (state) => (state.isFocused ? 'none' : 'none') }}
    />
  );
};

export default SelectCardsCount;
