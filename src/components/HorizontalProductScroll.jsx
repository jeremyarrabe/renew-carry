import { currencyFormat } from "@/helpers/currencyFormat";
import { getNewArrivals } from "@/lib/services/products";
import Image from "next/image";
import Link from "next/link";
import Product from "./Product";

const HorizontalProductScroll = async () => {
  const newArrival = await getNewArrivals();

  return (
    <div className="h-auto overflow-y-hidden">
      <div className="flex gap-4 pt-6">
        {newArrival &&
          newArrival.map((product) => (
            <Link
              href={`/item/${product.id}`}
              className="my-1 flex min-w-[300px] flex-col rounded-md transition-all hover:-translate-y-1 hover:shadow-md"
              key={product.id}
            >
              <div className="relative h-[450px] w-full xs:h-[250px] md:h-[375px]">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                  // onLoad={(img) => img.target.classList.remove('blur transition-all blur')}
                  sizes="100%"
                  priority
                />
              </div>
              <div className="flex flex-col p-2 pb-8 pt-4 font-lora-cyrillic capitalize">
                <div className="flex justify-between">
                  <p className="text-xl font-medium">{product.title}</p>
                  <p className="font-inter-regular text-lg font-bold">
                    {currencyFormat(product.price)}
                  </p>
                </div>

                <p className="text-lg font-medium tracking-wider opacity-95">
                  {product.categoryDetails.category}
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default HorizontalProductScroll;
