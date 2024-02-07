import { useState, useEffect } from 'react';
import {
  getAllOrders,
  getOrderById,
  getOrdersByUserId,
  createOrder,
  updateOrderStatus,
} from '@services/ordersServices';

export const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getAllOrders();
      setOrders(orders);
      setIsLoading(false);
    };

    fetchOrders();
  }, []);

  return {
    orders,
    isLoading,
  };
};

export const useCreateOrder = () => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateOrder = async (userId, items) => {
    setIsLoading(true);
    try {
      const newOrder = await createOrder(userId, items);
      setOrder(newOrder);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    order,
    isLoading,
    error,
    handleCreateOrder,
  };
};

export const useGetOrderById = (id) => {
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      const order = await getOrderById(id);
      setOrder(order);
      setIsLoading(false);
    };

    fetchOrder();
  }, [id]);

  return { order, isLoading };
};

export const useGetOrdersByUserId = (userId) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrdersByUserId(userId);
      setOrders(orders);
    };

    fetchOrders();
  }, [userId]);

  return orders;
};

export const useUpdateOrderStatus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    setIsLoading(true);
    try {
      const updatedOrder = await updateOrderStatus(orderId, newStatus);
      console.log({ updatedOrder });
      setOrder(updatedOrder);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    handleUpdateOrderStatus,
    order,
  };
};
