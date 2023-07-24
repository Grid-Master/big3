import { FC, useState } from 'react';
import AsyncSelect from 'react-select/async';
import { ActionMeta } from 'react-select';

interface IOption {
  value: string;
  label: string;
}

interface IMultiSelect {
  getOptions: (inputValue: string) => Promise<IOption[]>; // Асинхронная функция для получения опций
  onChange: (selectedOptions: ValueType<IOption, true>, actionMeta: ActionMeta<IOption>) => void; // Обработчик изменения значения
}

const MultiSelect: FC<IMultiSelect> = ({ getOptions, onChange }) => {
  const [options, setOptions] = useState<OptionsType<IOption>>([]);

  const loadOptions = async (
    inputValue: string,
    callback: (options: OptionsType<IOption>) => void,
  ) => {
    const result = await getOptions(inputValue);
    setOptions(result);
    callback(result);
  };
  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={onChange}
      isMulti
      options={options}
    />
  );
};

export default MultiSelect;
