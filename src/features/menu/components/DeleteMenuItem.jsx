import styled from 'styled-components';
import Button from '@components/Button';

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const DeleteItemModal = ({ onConfirm, onCloseModal }) => {
  const handleDelete = () => {
    onConfirm();
    onCloseModal();
  };

  return (
    <StyledConfirmDelete>
      <h2>Confirmation</h2>
      <p>Are you sure you want to delete this item?</p>
      <div>
        <Button variation='secondary' onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation='danger' onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
};

export default DeleteItemModal;
