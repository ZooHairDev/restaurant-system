import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import {
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
  createMenuItem,
} from '@services/menuServices';

export const useGetMenuItems = () => {
  const {
    data: menuItems,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ['menuItems'],
    queryFn: getMenuItems,
  });

  return { menuItems, isLoading, error };
};

export const useCreateMenuItem = () => {
  const queryClient = useQueryClient();
  const { mutate: handleCreateMenuItem, isPending: isLoading } = useMutation({
    mutationFn: createMenuItem,
    onSuccess: () => {
      toast.success('Item added successfully.');
      queryClient.invalidateQueries('menuItems');
    },
    onError: () => {
      toast.error('Could not add the item.');
    },
  });

  return { isLoading, handleCreateMenuItem };
};

export const useUpdateMenuItem = (id) => {
  const queryClient = useQueryClient();

  const { mutate: handleUpdateMenuItem, isPending: isLoading } = useMutation({
    mutationFn: (updates) => updateMenuItem(id, updates),
    onSuccess: () => {
      toast.success('Item updated successfully.');
      queryClient.invalidateQueries('menuItems');
    },
    onError: () => {
      toast.error('Could not update the item.');
    },
  });

  return { isLoading, handleUpdateMenuItem };
};

export const useDeleteMenuItem = (id) => {
  const queryClient = useQueryClient();

  const { mutate: handleDeleteMenuItem, isPending: isLoading } = useMutation({
    mutationFn: () => deleteMenuItem(id),
    onSuccess: () => {
      toast.success('Item deleted successfully.');
      queryClient.invalidateQueries('menuItems');
    },
    onError: () => {
      toast.error("Couldn't delete the item because it is in an order.");
    },
  });

  return { isLoading, handleDeleteMenuItem };
};
