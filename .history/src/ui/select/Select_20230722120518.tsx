import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks/reduxHooks';
import { selectPositions } from '../../modules/positions/positionsSelector';
import AsyncSelect from 'react-select/async';
import { getPositions } from '../../modules/positions/positionsThunk';

const Select: FC = () => {
  const selectedValue = useAppSelector(selectPositions);
  const dispatch = useAppDispatch();

  const loadOptions = (inputValue: string, callback: (options: any) => void) => {
    // Your code to fetch the options asynchronously based on the inputValue
    // For example, you can make an API call and get the options based on the user's input.
    // Once you have the options, call the `callback` function with the options.
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      // Add more options as needed
    ];
    callback(options);
  };

  const handleChange = () => {
    dispatch(getPositions());
  };

  return (
    <AsyncSelect
      cacheOptions
      defaultOptions
      loadOptions={loadOptions}
      value={selectedValue}
      onChange={handleChange}
    />
  );
};

export default Select;
