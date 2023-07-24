import { FC, useState, useEffect } from 'react';
import Select, { StylesConfig, components } from 'react-select';

export interface IOption {
  value: string | null;
  label: string | null;
}

interface IMultiSelect {
  options: IOption[];
}

const MultiSelect: FC<IMultiSelect> = ({ options }) => {
  // const [totalCount, setTotalCount] = useState<number>(0);

  // const handleSelectChange = (selectedOptions: IOption[]) => {
  //   console.log(selectedOptions);
  //   setTotalCount(selectedOptions.length);
  // };

  // const styles: StylesConfig = {
  //   control: (styles, { isFocused }) => ({
  //     ...styles,
  //     // padding: '8px 12px',
  //     display: 'flex',
  //     justifyContent: 'end',
  //     color: '#FFF',
  //     width: '364px',
  //     height: '40px',
  //     boxShadow: 'none',
  //     borderWidth: '0.5px',
  //     borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
  //     //whiteSpace: 'nowrap',
  //     // flexWrap: 'nowrap',
  //     position: 'relative',
  //     '&:hover': {
  //       borderWidth: '0.5px',
  //       borderColor: '#D1D1D1',
  //     },
  //     '&:active': {
  //       borderWidth: '0.5px',
  //       borderColor: '#D1D1D1',
  //     },
  //     '@media screen and (max-width: 1000px)': {
  //       width: '351px',
  //     },
  //   }),
  //   valueContainer: (styles) => ({
  //     ...styles,
  //     padding: '0',
  //     height: '24px',
  //     width: '212px',
  //     position: 'absolute',
  //     top: '8px',
  //     left: '12px',
  //     color: '#E4163A',
  //     whiteSpace: 'nowrap',
  //     flexWrap: 'nowrap',
  //     overflow: 'visible',
  //   }),
  //   multiValueLabel: (styles) => ({
  //     ...styles,
  //     color: '#FFF',
  //     fontFamily: 'Avenir',
  //     fontSize: '14px',
  //   }),
  //   multiValue: (styles, { isFocused }) => ({
  //     ...styles,
  //     marginTop: '0',
  //     padding: '0',
  //     alignItems: 'center',
  //     height: '24px',
  //     zIndex: '2',
  //     background: '#E4163A',
  //     borderRadius: '4px',
  //     div: totalCount > 2 && {
  //       ':last-child': {
  //         position: 'relative',
  //         '::after': {
  //           textAlign: 'center',
  //           color: '#fff',
  //           background: '#E4163A',
  //           position: 'absolute',
  //           right: '-23px',
  //           top: '-1px',
  //           content: '"..."',
  //           width: '20px',
  //           height: '24px',
  //           borderRadius: '4px',
  //         },
  //       },
  //     },
  //     // transform: 'translate(12px,-4px)',
  //   }),
  //   multiValueRemove: (styles) => ({
  //     ...styles,
  //     width: '22px',
  //     height: '22px',
  //     svg: {
  //       display: 'none',
  //     },
  //   }),
  //   indicatorsContainer: (styles) => ({
  //     ...styles,
  //     ':first-child': {
  //       display: 'none',
  //     },
  //   }),
  // };
  const [selectedOptions, setSelectedOptions] = useState([]);

  const maxVisible = 2; // Максимальное количество видимых элементов

  //@ts-ignore
  const handleSelectChange = (selectedOptions) => {
    setSelectedOptions(selectedOptions);
  };

  // Функция для добавления скрытых элементов обратно в список выбранных элементов
  //@ts-ignore
  const handleRemoveOption = (removedOption) => {
    //@ts-ignore
    const newSelected = selectedOptions.filter((option) => option.value !== removedOption.value);
    setSelectedOptions(newSelected);
  };

  return (
    <Select
      //@ts-ignore
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleSelectChange}
      //@ts-ignore
      isOptionSelected={(option) => selectedOptions.some((item) => item.value === option.value)}
      //@ts-ignore
      getOptionLabel={(option) => option.label}
      //@ts-ignore
      getOptionValue={(option) => option.value}
      hideSelectedOptions
      backspaceRemovesValue={false}
      components={{
        MultiValueRemove: (props) => (
          <div {...props.innerProps} onClick={() => handleRemoveOption(props.data)}>
            &times;
          </div>
        ),
      }}
      //@ts-ignore
      formatCreateLabel={(inputValue) => `Add "${inputValue}"`}
      //@ts-ignore
      onCreateOption={(inputValue) => {
        const newOption = { value: inputValue, label: inputValue };
        //@ts-ignore
        setSelectedOptions([...selectedOptions, newOption]);
      }}
      styles={{
        multiValue: (base) => ({
          ...base,
          width: 'auto', // Ограничиваем ширину элемента, чтобы он не переносился на новую строку
          maxWidth: '100px', // Максимальная ширина для каждого элемента
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }),
        multiValueLabel: (base) => ({
          ...base,
          whiteSpace: 'nowrap',
        }),
      }}
    />
  );
};

export default MultiSelect;
