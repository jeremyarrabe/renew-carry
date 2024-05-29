const WhyChooseUs = () => {
  return (
    <div className="mt-16 px-4 py-16 bg-white md:px-20" id="whyChooseUs">
      <h2 className="text-4xl font-medium text-left font-lora-cyrillic  md:text-5xl text-darkGreen">
        Why Choose Us?
      </h2>
      <div className="flex flex-col gap-2 mt-14">
        <h3 className="text-xl font-medium md:text-2xl ">Sustainable Styles</h3>
        <p className="text-left md:mt-5 md:text-lg">
          Our bags feature eco-friendly materials like organic cotton and recycled polyester,
          ensuring fashion with a conscience.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-14">
        <h3 className="text-xl font-medium md:text-2xl text-end">Modern Elegance</h3>
        <p className=" md:mt-5 md:text-lg text-end">
          Enjoy timeless designs with a contemporary edge, perfect for any occasion.
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-14">
        <h3 className="text-xl font-medium md:text-2xl ">Quality You Can Trust</h3>
        <p className="text-left md:mt-5 md:text-lg">
          Crafted with precision and durability in mind, our bags are built to last, providing
          reliable style for years to come.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
