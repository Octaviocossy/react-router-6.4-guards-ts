import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Roles, Routes } from '../models';
import { getLocalStorage, persistLocalStorage } from '../utilities';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getLocalStorage('user')?.user) navigate(`/${Routes.SECURE}`);
  }, []);

  return (
    <button
      onClick={() => {
        persistLocalStorage('user', { user: 'ovct', rol: Roles.USER });
        navigate(`/${Routes.SECURE}`);
      }}
    >
      Login
    </button>
  );
};

export default Login;
