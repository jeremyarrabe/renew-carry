'use client';
import { useToggle } from '@/hooks/useToggle';
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline';

const Filter = () => {
  const { toggle, visible } = useToggle();

  return (
    <>
      {visible ? (
        <div className="fixed top-0 left-0 h-screen w-screen bg-yellowishGray p-6 flex flex-col z-30">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl">Filter</h2>

            <button onClick={() => toggle()}>
              <XMarkIcon className="h-5 w-5 cursor-pointer " />
            </button>
          </div>

          <div className="py-6 border-b-2 border-black">
            <p>Sort By</p>
            <form className="mt-6 px-3">
              <div className="mt-2">
                <input type="radio" id="newest" name="filter" value="newest" />
                <label htmlFor="newest">Newest</label>
              </div>
              <div className="mt-2">
                <input type="radio" id="high-low" name="filter" value="high-low" />
                <label htmlFor="high-low">Price: High-Low</label>
              </div>
              <div className="mt-2">
                <input type="radio" id="low-high" name="filter" value="low-high" />
                <label htmlFor="low-high">Price: Low-High</label>
              </div>
            </form>
          </div>
          <button className="bg-darkGreen  py-4 mt-2 font-bold text-white rounded-lg">Apply</button>
        </div>
      ) : (
        <button
          className=" flex flex-row items-center gap-2 rounded-full bg-darkGreen px-4 py-2 text-white"
          onClick={() => toggle()}
        >
          Filter <FunnelIcon className="h-5 w-5 cursor-pointer " />
        </button>
      )}
    </>
  );
};

export default Filter;
