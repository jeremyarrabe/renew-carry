import Image from 'next/image';
import { HeartIcon, TrashIcon } from '@heroicons/react/24/outline';

const ShoppingCart = () => {
  return (
    <div className="flex flex-col px-4">
      <div className="text-center py-10  ">
        <h1 className="text-2xl font-medium font-lora-cyrillic ">Bag</h1>
        <p className="mt-2">4 Items | $150.00</p>
      </div>

      <div className="flex flex-col border">
        <div className="flex py-4 gap-5   ">
          <div className="relative w-1/4 h-20">
            <Image
              src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover "
            />
          </div>

          <div className="flex flex-col text-lg">
            <p className="font-medium font-lora-cyrillic">$150.00</p>
            <p className="font-medium font-lora-cyrillic">Mal Backpack</p>
            <p>Backpacks</p>
            <div className="flex text-base">
              <label htmlForfor="quanitity">Quantity</label>
              <select id="quanitity" name="quanitity" className="px-2 bg-yellowishGray pl-4">
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
        <div className="flex py-4 gap-5   border-t-[1px]">
          <div className="relative w-1/4 h-20">
            <Image
              src="https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              className="object-cover "
            />
          </div>

          <div className="flex flex-col text-lg">
            <p className="font-medium font-lora-cyrillic">$150.00</p>
            <p className="font-medium font-lora-cyrillic">Mal Backpack</p>
            <p>Backpacks</p>
            <div className="flex text-base">
              <label htmlForfor="quanitity">Quantity</label>
              <select id="quanitity" name="quanitity" className="px-2 bg-yellowishGray  pl-4">
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
      <div className="flex flex-col mt-4 font-medium gap-1">
        <h3 className="text-2xl font-medium font-lora-cyrillic">Summary</h3>
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$150.00</p>
        </div>
        <div className="flex justify-between">
          <p>Estimated Delivery & Handling Fee</p>
          <p>$25.00</p>
        </div>
        <div className="flex justify-between mt-2">
          <p>Total</p>
          <p>$175.00</p>
        </div>
        <button className="bg-transparentpy-4 mt-4 text-black border py-4 border-darkGreen rounded-lg">
          Go to Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
