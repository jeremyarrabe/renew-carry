import Image from 'next/image';

const Featured = () => {
  return (
    <div className="flex mt-5  h-full flex-col">
      <h1 className="font-bold text-4xl">Featured</h1>
      <Image
        src={
          'https://images.pexels.com/photos/50924/pexels-photo-50924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        alt=""
        width={800}
        height={0}
      />
      <button className="bg-black text-white py-2 px-4 rounded-full font-bold">Check it out</button>
    </div>
  );
};

export default Featured;
