import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Routes } from '../../models';
import { getLocalStorage } from '../../utilities';

const Secure = () => {
  const navigate = useNavigate();

  // Verify path in localStorage
  useEffect(() => {
    const pathname = getLocalStorage('pathname');

    if (pathname !== null) return navigate(pathname.path);

    navigate(`/${Routes.SECURE}/${Routes.HOME}`);
  }, []);

  return <Outlet />;
};

export default Secure;
