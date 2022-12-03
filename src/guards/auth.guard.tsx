import { Navigate, Outlet } from 'react-router-dom';

import { Routes } from '../models';
import { getLocalStorage } from '../utilities';

const AuthGuard = () => {
  return getLocalStorage('user')?.user ? (
    <Outlet />
  ) : (
    <Navigate replace to={Routes.LOGIN} />
  );
};

export default AuthGuard;
