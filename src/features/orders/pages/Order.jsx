import Spinner from '@components/Spinner';
import { useGetOrderById } from '@hooks/ordersHooks';
import { calculateTotal } from '@utils/helpers';
import { useParams } from 'react-router-dom';

const Order = () => {
  const { id } = useParams();

  const { order, isLoading } = useGetOrderById(id);

  if (isLoading) {
    return <Spinner />;
  }

  console.log({ order });

  return (
    <div>
      <h1>Order Details</h1>
      <p>Order ID: {order.id}</p>
      <p>Order Status: {order.status}</p>

      <h2>Items:</h2>
      <ul>
        {order.items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal(order.items)}</h3>
    </div>
  );
};

export default Order;
