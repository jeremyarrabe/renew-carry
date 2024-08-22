import { redirect } from "next/navigation";

const ItemPage = async ({ params }) => {
  redirect("/item/1");
};

export default ItemPage;
