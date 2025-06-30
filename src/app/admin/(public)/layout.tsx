'use client';
import { useAppSelector } from '@/store/hooks';
import { getIsLoggedIn } from '@/store/reducers/auth.reducer';
import { Layout, Spin } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { ReactNode } from 'react';

function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  if (isLoggedIn) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <Layout className="h-screen">
      <Content className="bg-gray-100 flex items-center justify-center">{children}</Content>
    </Layout>
  );
}

export default RootLayout;
