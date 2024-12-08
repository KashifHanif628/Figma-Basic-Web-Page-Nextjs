import React from "react";
import Image from "next/image";

export default function MainCourse() {
  return (
    <div>
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <img
          src="images/maincourse.png"
          alt="maincourse"
          width={1320}
          height={628}
          className="w-full max-w-[1320px]"
        />
      </div>

      {/* Client & Customers */}
      <div className="w-full">
        <Image
          src="/images/Client&customers.png"
          alt="Client&customers"
          layout="responsive"
          width={1920}
          height={410}
          className="mt-20"
        />
      </div>

      {/* DESERT */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/desert2.png"
          alt="desert2"
          width={1320}
          height={620}
          className="w-full max-w-[1320px] mt-5"
        />
      </div>

      {/* DRINKS */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/drinks.png"
          alt="drinks"
          width={1320}
          height={620}
          className="w-full max-w-[1320px] mt-5"
        />
      </div>

      {/* Clients & Partner */}
      <div className="mt-[52px] max-auto lg:ml-[300px] flex ">
        <Image
          src="/images/ClientsAndPartner.png"
          alt="ClientsAndPartner"
          width={1322}
          height={275}
          className="w-full max-w-[1320px] mt-8"
        />
      </div>

      {/* Last Section */}
      <div className="w-full">
        <Image
          src="/images/Component75.png"
          alt="Component75"
          layout="responsive"
          width={1920}
          height={774}
          className="mt-32"
        />
      </div>
    </div>
  );
}
