'use client';
import AppHeader from '@/components/layout/AppHeader';
import AppMenu from '@/components/layout/AppMenu';
import { useAppSelector } from '@/store/hooks';
import { getIsLoggedIn } from '@/store/reducers/auth.reducer';
import { Layout, Spin } from 'antd';
import { ReactElement } from 'react';

type RootLayoutProps = {
  children: ReactElement | ReactElement[];
};

const RootLayout = ({ children }: RootLayoutProps) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  if (!isLoggedIn) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spin />
      </div>
    );
  }

  return (
    <Layout className="h-screen">
      <Layout.Header>
        <AppHeader />
      </Layout.Header>
      <Layout className="flex">
        <Layout.Sider>
          <AppMenu />
        </Layout.Sider>
        <Layout.Content className="p-8 h-[calc(100vh-64px)]">
          <div className="p-8 bg-white rounded h-full overflow-auto content-wrapper">
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default RootLayout;
