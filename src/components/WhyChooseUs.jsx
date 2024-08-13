const WhyChooseUs = () => {
  return (
    <div className="mt-16 flex w-full justify-center bg-white">
      <div className="container flex flex-col gap-20 py-40" id="whyChooseUs ">
        <h2 className="text-left font-lora-cyrillic text-4xl font-medium text-darkGreen md:text-5xl">
          Why Choose Us?
        </h2>
        <div className="mt-14 flex flex-col gap-2">
          <h3 className="text-xl font-medium md:text-2xl">
            Sustainable Styles
          </h3>
          <p className="text-left md:mt-5 md:text-lg">
            Our bags feature eco-friendly materials like organic cotton and
            recycled polyester, ensuring fashion with a conscience.
          </p>
        </div>
        <div className="mt-14 flex flex-col gap-2">
          <h3 className="text-end text-xl font-medium md:text-2xl">
            Modern Elegance
          </h3>
          <p className="text-end md:mt-5 md:text-lg">
            Enjoy timeless designs with a contemporary edge, perfect for any
            occasion.
          </p>
        </div>
        <div className="mt-14 flex flex-col gap-2">
          <h3 className="text-xl font-medium md:text-2xl">
            Quality You Can Trust
          </h3>
          <p className="text-left md:mt-5 md:text-lg">
            Crafted with precision and durability in mind, our bags are built to
            last, providing reliable style for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
