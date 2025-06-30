export const Routes = {
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
  HOME: '/',
};

export const PUBLIC_ROUTES = [Routes.HOME, Routes.ADMIN_LOGIN];

export const PRIVATE_ROUTES = [Routes.ADMIN_DASHBOARD];
