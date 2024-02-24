'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavCategory = ({ category }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${
        pathname === `/products/${category.split(' ').join('')}`
          ? ' /products'
          : `/products/${category.split(' ').join('')}`
      }`}
      className={`text-xl py-2 px-4 shrink-0 font-medium rounded-lg capitalize ${
        pathname === `/products/${category.split(' ').join('')}`
          ? ' text-darkGreen'
          : 'text-gray-900'
      } `}
    >
      <span
        className={
          pathname === `/products/${category.split(' ').join('')}`
            ? 'border-b-2 border-darkGreen  pb-1'
            : ''
        }
      >
        {category}
      </span>
    </Link>
  );
};

export default NavCategory;
