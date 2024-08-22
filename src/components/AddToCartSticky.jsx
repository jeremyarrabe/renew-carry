"use client";

import { useDetectSticky } from "@/hooks/useDetectSticky";

const AddToCartSticky = () => {
  const [isSticky, ref, setIsSticky] = useDetectSticky();

  return (
    <div
      className={`container sticky ${isSticky ? "shadow-inner" : ""} -bottom-[1px] flex bg-backgroundColor py-3`}
      ref={ref}
    >
      <button className="btn-hovered w-full rounded-md bg-primary py-4 text-sm uppercase text-white">
        Add to Bag
      </button>
    </div>
  );
};

export default AddToCartSticky;
