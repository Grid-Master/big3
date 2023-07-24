import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPositions } from '../../modules/positions/positionsSelector';
import AsyncSelect from 'react-select/async';
import { getPositions } from '../../modules/positions/positionsThunk';

interface IOptions {
  value: string;
  label: string;
}

const Select: FC = () => {
  const dispatch = useAppDispatch();
  const { positions } = useAppSelector(selectPositions);

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  const loadOptions = (inputValue: string, callback: (options: any) => void) => {
    const filteredOptions = positions.filter((position) =>
      position.toLowerCase().includes(inputValue.toLowerCase()),
    );

    callback(filteredOptions.map((option) => ({ value: option, label: option })));
  };

  const handleChange = (selectedOption: any) => {
    console.log('Выбранная позиция:', selectedOption);
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      onChange={handleChange}
      isMulti={false}
    />
  );
};

export default Select;
