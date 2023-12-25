import React from "react";
import Img1 from "../../../public/ke-an-hon-2_1702706122713.webp";
import Image from "next/image";
import { PlayCircle, Star, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
const ItemMovie = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex flex-col relative group">
        <div className="relative overflow-hidden rounded-lg">
          <Image className="h-full w-full" src={Img1} alt="img" />
          <div className="absolute inset-y-0 w-56 bg-black/60 skew-x-12 group-hover:left-[150px] duration-300 left-[116%]"></div>
          <div className="absolute inset-y-0 w-56 bg-black/60 skew-x-12 group-hover:right-[151.5px] duration-300 right-[116%]"></div>
          <div
            style={{ top: "50%", transform: "translateY(-120%)" }}
            className="absolute z-10 left-2 opacity-0 group-hover:opacity-100 group-hover:left-24 duration-500"
          >
            <Button className="flex gap-2 bg-orange-400 text-white font-semibold hover:bg-orange-300 duration-300 active:bg-orange-600  w-28">
              <Ticket />
              <span>Mua vé</span>
            </Button>
          </div>

          <div
            style={{ top: "50%", transform: "translateY(10%)" }}
            className="absolute z-10 right-2 opacity-0 group-hover:opacity-100 group-hover:right-[94px] duration-500"
          >
            <Button className="flex gap-2 border bg-transparent text-white font-semibold hover:border-none hover:bg-orange-600 duration-300 active:bg-orange-800 w-28">
              <PlayCircle />
              <span>Trailer</span>
            </Button>
          </div>
        </div>
        <span className="font-semibold pt-2">Kẻ ăn hồn</span>
        <div className="flex gap-3 items-center absolute bottom-20 bg-black/70 right-2">
          <Star className="text-yellow-500 h-4 w-4" />
          <span className="font-bold text-white text-lg">8.8</span>
        </div>
        <div className="bg-orange-400 absolute bottom-10 py-1 px-2 right-2 text-sm font-bold text-white rounded-md">
          <span>T18</span>
        </div>
      </div>
    </div>
  );
};

export default ItemMovie;
