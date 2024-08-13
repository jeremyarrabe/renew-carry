import { currencyFormat } from "@/helpers/currencyFormat";
import { getNewArrivals } from "@/lib/services/products";
import Image from "next/image";
import Link from "next/link";

const HorizontalProductScroll = async () => {
  const newArrival = await getNewArrivals();

  return (
    <div className="h-[330px] overflow-y-hidden">
      <div className="flex gap-4 pt-6">
        {newArrival &&
          newArrival.map((product) => (
            <Link
              key={product.id}
              href={`/item/${product.id}`}
              className="flex h-28 flex-col"
            >
              <div className={"relative min-h-[230px] w-[230px]"}>
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="rounded-lg object-cover"
                  sizes="100%"
                  priority
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-base font-bold lg:text-lg">
                    {product.title}
                  </p>
                  <p className="text-sm capitalize lg:text-base">
                    {product.categoryDetails.category}
                  </p>
                </div>
                <div className="text-base font-bold lg:text-lg">
                  <p>{currencyFormat(product.price)}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HorizontalProductScroll;
