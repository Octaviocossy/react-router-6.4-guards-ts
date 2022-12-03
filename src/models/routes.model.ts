import { Roles } from './roles.model';

export const NoRol = {
  HOME: 'home',
  SECURE: 'secure',
};

export const AdminRol = {
  rol: Roles.ADMIN,
  routes: {
    DASHBOARDADM: 'dashboardadm',
    ...NoRol,
  },
};

export const UserRol = {
  rol: Roles.USER,
  routes: {
    DASHBOARD: 'dashboard',
    ...NoRol,
  },
};

export const SecureRoutes = {
  ...AdminRol.routes,
  ...UserRol.routes,
  ...NoRol,
};

export const PublicRoutes = {
  LOGIN: 'login',
};

export const Routes = { ...SecureRoutes, ...PublicRoutes };
