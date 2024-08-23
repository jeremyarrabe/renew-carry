const ShoppingCartLoading = () => {
  return (
    <div className="container mt-28 flex flex-wrap justify-around px-4 pb-5">
      {[...Array(2).keys()].map((i) => (
        <div
          key={i}
          className="mt-2 flex h-[500px] w-full animate-pulse flex-col rounded-lg bg-gray-300"
          style={{ animationDelay: `${i * 0.05}s`, animationDuration: "1s" }}
        ></div>
      ))}
    </div>
  );
};

export default ShoppingCartLoading;
