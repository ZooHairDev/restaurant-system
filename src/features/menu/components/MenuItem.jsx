import UpdateItemQuantity from '@features/cart/components/UpdateItemQuantity';
import useCart from '@hooks/useCart';

import Button from '@components/Button';

import styled from 'styled-components';
import Item from '@components/Item';

const StyledMenuItem = styled(Item)`
  & p {
    color: var(--color-grey-500);
  }

  & div > div {
    display: flex;
    gap: 2.4rem;
    align-items: center;
  }
`;

const MenuItem = ({ item }) => {
  const { id, name, price, description } = item;

  const { addItemToCart, isItemInCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(item);
  };

  return (
    <StyledMenuItem>
      <div>
        <div>
          <h3>{name}</h3>
          <h4>{price} $</h4>
        </div>
        <p>{description}</p>
      </div>
      {isItemInCart(id) ? (
        <UpdateItemQuantity itemId={id} />
      ) : (
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      )}
    </StyledMenuItem>
  );
};

export default MenuItem;
