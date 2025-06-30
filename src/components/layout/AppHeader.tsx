'use client';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getLoginUser, signOut } from '@/store/reducers/auth.reducer';
import { CaretDownOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button, Dropdown } from 'antd';

const AppHeader = () => {
  const dispatch = useAppDispatch();
  const loginUser = useAppSelector(getLoginUser);

  return (
    <div className="justify-end flex items-center">
      <Dropdown
        menu={{
          items: [
            {
              label: 'Log out',
              key: 0,
              icon: <LogoutOutlined />,
              onClick: () => dispatch(signOut()),
            },
          ],
        }}
        trigger={['click']}
      >
        <div className="flex items-center">
          <span className="text-white">{loginUser?.name}</span>
          <Button type="link" icon={<CaretDownOutlined style={{ color: 'white' }} />} />
        </div>
      </Dropdown>
    </div>
  );
};

export default AppHeader;
