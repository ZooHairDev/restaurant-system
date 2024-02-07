export const setLocalStorage = (user) => {
  localStorage.setItem(
    'userType',
    user.user_metadata?.role === 'user' ? 'user' : 'admin'
  );

  localStorage.setItem('userId', user.id);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const calculateTotal = (items) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return total.toFixed(2);
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US');
};
