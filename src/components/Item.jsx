import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 1.2rem;
  align-items: center;
  border: 1px solid var(--color-grey-300);
  padding: 1.6rem 2rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  margin-bottom: 1.6rem;
`;

export default Item;
