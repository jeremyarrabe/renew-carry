import SingleLeaf from "./svg/SingleLeaf";

const WhyChooseUs = () => {
  return (
    <section
      className="bg-primary py-10 text-white md:py-14 lg:py-20"
      id="whyChooseUs"
    >
      <div className="container flex flex-col items-center justify-center gap-10 md:gap-20">
        <h2 className="text-center font-lora-cyrillic text-4xl font-bold md:text-5xl">
          Why Choose Us?
        </h2>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-4 lg:flex-1">
            <span>
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
            </span>
            <p className="font-lora-regular text-2xl">Eco-Friendly Materials</p>
            <p className="md:max-w-[95%] lg:max-w-full">
              Our bags are crafted from sustainable materials, ensuring that
              your purchase supports environmental conservation.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-1">
            <span className="flex">
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
            </span>
            <p className="font-lora-regular text-2xl">Timeless Design</p>
            <p className="md:max-w-[95%] lg:max-w-full">
              We prioritize style that never goes out of fashion, so you can
              enjoy your bag for years to come.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:flex-1">
            <span className="flex">
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
              <SingleLeaf className="h-6 w-6 scale-x-[-1] fill-white" />
            </span>
            <p className="font-lora-regular text-2xl">Durability and Quality</p>
            <p className="md:max-w-[95%] lg:max-w-full">
              Our bags are built to last, combining strength and beauty in every
              piece, so you can carry them with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
