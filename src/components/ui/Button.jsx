'use client';
import { cn } from '@/helpers/cn';
import { useFormStatus } from 'react-dom';

const Button = ({ className, handleClick, children, type }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className={cn(`bg-darkGreen rounded-lg text-white disabled:opacity-50 `, className)}
      type={type}
    >
      {pending ? (
        <div
          class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
