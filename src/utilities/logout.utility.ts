import { clearLocalStorage } from './localStorage.utility';

const logout = () => {
  clearLocalStorage('pathname');
  clearLocalStorage('user');
  window.location.reload();
};

export default logout;
