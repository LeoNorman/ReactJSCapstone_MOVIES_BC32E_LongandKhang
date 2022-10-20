
import { Radio, Space, Tabs } from 'antd';
import React, { useState } from 'react';

export default function HomeMenu(props) {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
      setTabPosition(e.target.value);
    };
    return (
      //dùng thư viện antd, gõ từ khá Tabs
      <>
        <Tabs
          tabPosition={tabPosition}
          items={new Array(3).fill(null).map((_, i) => {
            const id = String(i + 1);
            return {
              label: <img src="https://picsum.photos/200" className='rouded-full' width={50} alt={`${id}`}/>,
              key: id,
              children: `Content of Tab ${id}`,
            };
          })}
        />
      </>
    );
}
