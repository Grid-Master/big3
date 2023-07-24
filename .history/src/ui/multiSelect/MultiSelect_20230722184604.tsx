import { FC, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { ActionMeta, MultiValue, OptionsOrGroups } from 'react-select';

interface IOption {
  value: string;
  label: string;
}

interface IMultiSelect {
  getOptions: (inputValue: string) => Promise<IOption[]>;
  onChange: (selectedOptions: IOption[], actionMeta: ActionMeta<IOption>) => void;
}

const MultiSelect: FC<IMultiSelect> = ({ getOptions, onChange }) => {
  const [options, setOptions] = useState<IOption[]>([]);

  const loadOptions = async (
    inputValue: string,
    callback: (
      options: OptionsOrGroups<IOption, any>,
    ) => void | Promise<OptionsOrGroups<IOption, any>>,
  ) => {
    const result = await getOptions(inputValue);
    setOptions(result);
    callback(result);
  };

  const handleSelectChange = (
    selectedOptions: MultiValue<IOption>,
    actionMeta: ActionMeta<IOption>,
  ) => {
    if (selectedOptions) {
      const convertedOptions = selectedOptions as IOption[];
      onChange(convertedOptions, actionMeta);
    } else {
      onChange([], actionMeta);
    }
  };
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={handleSelectChange}
      isMulti
      options={options}
    />
  );
};

export default MultiSelect;
