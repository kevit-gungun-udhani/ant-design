import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import { Button, ConfigProvider, Layout, Menu, theme } from 'antd';
import useToken from 'antd/es/theme/useToken';
import React, { useState } from 'react';

const { Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: 'Prescription'
    };
  }
);
export const SiteSider = () => {
  const [collapsed, setCollapsed] = useState(true);
  
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: { darkItemHoverBg: '#000000' },
        },
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items2}
        />
      </Sider>
    </ConfigProvider>
  );
};
