import { FC, useState } from 'react';
import Select from 'react-select';

interface IOptions {
  value: number;
  label: number;
}

const options: IOptions[] = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
];

const SelectCardsCount: FC = () => {
  const [selectedCount, setSelectedCount] = useState<number>(6);
  console.log(selectedCount);

  const handleSelectChange = (selectedOption: IOptions) => {
    setSelectedCount(selectedOption.value);
  };

  return <Select options={options} menuPlacement="top" onChange={handleSelectChange} />;
};

export default SelectCardsCount;
