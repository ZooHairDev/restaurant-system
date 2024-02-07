import { Link } from 'react-router-dom';

import MenuItem from '../components/MenuItem';
import { useGetMenuItems } from '@hooks/menuHooks';
import useCart from '@hooks/useCart';

import Spinner from '@components/Spinner';
import ErrorText from '@components/ErrorText';
import Row from '@components/Row';

const Menu = () => {
  const { menuItems, isLoading, error } = useGetMenuItems();

  const { cartItemsCount } = useCart();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <>
      <Row>
        <h1>Menu</h1>
        {cartItemsCount > 0 && (
          <h2>
            <Link to='/cart'>Go to Cart</Link>
          </h2>
        )}
      </Row>
      <ul>
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
