'use client';
import { Routes } from '@/constants/route.constant';
import { DashboardOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Key, useState } from 'react';

const AppMenu = () => {
  const pathName = usePathname();
  const [openKeys, setOpenKeys] = useState<string[]>([`/${pathName.split('/')[1]}`]);

  const onOpenChanged = (keys: Key[]) => {
    const latestOpenKeys = keys.find((key) => openKeys.indexOf(key.toString()) === -1);
    setOpenKeys(latestOpenKeys ? [latestOpenKeys.toString()] : []);
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChanged}
      selectedKeys={[pathName]}
      items={[
        {
          label: <Link href={Routes.ADMIN_DASHBOARD}>Dashboard</Link>,
          icon: <DashboardOutlined />,
          key: 'Dashboard',
        },
      ]}
    />
  );
};

export default AppMenu;
