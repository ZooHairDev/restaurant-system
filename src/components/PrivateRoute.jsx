import { Navigate, Outlet } from 'react-router-dom';

import useAuthentication from '@hooks/useAuthentication';
import Spinner from './Spinner';

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuthentication();

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' replace />;
};

export default PrivateRoute;
