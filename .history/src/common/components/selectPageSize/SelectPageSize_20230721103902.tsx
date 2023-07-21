import { FC, useEffect } from 'react';
import Select, { StylesConfig } from 'react-select';

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

const styles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    width: '88px',
    height: '40px',
    textAlign: 'center',
    color: '#303030',
    backgroundColor: '#FFF',
    borderColor: isFocused ? '#D1D1D1' : '#D1D1D1',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#D1D1D1',
    },
    '&:active': {
      borderColor: '#D1D1D1',
    },
    '@media screen and (max-width: 1000px)': {
      width: '60px',
    },
  }),
  indicatorsContainer: (styles) => ({
    ...styles,
    '@media screen and (max-width: 1000px)': {
      // padding: '6px 4px',
      width: '16px',
      height: '16px',
      position: 'relative',
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    '@media screen and (max-width: 1000px)': {
      position: 'absolute',
      top: '0',
      right: '24px',
      width: '1px',
      height: '24px',
    },
  }),
  valueContainer: (styles) => ({
    ...styles,
    '@media screen and (max-width: 1000px)': {
      padding: '2px 0',
      width: '36px',
    },
  }),
  input: (styles) => ({
    ...styles,
    '@media screen and (max-width: 1000px)': {
      padding: '0',
      margin: '0',
      width: '36px',
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    '@media screen and (max-width: 1000px)': {
      padding: '0',
      margin: '0',
      width: '36px',
    },
  }),
  option: (styles, { isFocused }) => ({
    ...styles,
    width: '88px',
    height: '40px',
    paddingLeft: '20px',
    color: isFocused ? '#fff' : '#9C9C9C',
    backgroundColor: isFocused ? '#C60E2E' : '#FFF',
    borderBottom: '1px solid #D1D1D1',
    transform: 'translateY(-4px)',
    '&:hover': { backgroundColor: '#FF768E', color: '#FFF' },
    '&:last-child': { borderBottom: 'none', borderRadius: '0 0 4px 4px' },
    '&:first-child': { marginTop: '0', borderRadius: '4px 4px 0 0' },
    '@media screen and (max-width: 1000px)': {
      width: '60px',
      height: '36px',
      paddingLeft: '14px',
    },
  }),
  menu: (styles) => ({
    ...styles,
    height: '120px',
    '@media screen and (max-width: 1000px)': {
      height: '108px',
    },
  }),
};

const SelectPageSize: FC<ISelectedSize> = ({ setSelectedSize }) => {
  const handleSelectChange = (selectedOption: IOptions) => {
    setSelectedSize(selectedOption.value);
  };

  useEffect(() => {
    handleSelectChange({ value: 6, label: 6 });
  }, []);

  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="top"
      defaultValue={options[0]}
      //@ts-ignore
      onChange={handleSelectChange}
    />
  );
};

export default SelectPageSize;
