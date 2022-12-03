import { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import { Routes } from '../../models';
import { logout, persistLocalStorage } from '../../utilities';

interface LinkItem {
  url: string;
  name: string;
}

const MenuItems: LinkItem[] = [
  {
    url: `/${Routes.SECURE}/${Routes.HOME}`,
    name: 'Home',
  },
  {
    url: `/${Routes.SECURE}/${Routes.DASHBOARD}`,
    name: 'Dashboard',
  },
  {
    url: `/${Routes.SECURE}/${Routes.DASHBOARDADM}`,
    name: 'DashboardADM',
  },
];

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    persistLocalStorage('pathname', { path: location.pathname });
  }, [location.pathname]);

  return (
    <div>
      <header>
        <ul>
          {MenuItems.map((item, i) => (
            <li key={i}>
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button onClick={logout}>Logout</button>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
