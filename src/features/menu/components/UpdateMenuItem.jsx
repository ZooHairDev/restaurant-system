import { useState } from 'react';

import { useUpdateMenuItem } from '@hooks/menuHooks';

import FormRowVertical from '@components/FormRowVertical';
import Input from '@components/Input';
import Button from '@components/Button';
import Form from '@components/Form';
import ButtonsRow from '@components/ButtonsRow';
import Spinner from '@components/Spinner';

const UpdateMenuItemModal = ({ menuItem, onCloseModal }) => {
  const [name, setName] = useState(menuItem.name);
  const [price, setPrice] = useState(menuItem.price);
  const [description, setDescription] = useState(menuItem.description);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const { handleUpdateMenuItem, isLoading } = useUpdateMenuItem(menuItem.id);

  const handleUpdate = (e) => {
    e.preventDefault();

    handleUpdateMenuItem({
      name,
      price,
      description,
    });

    onCloseModal();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Form onSubmit={handleUpdate} type='modal'>
      <h2>Update Menu Item</h2>
      <FormRowVertical label='Name'>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
        />
      </FormRowVertical>
      <FormRowVertical label='Price'>
        <Input
          type='number'
          placeholder='Price'
          value={price}
          onChange={handlePriceChange}
        />
      </FormRowVertical>
      <FormRowVertical label='Description'>
        <Input
          type='text'
          placeholder='Description'
          value={description}
          onChange={handleDescriptionChange}
        />
      </FormRowVertical>

      <ButtonsRow>
        <Button size='large'>Update</Button>
        <Button
          size='large'
          variation='secondary'
          type='button'
          onClick={onCloseModal}
        >
          Cancel
        </Button>
      </ButtonsRow>
    </Form>
  );
};

export default UpdateMenuItemModal;
