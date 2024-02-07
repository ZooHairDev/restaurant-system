import useCart from '@hooks/useCart';
import UpdateItemQuantity from './UpdateItemQuantity';
import Button from '@components/Button';

import Item from '@components/Item';
import Row from '@components/Row';
import ButtonsRow from '@components/ButtonsRow';

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useCart();

  const handleRemove = () => {
    removeItemFromCart(item.id);
  };

  return (
    <Item>
      <h3>{item.name}</h3>
      <Row>
        <h4>
          {item.price} &times; {item.quantity} = ${item.price * item.quantity}
        </h4>
      </Row>
      <ButtonsRow>
        <UpdateItemQuantity itemId={item.id} />
        <Button variation='danger' onClick={handleRemove}>
          Remove
        </Button>
      </ButtonsRow>
    </Item>
  );
};

export default CartItem;
