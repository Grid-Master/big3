import { FC, useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 6, label: 6 },
  { value: 12, label: 12 },
  { value: 24, label: 24 },
];

const SelectCardsCount: FC = () => {
  const [selectedCount, setSelectedCount] = useState<any>(6);
  console.log(selectedCount);

  const handleSelectChange = (selectedCount: any) => {
    setSelectedCount(selectedCount);
  };

  return <Select options={options} menuPlacement="top" onChange={handleSelectChange} />;
};

export default SelectCardsCount;
