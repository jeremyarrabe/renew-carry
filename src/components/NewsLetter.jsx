"use client";

const NewsLetter = () => {
  const subscribe = (e) => {
    console.log(2);

    e.preventDefault();
  };

  // text-4xl font-bold md:text-5xl

  return (
    <div className="container my-4 flex items-center justify-center rounded-md bg-primary py-14">
      <div className="w-[600px]">
        <div className="text-white">
          <h2 className="font-lora-cyrillic text-4xl font-bold">
            Get the Latest in Sustainable Style
          </h2>
          <p className="my-5">
            Get inspired with the latest in sustainable fashion, green living
            tips, and exclusive offers. Sign up to stay connected with our
            eco-conscious community.
          </p>
        </div>
        <form onSubmit={(e) => subscribe(e)} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="renewcarry@gmail.com"
            className="rounded-md p-3"
          />
          <button
            type="submit"
            className="btn-hovered rounded-md bg-accent p-3 font-bold text-textColor"
          >
            Subscribe
          </button>
        </form>
        <p className="text-end text-sm text-white">unsubscribe at any time</p>
      </div>
    </div>
  );
};

export default NewsLetter;
