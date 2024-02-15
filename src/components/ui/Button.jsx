'use client';
import { cn } from '@/helpers/cn';
import Link from 'next/link';

const Button = ({ className, link, handleClick, children }) => {
  if (link) {
    return (
      <Link
        href={link}
        className={cn(
          'flex items-center bg-darkGreen px-4 py-2 rounded-full text-white gap-2',
          className,
        )}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={cn(
          'flex items-center bg-darkGreen px-4 py-2 rounded-full text-white gap-2',
          className,
        )}
        onClick={() => handleClick()}
      >
        {children}
      </button>
    );
  }
};

export default Button;
