import Link from 'next/link';

const Footer = () => {
  return (
    <div className="mt-auto bg-darkGreen text-white px-4 text-lg pt-8  flex flex-col">
      <div className="flex  ">
        <div className="grow">
          <h3 className="font-bold text-xl">Pages</h3>
          <p>Home</p>
          <p>Products</p>
          <p>Our Store</p>
        </div>
        <div className="grow">
          <h3 className="font-bold text-xl">Socials</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
