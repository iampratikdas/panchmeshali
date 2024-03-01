'use client';
import React, { useState } from 'react';
import SiteLayout from '@/app/layout';
import { IconArrowLeft } from '@/assests/Icons';
import { IconEbook } from '@/assests/Icons';
import { IconPodCast } from '@/assests/Icons';
import { SearchIcon } from '@/assests/Icons';
import { LoginIcon } from '@/assests/Icons';
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
    <div>
      {/* topNav */}
      <div class="w-full   border-none fixed  bg-[#A4A5B1] shadow-lg h-[4vw] z-[1]">
        <div class="w-[80%]  border-none  h-full mr-[10%] ml-[10%] flex flex-row">
          <div class="w-[6%] h-full  border-none  flex justify-center items-center"> Logo</div>
          <div class="w-full h-full  border-none  flex justify-end">
            <div class="w-[50%] h-full  border-none  flex justify-center items-center">
              {/* searchbar */}
              <div class="w-[50%] h-full  border-none mr-10 flex justify-center items-center">
                <div class="w-[80%] h-9  rounded-[20px] bg-slate-50  flex justify-center items-center hover:shadow-slate-800 ">
                  <input class="w-[80%]  h-full border-none outline-none p-3 rounded-[20px]" placeholder="Search Ebook" />
                  <div class="w-[20%] h-full  flex justify-center items-center rounded-[50px] bg-[#DFCFA6] cursor-pointer">
                    <SearchIcon className="w-4 cursor-pointer" />
                  </div>
                </div>
              </div>
              {/* searchbar */}
              <div class="w-[10%] h-full  border-none  flex justify-center">
                <IconEbook className="w-6 cursor-pointer" />
              </div>
              <div class="w-[10%] h-full  border-none  flex justify-center">
                <IconPodCast className="w-6 cursor-pointer" />
              </div>
              <div class="w-[5%] h-[50%]  border-2 flex rounded-[50px] justify-center">
                <LoginIcon className="w-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topNav */}
      <div class="h-[4vw]"></div>
      {/* carousel */}
      <div class="w-full h-[60%] border-2  border-indigo-500 flex justify-center bg-blue-500"></div>
      {/* carousel */}

      <div class="w-full h-[80%] border-2 border-indigo-500">
        {/* <div class="bg-gradient-to-b from-green-400 to-blue-500 w-full h-[20%] relative top-[-10px] backdrop-blur-lg z-[0]"></div> */}
        <div class="bg-blue-500  w-full h-[80%]"></div>
        <div class="bg-gradient-to-t from-green-400 to-blue-500 w-full h-[20%] backdrop-blur-lg z-[0]"></div>
      </div>

      {/* categories */}
      <div>
        <div class="w-full h-[50%] border-2  border-indigo-500 flex justify-center"> categories</div>
      </div>
      {/* categories */}

      {/* podcast categories */}
      <div class="w-full h-[50%] border-2  border-indigo-500 flex justify-center">podcast categories</div>
      {/* podcast categories */}

      {/* about categories */}
      <div class="w-full h-[50%] border-2  border-indigo-500 flex justify-center"></div>
      {/* about categories */}
      {/* bottom */}
      <div class="w-full h-[50%] border-2  border-indigo-500 flex justify-center"></div>
      {/* bottom*/}
    </div>
  );
}

export default Index;
