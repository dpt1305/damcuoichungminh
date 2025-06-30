import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';
import { PropsWithChildren } from 'react';

function AntdConfigProvider({ children }: PropsWithChildren) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: 'lightskyblue',
          },
          Button: {
            primaryColor: '#171717',
            primaryShadow: 'none',
            colorPrimary: '#F8F5F0',
            colorPrimaryHover: '#F3F0EA',
            colorPrimaryActive: '#F3F0EA',
          },
        },
        token: {
          fontSize: 20,
          fontFamily: 'Gentium Plus',
          controlHeight: 50,
        },
      }}
      locale={enUS}
    >
      <AntdRegistry layer>{children}</AntdRegistry>
    </ConfigProvider>
  );
}

export default AntdConfigProvider;
