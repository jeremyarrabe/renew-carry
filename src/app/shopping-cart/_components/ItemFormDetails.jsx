import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import SelectForm from './SelectForm';

const ItemFormDetails = () => {
  return (
    <div className="flex py-4 gap-5" key={item.product.id}>
      <div className="relative w-1/3 h-20">
        <Image src={item.product.image} alt="" fill className="object-cover " sizes="100%" />
      </div>

      <div className="flex flex-col text-lg">
        <p className="font-medium font-lora-cyrillic">
          {currencyFormat(item.product.price * item.quantity)}
        </p>
        <p className="font-medium font-lora-cyrillic">{item.product.title}</p>
        <p>{item.product.category}</p>
        <SelectForm userId={item.userId} productId={item.productId} defaultValue={item.quantity} />
        <div className="flex mt-4 gap-6">
          <button>
            <HeartIcon className="h-6 w-6" />
          </button>
          <form action={deleteItem}>
            <input type="hidden" name="userId" value={item.userId} />
            <input type="hidden" name="productId" value={item.productId} />
            <button type="submit">
              <TrashIcon className="h-6 w-6 " />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ItemFormDetails;
