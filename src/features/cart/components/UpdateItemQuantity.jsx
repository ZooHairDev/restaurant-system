import Button from '@components/Button';
import useCart from '@hooks/useCart';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  & span {
    font-size: 1.6rem;
  }
`;

const UpdateButton = styled(Button)`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpdateItemQuantity = ({ itemId }) => {
  const { increaseItemQuantity, decreaseItemQuantity, getCurrentQuantity } =
    useCart();

  const handleIncrease = () => {
    increaseItemQuantity(itemId);
  };

  const handleDecrease = () => {
    decreaseItemQuantity(itemId);
  };

  const itemQuantity = getCurrentQuantity(itemId);

  return (
    <Container>
      <UpdateButton onClick={handleDecrease}>&ndash;</UpdateButton>
      <span>{itemQuantity}</span>
      <UpdateButton onClick={handleIncrease}>&#xff0b;</UpdateButton>
    </Container>
  );
};

export default UpdateItemQuantity;
