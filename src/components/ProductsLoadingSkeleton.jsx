const ProductsLoadingSkeleton = () => {
  return (
    <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
      <div className="flex items-center justify-end gap-4 pt-6">
        <div className="h-8 w-32 animate-pulse bg-gray-300" />
      </div>
      <div className="mt-7 grid grid-cols-1 gap-4 xs:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4).keys()].map((i) => (
          <div
            key={i}
            className="h-[450px] w-full animate-pulse rounded-md bg-gray-300 xs:h-[250px] md:h-[375px]"
            style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLoadingSkeleton;
