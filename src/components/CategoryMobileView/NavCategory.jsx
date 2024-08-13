"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavCategory = ({ category }) => {
  const pathname = usePathname();
  return (
    <Link
      href={`${
        pathname === `/products/${category.split(" ").join("")}`
          ? " /products"
          : `/products/${category.split(" ").join("")}`
      }`}
      className={`shrink-0 rounded-lg px-2 py-1 text-xl font-medium capitalize ${
        pathname === `/products/${category.split(" ").join("")}`
          ? "text-darkGreen"
          : "text-gray-900"
      } `}
    >
      <span
        className={
          pathname === `/products/${category.split(" ").join("")}`
            ? "border-b-2 border-darkGreen pb-1"
            : ""
        }
      >
        {category}
      </span>
    </Link>
  );
};

export default NavCategory;
