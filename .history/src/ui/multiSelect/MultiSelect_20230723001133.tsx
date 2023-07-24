import { FC, useState } from 'react';
import Select, { StylesConfig, components } from 'react-select';

export interface IOption {
  value: string | null;
  label: string | null;
}

interface IMultiSelect {
  options: IOption[];
}

// const MultiValueRemove: FC<any> = (props) => {
//   return (
//     <components.MultiValueRemove {...props}>
//       {/* Ваш кастомный крестик для удаления */}
//       <span
//         style={{ cursor: 'pointer', background: '../../assets/images/close.png' }}
//         onClick={(e) => {
//           props.removeProps.onClick();
//           // Добавьте свою логику обработки удаления элемента здесь
//         }}>
//         &#10005;
//       </span>
//     </components.MultiValueRemove>
//   );
// };

const MultiSelect: FC<IMultiSelect> = ({ options }) => {
  const handleSelectChange = (selectedOption: IOption) => {
    console.log(selectedOption);
  };

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
      whiteSpace: 'nowrap',
      position: 'relative',
      '&:hover': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
      },
      '&:active': {
        borderWidth: '0.5px',
        borderColor: '#D1D1D1',
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
      div: {
        ':last-child': {
          position: 'relative',
          '::after': {
            textAlign: 'center',
            color: '#fff',
            background: '#E4163A',
            position: 'absolute',
            right: '-30px',
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
  };

  return (
    <Select
      styles={styles}
      options={options}
      menuPlacement="bottom"
      isMulti
      // @ts-ignore
      onChange={handleSelectChange}
      // components={{ MultiValueRemove }}
    />
  );
};

export default MultiSelect;
