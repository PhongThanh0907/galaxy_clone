import Titles from "@/components/layouts/titles";
import React from "react";
import Img1 from "../../../public/blog1.webp";
import Image from "next/image";
import { ChevronRight, Eye, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const BlogMovie = (props: Props) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Titles
        title="GÓC ĐIỆN ẢNH"
        subTabs={["Bình luận phim", "Blog điện ảnh"]}
      />
      <div className="pt-10 grid grid-cols-2">
        <div>
          <div className="overflow-hidden h-[420px] w-[620px] rounded">
            <Image
              className="rounded hover:cursor-pointer hover:scale-110 object-cover duration-500"
              src={Img1}
              alt="img"
            />
          </div>
          <div>
            <span className="font-semibold text-lg hover:text-blue-800 duration-300 cursor-pointer pt-6 pb-2 block">
              [Preview] Aquaman And The Lost Kingdom: Niềm Hy Vọng Cuối Cùng Của
              Dòng Phim Siêu Anh Hùng?
            </span>
            <div className="flex gap-2">
              <button className="flex gap-0.5 items-center bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-700 duration-300 active:bg-blue-900">
                <ThumbsUp className="h-2.5 w-2.5 mb-[1px]" />
                <span className="text-[10px]">Thích</span>
              </button>

              <button className="flex gap-0.5 items-center bg-gray-200 text-gray-700 px-3 py-0.5 rounded">
                <Eye className="h-2.5 w-2.5 mb-[1px]" />
                <span className="text-[10px]">202</span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="grid grid-cols-10 gap-16">
              <div className="overflow-hidden h-[130px] w-[195px] rounded col-span-3">
                <Image
                  className="rounded hover:cursor-pointer hover:scale-110 object-cover duration-500"
                  src={Img1}
                  alt="img1"
                />
              </div>
              <div className="col-span-7">
                <span className="font-semibold text-md hover:text-blue-800 duration-300 cursor-pointer block">
                  [Preview] Aquaman And The Lost Kingdom: Niềm Hy Vọng Cuối Cùng
                  Của Dòng Phim Siêu Anh Hùng?
                </span>
                <div className="flex gap-2 pt-3">
                  <button className="flex gap-0.5 items-center bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-700 duration-300 active:bg-blue-900">
                    <ThumbsUp className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">Thích</span>
                  </button>

                  <button className="flex gap-0.5 items-center bg-gray-200 text-gray-700 px-3 py-0.5 rounded">
                    <Eye className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">202</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-10 gap-16">
              <div className="overflow-hidden h-[130px] w-[195px] rounded col-span-3">
                <Image
                  className="rounded hover:cursor-pointer hover:scale-110 object-cover duration-500"
                  src={Img1}
                  alt="img1"
                />
              </div>
              <div className="col-span-7">
                <span className="font-semibold text-md hover:text-blue-800 duration-300 cursor-pointer block">
                  [Preview] Aquaman And The Lost Kingdom: Niềm Hy Vọng Cuối Cùng
                  Của Dòng Phim Siêu Anh Hùng?
                </span>
                <div className="flex gap-2 pt-3">
                  <button className="flex gap-0.5 items-center bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-700 duration-300 active:bg-blue-900">
                    <ThumbsUp className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">Thích</span>
                  </button>

                  <button className="flex gap-0.5 items-center bg-gray-200 text-gray-700 px-3 py-0.5 rounded">
                    <Eye className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">202</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-10 gap-16">
              <div className="overflow-hidden h-[130px] w-[195px] rounded col-span-3">
                <Image
                  className="rounded hover:cursor-pointer hover:scale-110 object-cover duration-500"
                  src={Img1}
                  alt="img1"
                />
              </div>
              <div className="col-span-7">
                <span className="font-semibold text-md hover:text-blue-800 duration-300 cursor-pointer block">
                  [Preview] Aquaman And The Lost Kingdom: Niềm Hy Vọng Cuối Cùng
                  Của Dòng Phim Siêu Anh Hùng?
                </span>
                <div className="flex gap-2 pt-3">
                  <button className="flex gap-0.5 items-center bg-blue-500 text-white px-3 py-0.5 rounded hover:bg-blue-700 duration-300 active:bg-blue-900">
                    <ThumbsUp className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">Thích</span>
                  </button>

                  <button className="flex gap-0.5 items-center bg-gray-200 text-gray-700 px-3 py-0.5 rounded">
                    <Eye className="h-2.5 w-2.5 mb-[1px]" />
                    <span className="text-[10px]">202</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="text-orange-400 w-44 py-2 bg-transparent border-orange-400 border hover:bg-orange-400 duration-300 hover:text-white active:bg-orange-600">
          Xem thêm
          <ChevronRight className="h-4 w-4 mt-0.5 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default BlogMovie;
