import { useState, useEffect } from 'react';

const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userType = localStorage.getItem('userType');

    setIsAuthenticated(userType === 'admin');
    setIsLoading(false);
  }, []);

  return { isAuthenticated, isLoading };
};

export default useAuthentication;
