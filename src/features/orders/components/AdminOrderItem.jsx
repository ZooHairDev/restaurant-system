import { orderStatus } from '@utils/constants';
import { useUpdateOrderStatus } from '@hooks/ordersHooks';

const AdminOrderItem = ({ order }) => {
  const {
    handleUpdateOrderStatus,
    isLoading: isUpdating,
    order: updatedOrder,
  } = useUpdateOrderStatus();

  if (isUpdating) {
    return <div>Updating...</div>;
  }

  return (
    <div>
      <h2>Order ID: {order.id}</h2>
      <p>total: {order.total} $</p>
      <p>Status: {updatedOrder?.status || order.status}</p>
      <button
        onClick={() => handleUpdateOrderStatus(order.id, orderStatus.preparing)}
      >
        Mark as preparing
      </button>
      <button
        onClick={() => handleUpdateOrderStatus(order.id, orderStatus.shipping)}
      >
        Mark as Shipping
      </button>
      <button
        onClick={() => handleUpdateOrderStatus(order.id, orderStatus.delivered)}
      >
        Mark as Delivered
      </button>
      <button
        onClick={() => handleUpdateOrderStatus(order.id, orderStatus.cancelled)}
      >
        Cancel Order
      </button>
    </div>
  );
};

export default AdminOrderItem;
