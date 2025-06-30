'use client';
import AntdMessageWrapper from '@/components/common/AntdMessageWrapper';
import { useClient } from '@/hooks/common/useClient';
import AntdConfigProvider from '@/providers/AntdConfigProvider';
import AuthProvider from '@/providers/AuthProvider';
import QueryProvider from '@/providers/QueryProvider';
import StoreProvider from '@/providers/StoreProvider';
import '@ant-design/v5-patch-for-react-19';
import { App } from 'antd';
import { Gentium_Plus } from 'next/font/google';
import './globals.css';

const gentiumPlus = Gentium_Plus({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isClient = useClient();

  return (
    <html lang="en" className={gentiumPlus.className}>
      <title>Phú Tùng & Quỳnh Anh wedding</title>
      <body>
        <StoreProvider>
          <AuthProvider>
            <App>
              <AntdMessageWrapper />
              <AntdConfigProvider>
                <QueryProvider>{isClient ? children : null}</QueryProvider>
              </AntdConfigProvider>
            </App>
          </AuthProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
