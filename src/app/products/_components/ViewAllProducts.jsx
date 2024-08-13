// import Product from "@/components/Product";
// import { getProducts } from "@/lib/services/products";
// import React from "react";

// const ViewAllProducts = async () => {
//   const productList = await getProducts();
//   return (
//     <div className="container m-auto mt-3 flex flex-col">
//       <div className="flex items-center">
//         <p className="text-lg opacity-85">{productList.length} Results Found</p>
//       </div>

//       <div className="mt-2 flex flex-wrap pb-5">
//         {productList.map((product) => {
//           return (
//             <Product
//               key={product.id}
//               id={product.id}
//               image={product.image}
//               title={product.title}
//               category={product.categoryDetails.category}
//               price={product.price}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ViewAllProducts;
