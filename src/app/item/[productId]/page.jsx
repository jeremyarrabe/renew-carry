import { Categories, Products } from "@/server/models";
import { notFound } from "next/navigation";
import Item from "@/components/Item";

const SinglePage = async ({ params }) => {
  const { productId } = params;

  if (!productId) return notFound();

  return (
    <main>
      <Item productId={productId} />
    </main>
  );
};

export default SinglePage;
