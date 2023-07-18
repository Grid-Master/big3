import { FC, useState } from 'react';
import Select from 'react-select';

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

const SelectPageSize: FC = () => {
  const [selectedSize, setSelectedSize] = useState<number>(6);
  console.log(selectedSize);

  const handleSelectChange = (selectedOption: IOptions) => {
    setSelectedSize(selectedOption.value);
  };

  return (
    <Select
      options={options}
      menuPlacement="top"
      //@ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default SelectPageSize;
