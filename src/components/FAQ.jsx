"use client";

import { useToggle } from "@/hooks/useToggle";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useToggle();

  return (
    <div
      className="my-1 border-t-2 py-10 hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <button className="flex w-full justify-between font-lora-regular text-xl font-medium md:text-3xl">
        {question}
        <span>
          {isOpen ? (
            <MinusIcon
              className={`h-5 w-5 cursor-pointer text-black transition-all duration-300 ease-out`}
            />
          ) : (
            <PlusIcon
              className={`h-5 w-5 cursor-pointer text-black transition-all duration-300 ease-out`}
            />
          )}
        </span>
      </button>

      <div
        className={`${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"} grid transition-all duration-150 ease-in-out`}
      >
        <div className="overflow-hidden">
          <p className="mt-5"> {answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
