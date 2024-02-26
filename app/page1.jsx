'use client';
import React, { useState } from 'react';
import SiteLayout from '@/app/layout';
import { IconArrowLeft } from '@/assests/Icons';
import Image from 'next/image';
// import Footer from '@/components/Footer'

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.webp?s=2048x2048&w=is&k=20&c=_k2FZhN5sfRMFE_N1WSNd47jfTASIgDUTafry1kTlAY=',
    // "https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.webp?s=2048x2048&w=is&k=20&c=_k2FZhN5sfRMFE_N1WSNd47jfTASIgDUTafry1kTlAY=",
    '/immmh.jpg',
    //  "/immmh.jpg"
  ];
  const categoriesImages = [
    {
      name: 'Bhoutik',
      url: '/image1.png',
    },
    {
      name: 'Rohosyo',
      url: '/image2.png',
    },
    {
      name: 'Health',
      url: '/image3.png',
    },
    {
      name: 'Romantic',
      url: '/image1.png',
    },
    {
      name: 'Spiritual',
      url: '/image2.png',
    },
    {
      name: 'Others',
      url: '/image3.png',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      console.log('nextSlide===>', console.log(prevSlide));
      return (prevSlide + 1) % images.length;
    });
  };

  const prevSlide = () => {
    console.log('prevSlide===>', console.log(prevSlide));
    setCurrentSlide((e) => {
      return (e - 1 + images.length) % images.length;
    });
  };

  return (
    <div className="w-full overflow-auto fixed top-0 left-0 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 animate-gradient">
      <div className="w-full h-1/2">
        <div className="w-full h-full flex items-center justify-center md:h-80">
          <div className="w-5 md:w-10 flex justify-center items-center h-full mt-10vh" onClick={prevSlide}>
            <IconArrowLeft className="w-44 h-full relative z-10 cursor-pointer md:w-44" />
          </div>
          {/*end of rightArrow */}
          <div className="absolute w-500 h-40 flex items-center justify-center mt-10vh overflow-hidden md:mt-20vh md:h-40">
            <div
              className="h-full w-500 flex transition-all duration-1000 ease-linear md:w-screen"
              style={{ transform: `translateX(-${currentSlide * 500}px)` }}
            >
              {images.map((items, index) => (
                <div key={index} style={{ width: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Image
                    width={500}
                    height={270}
                    className="rounded-10 w-500"
                    src={items}
                    alt="carousel_images1"
                    sizes="100vw"
                  />
                </div>
              ))}
            </div>{' '}
            {/*end of slider */}
          </div>
          {/*end of carouselDiv */}
          <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}></div>
          <div className="w-5 flex justify-center items-center h-full mt-10vh md:w-10" onClick={nextSlide}>
            <IconArrowLeft className="w-44 h-full rotate-180 cursor-pointer relative z-10 md:w-44" />
          </div>{' '}
          {/*end of divArrow */}
        </div>
        {/*end of carouselInnerDiv */}
      </div>
      {/*end of carouselOuterDiv */}
      <div className="h-auto px-15 md:px-15 mt-50 mb-50">
        <h3 className="text-white text-22">Categories ...</h3>
        <div className="w-full border-solid flex flex-wrap items-center justify-center gap-20 mt-20">
          {categoriesImages.map((item, index) => (
            <div
              key={index}
              className="categories_divs w-310 h-300 flex flex-col rounded-35 bg-opacity-80 bg-white shadow-lg"
            >
              <div className="w-90 mx-20 my-20 mt-10 ml-15">
                <h1 className="text-base">{item.name}</h1>
              </div>{' '}
              {/*end of headdiv */}
              <div className="w-90 h-77 m-0 ml-15">
                <Image
                  key={index}
                  style={{ borderRadius: '15px' }}
                  width={277}
                  height={225}
                  src={item.url}
                  alt="carousel_images1"
                  loading="lazy"
                />
              </div>
              {/*end of headdiv */}
            </div>
          ))}
        </div>
      </div>
      {/*end of section categories*/}
      <div className="h-auto px-15 md:px-15 mt-50 mb-50">
        <div className="w-full h-500 flex flex-row">
          <div className="w-full h-500 flex flex-row"></div>
        </div>
      </div>{' '}
      {/*end of section Abo ut*/}
      {/* <Footer /> */}
    </div>
  );
}

export default Index;

// Index.getLayout = (page) => {
//   return <SiteLayout> {page}</SiteLayout>;
// };
