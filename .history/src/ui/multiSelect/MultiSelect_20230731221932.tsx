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
    setTeamIds(selectedOptions.map((option) => option.id));

    setTotalCount(selectedOptions.length);
    setValue(selectedOptions);
  };

  const styles: StylesConfig = {
    control: (styles) => ({
      ...styles,
      display: 'flex',
      justifyContent: 'end',
      color: '#FFF',
      width: '364px',
      height: '40px',
      boxShadow: 'none',
      borderWidth: '0.5px',
      borderColor: '#D1D1D1',
      background: totalCount ? '#F6F6F6' : '#fff',
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
    multiValue: (styles) => ({
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
        color: totalCount ? '#D1D1D1 !important' : '#D1D1D1 !important',
      },
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      color: totalCount ? '#fff' : '#D1D1D1',
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
      overflow: 'hidden',
      borderRadius: '4px',
      maxHeight: '160px',
      '@media screen and (max-width: 1000px)': {
        width: '351px',
      },
    }),
    menuList: (styles) => ({
      ...styles,
      padding: '0',
      maxHeight: '160px',
      '::-webkit-scrollbar': {
        width: '0',
      },
    }),
    option: (styles) => ({
      ...styles,
      padding: '6px 12px',
      width: '364px',
      color: '#9C9C9C',
      background: '#fff !important',
      fontFamily: 'Avenir',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: '24px',
      ':not(:last-child)': {
        borderBottom: '1px solid #D1D1D1',
      },
      ':hover': {
        color: '#fff',
        background: '#E4163A !important',
      },
    }),
  };

  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="bottom"
      isMulti
      maxValue={2}
      // @ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default MultiSelect;
