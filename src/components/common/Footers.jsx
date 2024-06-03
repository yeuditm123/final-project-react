import {
  FacebookOutlined, InstagramOutlined, YoutubeOutlined
} from '@ant-design/icons';
import { Button, Layout, Typography } from 'antd';
import React from 'react';
import './Footers.css';

const { Footer } = Layout;
const { Text } = Typography;

function Footers() {
  const handleYoutubeClick = () => {
    window.open('https://www.youtube.com/channel/UCAoBGRZ-vhFYCX-6nVJBJWQ')
  };
  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/p/C2Kiya2oWz8/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==', '_blank');
  
  };
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/61555796816283/posts/122096349050193227/?substory_index=1539249890194647&app=fbl', '_blank');
  
  };

  return (
    <div className='sticky-footer'>
    <footer className='flex flex-col items-center justify-center'>
      <div className='flex justify-center space-x-4 md:space-x-2 md:order-first'>
        <Button type='dashed' shape='circle' icon={<FacebookOutlined />} size='middle' onClick={handleFacebookClick}/>
        <Button type='dashed' shape='circle' icon={<InstagramOutlined />} size='middle' onClick={handleInstagramClick} />
        <Button type='dashed' shape='circle' icon={<YoutubeOutlined />} size='middle' onClick={handleYoutubeClick} />
      </div>

      <div className='mb-4 md:mb-0'>
        <Text className='md:text-center'>{`All Rights Reserved©️ sweetime ${new Date().getFullYear()} `}</Text>
      </div>
    </footer>
    </div>
  );
}

export default Footers;
