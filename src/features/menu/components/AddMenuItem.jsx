import { useState } from 'react';

import { useCreateMenuItem } from '@hooks/menuHooks';

import FormRowVertical from '@components/FormRowVertical';
import Input from '@components/Input';
import Button from '@components/Button';
import Form from '@components/Form';
import ButtonsRow from '@components/ButtonsRow';
import Spinner from '@components/Spinner';

const AddMenuItem = ({ onCloseModal }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const { handleCreateMenuItem, isLoading } = useCreateMenuItem();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleCreateMenuItem({ name, price, description });

    onCloseModal();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Form onSubmit={handleSubmit} type='modal'>
      <h2>Add Menu Item</h2>
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
        <Button size='large'>Add</Button>
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

export default AddMenuItem;
