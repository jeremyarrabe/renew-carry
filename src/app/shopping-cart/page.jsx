import Image from 'next/image';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

const ShoppingCart = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10 border-b-[1px] ">
        <h1 className="text-2xl font-medium font-lora-cyrillic ">Bag</h1>
        <p className="mt-2">4 Items | $150.00</p>
      </div>

      <div className="flex flex-col">
        <div className="flex py-4 gap-5  border-b-[1px] ">
          <div className="relative w-1/4 h-20">
            <Image
              src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover "
            />
          </div>

          <div className="flex flex-col text-lg">
            <p className="font-medium">$150.00</p>
            <p className="font-medium">Mal Backpack</p>
            <p>Backpacks</p>
            <div className="flex ">
              <label htmlForfor="quanitity">Quantity</label>
              <select id="quanitity" name="quanitity" className="text-xs px-2 bg-yellowishGray ">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </select>
            </div>
            <div className="flex mt-4 gap-6">
              <button>
                <HeartIcon className="h-6 w-6" />
              </button>
              <button>
                <TrashIcon className="h-6 w-6 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
