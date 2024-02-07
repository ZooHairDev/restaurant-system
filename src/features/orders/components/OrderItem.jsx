import { useNavigate } from 'react-router-dom';
import { formatDate } from '@utils/helpers';

const OrderItem = ({ order }) => {
  const navigate = useNavigate();

  return (
    <li key={order.id} onClick={() => navigate(`/orders/${order.id}`)}>
      <p>Order ID: {order.id}</p>
      <p>Date: {formatDate(order.created_at)}</p>
      <p>Total: {order.total}</p>
    </li>
  );
};

export default OrderItem;
