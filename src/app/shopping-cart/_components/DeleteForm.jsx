import { TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { deleteItem } from '../_actions';

const DeleteForm = ({ userId, productId }) => {
  return (
    <form action={deleteItem}>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="productId" value={productId} />
      <button type="submit">
        <TrashIcon className="h-6 w-6 " />
      </button>
    </form>
  );
};

export default DeleteForm;
