'use client';
import Image from 'next/image';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span">test</span>';
  },
};

const Hero = () => {
  return (
    <div className="flex mt-9 flex-col px-4 ">
      <div className="text-center text-6xl font-lora-cyrillic font-medium text-darkGreen">
        <h1>Sustainable</h1>
        <h1 className="py-4">Beautiful</h1>
        <h1>Modern</h1>
      </div>
      <div className="text-center mt-10">
        <p className="text-lg">
          Discover the beauty of sustainability in our modern bag collection. Each piece is crafted
          with care, combining timeless style with eco-friendly materials.
        </p>
      </div>
      <div className="flex justify-center mt-16">
        <button className="py-4 px-20 bg-brightOrange text-xl rounded-lg font-bold text-white">
          Shop Now
        </button>
      </div>
    </div>
  );
};

// const Featured = () => {
//   return (
//     <div className="flex py-5  flex-col bg-[#FFFCF4] px-2 ">
//       <h1 className=" text-3xl mb-4">Sustainable</h1>
//       <div className="w-full max-w-full max-h-full min-h-0 min-w-0 ">
//         <Swiper
//           // install Swiper modules
//           modules={[Navigation, Pagination, Scrollbar, A11y]}
//           slidesPerView={1}
//           pagination={{ dynamicBullets: true }}
//         >
//           <SwiperSlide>
//             <div>
//               <Image
//                 src={
//                   'https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//                 }
//                 alt=""
//                 width={999}
//                 height={0}
//                 priority
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div>
//               <Image
//                 src={
//                   'https://images.pexels.com/photos/934673/pexels-photo-934673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//                 }
//                 alt=""
//                 width={999}
//                 height={0}
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div>
//               <Image
//                 src={
//                   'https://images.pexels.com/photos/838413/pexels-photo-838413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//                 }
//                 alt=""
//                 width={999}
//                 height={0}
//               />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="mt-4 flex justify-center">
//         <button className=" text-white py-2 px-4 rounded-full font-bold bg-darkGreen">
//           Check it out
//         </button>
//       </div>
//     </div>
//   );
// };

export default Hero;
