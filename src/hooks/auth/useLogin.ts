import { notification } from '@/components/common/AntdMessageWrapper';
import { LocalStorageKey } from '@/constants/local-storage.constant';
import { Routes } from '@/constants/route.constant';
import { login } from '@/services/auth';
import { useAppDispatch } from '@/store/hooks';
import { setIsLoggedIn, setLoginUser } from '@/store/reducers/auth.reducer';
import storage from '@/utils/local-storage';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      const token = response?.data?.token;
      const user = response?.data?.user;

      if (token && user) {
        storage.set(LocalStorageKey.AUTH, JSON.stringify(token));
        storage.set(LocalStorageKey.USER, JSON.stringify(user));
        dispatch(setLoginUser(user));
        dispatch(setIsLoggedIn(true));
        router.push(Routes.ADMIN_DASHBOARD);
      } else {
        notification.error({
          message: 'Login failed',
        });
      }
    },
    onError: () => {
      notification.error({
        message: 'Login failed',
        description: 'Invalid username or password',
      });
    },
  });
};
