import { useNavigate } from 'react-router-dom';

import { login, signOut, signUp } from '../services/authServices';

import { setLocalStorage, clearLocalStorage } from '@utils/helpers';

export const useAuth = () => {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    const user = await login(email, password);

    setLocalStorage(user);

    if (user.user_metadata?.role === 'user') return navigate('/menu');

    navigate('/admin-menu');
  };

  const handleLogout = async () => {
    await signOut();

    clearLocalStorage();

    navigate('/login');
  };

  const handleSignUp = async (email, password) => {
    const user = await signUp(email, password);

    setLocalStorage(user);

    navigate('/menu');
  };

  return {
    handleLogin,
    handleLogout,
    handleSignUp,
  };
};
