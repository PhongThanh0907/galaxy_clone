import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import Promo1 from "../../../public/promo1.webp";
import Titles from "@/components/layouts/titles";


const Promotion = () => {
    const settings = {
        className: "center custom-slider",
        centerMode: true,
        infinite: true,
        centerPadding: "100px",
        slidesToShow: 4,
        speed: 500,
      };

      const newArr = [1,2,3,4,5,6,7,8]

  return (
    <div>

<Slider {...settings} >
        {newArr.map((item, index) => (
          <Image
            className="rounded-lg"
            height={490}
            width={1520}
            key={index}
            src={Promo1}
            alt="img"
          />
        ))}
      </Slider>
    </div>
  )
}

export default Promotion