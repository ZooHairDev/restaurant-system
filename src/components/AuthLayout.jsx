import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const AuthContainer = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-200);
`;

const AuthLayout = () => {
  return (
    <AuthContainer>
      <Outlet />
    </AuthContainer>
  );
};

export default AuthLayout;
