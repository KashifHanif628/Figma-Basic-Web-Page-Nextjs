import React from "react";
import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="flex flex-col bg-[#0D0D0D] items-center w-[full] h-[90px] ">
      {/* Header Section */}
      <div className="w-[1320px] h-[32px] mt-[29px] flex ">
        <ul className="hidden sm:flex gap-6 md:gap-8 lg:gap-12 items-center w-[508px] h-[24px]">
          <img
            src="images/Foodtuck.png"
            alt="Foodtuck"
            width={109}
            height={32}
            className="mr-52"
          />

          <li className="w-[46px] h-[24px] text-[16px] leading-[24px] text-[#ff9f0d]">
            Home
          </li>
          <li className="w-[43px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Menu
          </li>
          <li className="w-[34px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Blog
          </li>
          <li className="w-[47px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Pages
          </li>
          <li className="w-[46px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            About
          </li>
          <li className="w-[39px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Shop
          </li>
          <li className="w-[61px] h-[24px] text-[16px] leading-[24px] text-[#FFFFFF]">
            Contact
          </li>

          <div className="flex gap-4 items-center">
            <Image
              src="/images/MagnifyingGlass.png"
              alt="MagnifyingGlass"
              width={24}
              height={24}
              className="ml-60"
            />
            <Image src="/images/User.png" alt="User" width={24} height={24} />
            <Image src="/images/Tote.png" alt="Tote" width={24} height={24} />
          </div>
        </ul>
      </div>

      <div className="relative w-full">
        {/* Unsplash Image */}
        <Image
          src="/images/unsplash.png"
          alt="unsplash"
          layout="responsive"
          width={1920}
          height={410}
          className="mt-5"
        />

        {/* "Our Menu" Text */}
        <h1 className="w-[225px] h-[56px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[48px] font-bold text-white whitespace-nowrap">
          Our Menu
          <br />
          <ul className="flex items-center w-[56px] h-[28px] text-[20px] leading-[28px] text-[#FFFFFF]">
            Home
            <li className="flex items-center gap-2 text-[#FF9F0D]">
              <Image
                src="/images/Vector.png"
                alt="Vector"
                width={5}
                height={10}
                className="ml-2 mt-1"
              />
              Menu
            </li>
          </ul>
        </h1>
      </div>
    </div>
  );
}
