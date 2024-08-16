import { Categories, Products } from "@/server/models";

import { Suspense } from "react";
import IndividualProduct from "./_components/IndividualProduct";
import Image from "next/image";

// export const generateMetadata = async ({ params }) => {
//   const { productId } = params;
//   const product = await Products.findOne({
//     where: {
//       id: productId,
//     },
//     include: [
//       {
//         model: Categories,
//         as: "categoryDetails",
//         attributes: { exclude: [, "createdAt", "updatedAt"] },
//       },
//     ],
//     attributes: { exclude: "categoryId" },
//   });

//   return {
//     title: product.title,
//     description: product.body,
//   };
// };

const ItemPage = async ({ params }) => {
  const { productId } = params;

  return (
    <main className="flex flex-col">
      <div className="relative min-h-[80svh] bg-red-200">
        <Image
          src={
            "https://images.unsplash.com/photo-1602064493605-8c715aa4deeb?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt=""
          fill
          className="object-cover"
          sizes="100%"
          priority
        />
      </div>
      <div className="container">
        <section className="bg-fuchsia-200">
          <h1>Product Title</h1>
          <p>Category</p>
          <p>Price</p>
          <button>Add to cart</button>
        </section>
        <section>
          <h2>Description</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.{" "}
          </p>
          <h2>Product Size Guide</h2>
          <p>Height</p>
          <p>Width</p>
          <p>Weight</p>
          <p>Depth </p>
          <p>Volume </p>
          <p>Max Laptop Size </p>
          <p>Carry on </p>
        </section>
      </div>
    </main>
  );
};

export default ItemPage;
