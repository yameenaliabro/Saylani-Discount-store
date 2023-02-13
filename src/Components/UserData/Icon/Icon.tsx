import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import UserData from '../UserHome/UserData';
import UserCart from '../UserCart/UserCart';
import UserAccount from '../UserAccount/UseeAccount';

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `User`,
    children: <UserData/>
  },
  {
    key: '2',
    label: `Addtocart`,
    children: <UserCart/>
  },
  {
    key: '3',
    label: `UserAccount`,
    children: <UserAccount/>
  },
];
const Tab: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default Tab;