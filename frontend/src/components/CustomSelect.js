import React from 'react';
import Select from "react-select";

const colourStyles = {
  control: (styles, { isFocused }) => {
    return {
      ...styles,
      backgroundColor: 'white',
      borderColor: isFocused ? '#4839eb' : '#d9d9d9',

      ':active': {
        ...styles[':active'],
      },
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? '#4839eb' : null,
      borderRadius: 3,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? 'white'
          : null,
      cursor: isDisabled ? 'not-allowed' : 'default',
      textAlign: 'left',

      ':active': {
        ...styles[':active'],
      },
    };
  },
  multiValue: (styles, { data }) => {
    const color = data.color;
    return {
      ...styles,
      backgroundColor: color,
      border: '1px solid #4839eb',
      color: '#4839eb',
      padding: 1,
      borderRadius: 3
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color,
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    cursor: 'pointer',
    ':hover': {
      backgroundColor: data.color,
    },
  }),
};

const CustomSelect = (props) => {

  const handleChange = (event) => {
    props.onChange(event);
  };

  const formatValue = (data) => {
    if (Array.isArray(data) && props.isMulti) {
      let result = [];
      for (let option of props.options) {
        if (data.includes(option.value) || containsObject(data, option.value)) {
          result.push(option);
        }
      }
      return result;
    } else {
      for (let option of props.options) {
        if (option.value === data)
          return option;
        if (data && (data.value === option.value || data.id === option.value))
          return option;
      }
    }
  };

  const containsObject = (array, value) => {
    for (let item of array) {
      if (item.value === value ||item.id === value || item.name === value)
        return true;
    }
    return false;
  };

  return (
    <Select
      {...props}
      className="React"
      classNamePrefix="select"
      styles={colourStyles}
      defaultValue={formatValue(props.defaultValue)}
      options={props.options}
      onChange={handleChange}
      isClearable={false}
    />
  );
};

export default CustomSelect;
