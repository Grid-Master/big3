import { FC } from 'react';

interface IOption {
  value: string;
  label: string;
}

interface CustomAsyncSelectProps {
  getOptions: (inputValue: string) => Promise<IOption[]>; // Асинхронная функция для получения опций
  onChange: (selectedOptions: ValueType<IOption, true>, actionMeta: ActionMeta<IOption>) => void; // Обработчик изменения значения
}

const MultiSelect: FC = ({ getOptions, onChange }) => {
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
