import React, { useEffect ,useState } from 'react';
import { Select, Space } from 'antd';


const DropDown = ({ onChange }) => {
  const products = JSON.parse(localStorage.getItem('products'));
  const options = products?.map(p => p.product_name);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (value) => {
    setSelectedValues(value);
    onChange(value);
  };

  return (
    <div>
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Select
          mode="multiple"
          size="large"
          placeholder="Please select"
          onChange={handleChange}
          style={{
            width: '100%',
          }}
          options={options?.map(option => ({ label: option, value: option }))}
        />
      </Space>
      </div>
  );
};
export default DropDown;