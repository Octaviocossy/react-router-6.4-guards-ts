import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { Layout } from '../ui';
import { Roles, Routes } from '../models';
import { AuthGuard } from '../guards';
import { Dashboard, DashboardAdm, Home, Login, Secure } from '../pages';
import RoleGuard from '../guards/role.guard';

const router = createBrowserRouter([
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: '/',
    element: <Navigate to={Routes.SECURE} />,
  },
  {
    path: '/*',
    element: <p>{'404 =('}</p>,
  },
  {
    element: <AuthGuard />,
    children: [
      {
        path: `${Routes.SECURE}/*`,
        element: <Secure />,
        children: [
          {
            element: <Layout />,
            children: [
              { path: Routes.HOME, element: <Home /> },
              {
                element: <RoleGuard rol={Roles.USER} />,
                children: [{ path: Routes.DASHBOARD, element: <Dashboard /> }],
              },
              {
                element: <RoleGuard rol={Roles.ADMIN} />,
                children: [
                  { path: Routes.DASHBOARDADM, element: <DashboardAdm /> },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
] as RouteObject[]);

export default router;
