import React from 'react';
import { Card, Space } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { useState } from 'react';

function SimpleCard({ title, size, data }) {
  const [isChose, setIsChose] = useState(false);
  return (
    <Space direction='vertical' size={16}>
      <Card
        title={title}
        extra={
          <button
            onClick={() => {
              console.log({ isChose });
              setIsChose(!isChose);
            }}
          >
            {!isChose ? <HeartOutlined /> : <HeartFilled />}
          </button>
        }
        style={{
          width: 300,
        }}
        size={size}
      >
        <p>{data}</p>
        {/* <p>Card content</p>
          <p>Card content</p> */}
      </Card>
    </Space>
  );
}
export default SimpleCard;
