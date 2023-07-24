import { FC, useState } from 'react';
import Select, { StylesConfig, components } from 'react-select';

export interface IOption {
  value: string | null;
  label: string | null;
}

interface IMultiSelect {
  options: IOption[];
}

const MultiSelect: FC<IMultiSelect> = ({ options }) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [names, setNames] = useState<string[]>([]);
  const [value, setValue] = useState<IOption[]>([]);

  const handleSelectChange = (selectedOptions: IOption[]) => {
    console.log(selectedOptions);
    if (selectedOptions) {
      const optionNames = selectedOptions.map((option) => (option.value ? option.value : ''));
      setNames(optionNames);
    } else {
      setNames([]);
    }

    setTotalCount(selectedOptions.length);
    setValue(selectedOptions);
  };
  console.log(names);

  const styles: StylesConfig = {
    control: (styles, { isFocused }) => ({
      ...styles,
      // padding: '8px 12px',
      display: 'flex',
      justifyContent: 'end',
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
      //whiteSpace: 'nowrap',
      // flexWrap: 'nowrap',
      position: 'relative',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
      '@media screen and (max-width: 1000px)': {
        width: '351px',
      },
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: '0',
      height: '24px',
      width: '212px',
      position: 'absolute',
      top: '8px',
      left: '12px',
      color: '#E4163A',
      whiteSpace: 'nowrap',
      flexWrap: 'nowrap',
      overflow: 'visible',
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      color: '#FFF',
      fontFamily: 'Avenir',
      fontSize: '14px',
    }),
    multiValue: (styles, { isFocused }) => ({
      ...styles,
      marginTop: '0',
      padding: '0',
      alignItems: 'center',
      height: '24px',
      zIndex: '2',
      background: '#E4163A',
      borderRadius: '4px',
      div: totalCount > 2 && {
        ':last-child': {
          position: 'relative',
          '::after': {
            textAlign: 'center',
            color: '#fff',
            background: '#E4163A',
            position: 'absolute',
            right: '-23px',
            top: '-1px',
            content: '"..."',
            width: '20px',
            height: '24px',
            borderRadius: '4px',
          },
        },
      },
      // transform: 'translate(12px,-4px)',
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      width: '22px',
      height: '22px',
      svg: {
        display: 'none',
      },
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      ':first-child': {
        display: 'none',
      },
    }),
    placeholder: (styles) => ({
      ...styles,
      position: 'absolute',
      left: '0',
      top: '0',
      color: '#707070',
      fontFamily: 'Avenir',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
    }),
    input: (styles) => ({
      ...styles,
      display: 'grid',
      position: 'absolute',
      top: '-4px',
      left: '0',
    }),
  };

  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="bottom"
      isMulti
      maxValue={2}
      // value={value.slice(0, 2)}
      // @ts-ignore
      onChange={handleSelectChange}
      // components={{ MultiValueRemove }}
      // controlShouldRenderValue={false}
    />
  );
};

export default MultiSelect;
