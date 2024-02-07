import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Container = styled.div`
  max-width: 120rem;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 3.2rem;
`;

const Layout = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default Layout;
