import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Option } = AutoComplete;

const AutoCompleteInput = ({ opt }) => {
  const [filteredOptions, setFilteredOptions] = useState([]);
  const url = window.location.href;
  const parts = url.split('/');
  const lastWord = parts.pop();
  const navigate = useNavigate();

  const handleSearch = (value) => {
    // Check if value is a string before applying toLowerCase
    if (typeof value === 'string') {
      setFilteredOptions(
        opt?.filter((item) => item.recipe_name.toLowerCase().includes(value.toLowerCase()))
          .map((item) => ({ value: item?.recipe_id, label: item?.recipe_name })) // Create options with ID and label
      );
    } else {
      console.warn('Invalid search value type. Please enter a string.');
    }
  };

  const handleSelect = (value) => {
    console.log({value});
    console.log({opt});
    const selectedItem = opt.find((item) => item.recipe_name == value); // Find selected item by ID
    localStorage.setItem('currentRecipe', JSON.stringify(selectedItem));
    localStorage.setItem('previewUrl', lastWord);
    navigate('/recipe');
  };

  return (
   
    <AutoComplete
      style={{ width: 300 }}
      placeholder="Type to search"
      dataSource={filteredOptions}
      onChange={handleSearch}
      onSelect={handleSelect}
    >
      {filteredOptions.map((option) => (
        <Option key={option?.value} value={option.label}>
          {option?.label}
        </Option>
      ))}
    </AutoComplete>
  );
};

export default AutoCompleteInput;
