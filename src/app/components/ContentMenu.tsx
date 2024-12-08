import React from "react";
import Image from "next/image";

export default function ContentMenu() {
  return (
    <div className="w-[1320px] max-auto h-[628px] mt-[531px] lg:ml-[300px] flex flex-col lg:flex-row ">
      <div className="flex justify-center mr-8">
        <img
          src="images/Rectangle.png"
          alt="Rectangle"
          width={448}
          height={626}
        />
      </div>

      <div className="mt-8 lg:mt-0">
        {/* Heading */}
        <h1 className="w-[294px] h-[56px] font-bold text-[36px] md:text-[40px] lg:text-[48px] leading-[56px] text-[#333333] m-8 lg:ml-36 whitespace-nowrap">
          Starter Menu
        </h1>

          {/* Menu Items */}
        <div className="w-[760px] h-[111px] lg:ml-36 mb-12">
          <div className="flex justify-between items-center">
            <p className="w-[341px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333]">
              Alder Grilled Chinook Salmon
            </p>
            <p className="text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D]">
              32$
            </p>
          </div>

          <p className="w-[368px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
            Toasted French bread topped with romano, cheddar
          </p>

          <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282]">
            560 CAL
          </p>

          {/* Menu Items 2 */}
          <div>
            <div className="flex justify-between items-center mt-6">
              <p className="w-[256px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                Berries and creme tart
              </p>
              <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                43$
              </p>
            </div>

            <p className="w-[287px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
              Gorgonzola, ricotta, mozzarella, taleggio
            </p>

            <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
              7000 CAL
            </p>
          </div>

            {/* Menu Items 3*/}
          <div>
            <div className="flex justify-between items-center mt-6">
              <p className="w-[379px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333] ">
                Tormentoso Bush Pizza Pintoage
              </p>
              <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                14$
              </p>
            </div>

            <p className="w-[315px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
              Ground cumin, avocados, peeled and cubed
            </p>

            <p className="w-[72px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
              1000 CAL
            </p>
          </div>

            {/* Menu Items 4*/}
          <div>
            <div className="flex justify-between items-center mt-6">
              <p className="w-[294px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#333333] ">
                Spicy Vegan Potato Curry
              </p>
              <p className="W-[41px] h-[32px] text-[20px] md:text-[24px] font-bold leading-[32px] text-[#FF9F0D] ">
                35$
              </p>
            </div>

            <p className="w-[353px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#4F4F4F] whitespace-nowrap">
              Spreadable cream cheese, crumbled blue cheese
            </p>

            <p className="w-[63px] h-[24px] text-[14px] md:text-[16px] mt-2 leading-[24px] font-bold text-[#828282] whitespace-nowrap">
              560 CAL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
