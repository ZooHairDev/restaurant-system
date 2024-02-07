import { useGetMenuItems } from '@hooks/menuHooks';

import AdminMenuItem from '../components/AdminMenuItem';
import AddMenuItem from '../components/AddMenuItem';

import Button from '@components/Button';
import Spinner from '@components/Spinner';
import Row from '@components/Row';
import Modal from '@components/Modal';
import ErrorText from '@components/ErrorText';

const AdminMenu = () => {
  const { menuItems, isLoading, error } = useGetMenuItems();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorText>{error}</ErrorText>;
  }

  return (
    <Modal>
      <Row>
        <h1>Menu</h1>
        <Modal.Open opens='add'>
          <Button>Add New Item</Button>
        </Modal.Open>
      </Row>
      <ul>
        {menuItems.map((item) => (
          <AdminMenuItem key={item.id} item={item} />
        ))}
      </ul>
      <Modal.Window name='add'>
        <AddMenuItem />
      </Modal.Window>
    </Modal>
  );
};

export default AdminMenu;
