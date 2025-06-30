import { PRIVATE_ROUTES, PUBLIC_ROUTES, Routes } from '@/constants/route.constant';
import { useAppSelector } from '@/store/hooks';
import { getIsLoggedIn } from '@/store/reducers/auth.reducer';
import { usePathname, useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

function AuthProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathName = usePathname();
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  useEffect(() => {
    if (pathName.startsWith('/admin')) {
      if (isLoggedIn && PUBLIC_ROUTES.some((route) => pathName.startsWith(route))) {
        router.push(Routes.ADMIN_DASHBOARD);
      } else if (!isLoggedIn && PRIVATE_ROUTES.some((route) => pathName.startsWith(route))) {
        router.push(Routes.ADMIN_LOGIN);
      }
      return;
    }
    router.push(Routes.HOME);
  }, [isLoggedIn, pathName, router]);

  return <>{children}</>;
}

export default AuthProvider;
