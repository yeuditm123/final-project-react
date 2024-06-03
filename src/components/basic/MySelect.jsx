import React, { useState } from 'react';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';
import '../common/Headers.css';

const { Option } = Select;

const MySelect = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (value) => {
    // Navigate to different pages based on the selected option
    switch (value) {
      case 'addRecipe':
        navigate('/addRecipe');
        break;
      case 'updateRecipe':
        navigate('/updateRecipe');
        break;
      case 'deleteRecipe':
        navigate('/deleteRecipe');
        break;
      default:
        break;
    }
  };

  return (
    <div class='settings'>
      <SettingOutlined className='managerSettingsIcon' onClick={() => setVisible(!visible)} />
      <Select defaultValue='Select an option' style={{ width: 200, visibility: visible ? 'initial' : 'hidden' }} onChange={handleChange}>
        <Option value='addRecipe'>Add new recipe</Option>
        <Option value='updateRecipe'>Update recipe</Option>
        <Option value='deleteRecipe'>Delete recipe</Option>
      </Select>
    </div>
  );
};

export default MySelect;