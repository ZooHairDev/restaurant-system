import { useGetOrders } from '@hooks/ordersHooks';
import OrderItem from '../components/OrderItem';

const OrdersPage = () => {
  const { orders } = useGetOrders();

  if (orders.length === 0) {
    return <h1>No orders found.</h1>;
  }

  return (
    <>
      <h1>Orders</h1>
      <ul>
        {orders.map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
      </ul>
    </>
  );
};

export default OrdersPage;
