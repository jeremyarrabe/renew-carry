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
      {children}
    </button>
  );
};

export default Button;
