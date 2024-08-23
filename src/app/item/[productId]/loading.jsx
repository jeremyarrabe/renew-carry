import React from "react";

const loading = () => {
  return (
    <>
      <div className="md:hidden">
        <div className="relative h-[calc(60svh)] w-full animate-pulse overflow-hidden bg-gray-300"></div>
        <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
          <div className="mt-5 flex">
            {[...Array(1).keys()].map((i) => (
              <div
                key={i}
                className="h-[600px] w-full animate-pulse rounded-md bg-gray-300"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: "1s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="container m-auto mt-3 flex min-h-[90svh] flex-col">
          <div className="mt-5 flex flex-col gap-4">
            {[...Array(2).keys()].map((i) => (
              <div
                key={i}
                className="h-[450px] w-full animate-pulse rounded-md bg-gray-300"
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: "1s",
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
