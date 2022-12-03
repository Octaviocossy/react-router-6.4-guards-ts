import { Navigate, Outlet } from 'react-router-dom';

import { Roles, Routes } from '../models';
import { getLocalStorage } from '../utilities';

interface Props {
  rol: Roles;
}

const RoleGuard = ({ rol }: Props) => {
  return getLocalStorage('user')?.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate replace to={Routes.HOME} />
  );
};

export default RoleGuard;
