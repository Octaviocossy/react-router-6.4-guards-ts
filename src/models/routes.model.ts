export const SecureRoutes = {
  HOME: 'home',
  SECURE: 'secure',
  DASHBOARD: 'dashboard',
  DASHBOARDADM: 'dashboardadm',
};

export const PublicRoutes = {
  LOGIN: 'login',
};

export const Routes = { ...SecureRoutes, ...PublicRoutes };
