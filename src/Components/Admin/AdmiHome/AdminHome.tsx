import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import AdminCard from '../AdmiCard/AdminCard';
import NewProduct from '../AdminNewProduct/AdminNewProduct';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps['items'] = [
  {
    key: '1',
    label: <UserOutlined/>,
    children: <AdminCard />,
  },
  {
    label:"Additems",
    key: '2',
    children: <NewProduct/>,
  },
];

const SideNav: React.FC = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

export default SideNav;