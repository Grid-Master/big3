import { FC, useState } from 'react';
import Select, { StylesConfig, components } from 'react-select';

export interface IOption {
  id: number;
  value: string | null;
  label: string | null;
}

interface IMultiSelect {
  options: IOption[];
  setTeamIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const MultiSelect: FC<IMultiSelect> = ({ options, setTeamIds }) => {
  const [totalCount, setTotalCount] = useState<number>(0);
  const [names, setNames] = useState<string[]>([]);
  const [value, setValue] = useState<IOption[]>([]);

  const handleSelectChange = (selectedOptions: IOption[]) => {
    console.log(selectedOptions);
    // if (selectedOptions) {
    //   const optionNames = selectedOptions.map((option) => (option.value ? option.value : ''));
    //   setNames(optionNames);
    // } else {
    //   setNames([]);
    // }
    setTeamIds(selectedOptions.map((option) => option.id));

    setTotalCount(selectedOptions.length);
    setValue(selectedOptions);
  };
  // console.log(names);

  const styles: StylesConfig = {
    control: (styles, { isFocused, menuIsOpen }) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'end',
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: '#D1D1D1',
      background: totalCount ? '#D1D1D1' : '#fff',
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
      position: 'relative',
      padding: '0',
      width: '22px',
      height: '22px',
      cursor: 'pointer',
      svg: {
        position: 'absolute',
        color: '#fff',
        right: '4px',
        // display: 'none',
      },
      ':hover': {
        backgroundColor: 'inherit',
      },
    }),
    indicatorsContainer: (styles) => ({
      ...styles,
      color: '#D1D1D1',
      ':first-child': {
        display: 'none',
      },
      div: {
        cursor: 'pointer',
        color: totalCount ? '#fff' : '#D1D1D1 !important',
        // ':hover': {
        //   color: '#D1D1D1',
        // },
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
    menu: (styles) => ({
      ...styles,
      width: '364px',
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
