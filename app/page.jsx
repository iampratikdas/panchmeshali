"use client";
import React, { useState } from "react";
import SiteLayout from "@/app/layout";
import { IconArrowLeft } from "@/assests/Icons";
import Image from "next/image";
// import Footer from '@/components/Footer'

function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.webp?s=2048x2048&w=is&k=20&c=_k2FZhN5sfRMFE_N1WSNd47jfTASIgDUTafry1kTlAY=",
    // "https://media.istockphoto.com/id/1144647692/photo/corporate-group-portrait-of-cheering-staff-members.webp?s=2048x2048&w=is&k=20&c=_k2FZhN5sfRMFE_N1WSNd47jfTASIgDUTafry1kTlAY=",
    "/immmh.jpg"
    //  "/immmh.jpg"
  ];
  const categoriesImages = [
    {
      name: "Bhoutik",
      url: "/image1.png"
    },
    {
      name: "Rohosyo",
      url: "/image2.png"
    },
    {
      name: "Health",
      url: "/image3.png"
    },
    {
      name: "Romantic",
      url: "/image1.png"
    },
    {
      name: "Spiritual",
      url: "/image2.png"
    },
    {
      name: "Others",
      url: "/image3.png"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      console.log("nextSlide===>", console.log(prevSlide));
      return (prevSlide + 1) % images.length;
    });
  };

  const prevSlide = () => {
    console.log("prevSlide===>", console.log(prevSlide));
    setCurrentSlide((e) => {
      return (e - 1 + images.length) % images.length;
    });
  };

  return (
    <div>
      <div class="w-full border-2 border-indigo-600 bg-[#A4A5B1] shadow-lg h-[4vw]">
        <div class="w-[80%] border-2 border-indigo-600 h-full mr-[10%] ml-[10%] flex flex-row">
          <div class="w-[6%] h-full border-2 border-rose-600 flex justify-center items-center"> Logo</div>
          <div class="w-full h-full border-2 border-rose-600 flex justify-end">
            <div class="w-[50%] h-full border-2 border-rose-600 bg-[#b1a4a6] flex justify-center">
              <div class="w-[50%] h-full border-2 mr-10 border-rose-600 "></div>

              <div class="w-[10%] h-full border-2 border-indigo-600">
                <IconArrowLeft className="w-10 h-10 cursor-pointer" />
              </div>
              <div class="w-[10%] h-full border-2 border-indigo-600">
                <IconArrowLeft className="w-10 h-10 cursor-pointer" />
              </div>
              <div class="w-[10%] h-full border-2 border-indigo-600">
                <IconArrowLeft className="w-10 h-10 cursor-pointer" />
              </div>
              <div class="w-[10%] h-full border-2 border-indigo-600">
                <IconArrowLeft className="w-10 h-10 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* topNav */}
    </div>
  );
}

export default Index;
