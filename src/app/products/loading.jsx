const ProductsLoading = () => {
  return (
    <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
      <div className="ml-1 h-9 w-40 animate-pulse rounded-lg bg-gray-300"></div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
        {[...Array(2).keys()].map((i) => (
          <div
            key={i}
            className="my-3 flex h-[500px] flex-col rounded-lg bg-gray-300 p-3"
            style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProductsLoading;
