import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Login from './features/auth/pages/Login';
import SignUp from './features/auth/pages/SignUp';

import Menu from '@features/menu/pages/Menu';

import Order from '@features/orders/pages/Order';
import Orders from '@features/orders/pages/Orders';
import AdminOrders from '@features/orders/pages/AdminOrders';

import NotFoundPage from '@pages/NotFound';
import PrivateRoute from '@components/PrivateRoute';
import AdminMenu from '@features/menu/pages/AdminMenu';

import Cart from '@features/cart/pages/Cart';

import { CartProvider } from '@context/CartContext';

import GlobalStyles from '@styles/GlobalStyles';
import Layout from '@components/Layout';
import AuthLayout from '@components/AuthLayout';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route element={<AuthLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
            </Route>

            <Route element={<Layout />}>
              <Route path='/menu' element={<Menu />} />
              <Route path='/admin-menu' element={<PrivateRoute />}>
                <Route path='/admin-menu' element={<AdminMenu />} />
              </Route>

              <Route path='/admin-orders' element={<PrivateRoute />}>
                <Route path='/admin-orders' element={<AdminOrders />} />
                <Route path='/admin-orders/:id' element={<Order />} />
              </Route>

              <Route path='/orders' element={<Orders />} />
              <Route path='/orders/:id' element={<Order />} />

              <Route path='/cart' element={<Cart />} />

              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>

        <Toaster
          position='top-center'
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '500px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-grey-0)',
              color: 'var(--color-grey-700)',
            },
          }}
        />
      </CartProvider>
    </QueryClientProvider>
  );
};

export default App;
