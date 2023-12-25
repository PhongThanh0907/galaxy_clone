"use client";

import React, { HTMLProps, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { BANNERS } from "@/constants";
const Banner = () => {
  const slideRef = useRef<Slider>(null);

  const PrevArrow = (props: HTMLProps<HTMLDivElement>) => {
    return (
      <div
        onClick={() => {
          slideRef.current?.slickPrev();
        }}
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="absolute cursor-pointer -left-7 z-10 h-14 w-14 bg-black/20 hover:bg-black/50 duration-300 active:bg-black rounded-full"
      >
        <ChevronLeft
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
          className="h-6 w-6 text-gray-200 absolute right-2"
        />
      </div>
    );
  };

  const NextArrow = (props: HTMLProps<HTMLDivElement>) => {
    return (
      <div
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
        className="absolute cursor-pointer -right-7 z-10 h-14 w-14 bg-black/20 hover:bg-black/50 duration-300 active:bg-black rounded-full"
        onClick={() => {
          slideRef.current?.slickNext();
        }}
      >
        <ChevronRight
          style={{
            top: "50%",
            transform: "translateY(-50%)",
          }}
          className="h-6 w-6 text-gray-200 z-10 absolute left-2"
        />
      </div>
    );
  };

  const settings = {
    className: "center custom-slider",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings} ref={slideRef}>
        {BANNERS.map((item, index) => (
          <Image
            className="rounded-lg"
            height={490}
            width={1520}
            key={index}
            src={item}
            alt="img"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
