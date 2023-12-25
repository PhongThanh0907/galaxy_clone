import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const SelectBar = () => {
  return (
    <div className="max-w-6xl mx-auto flex gap-2 p-2 shadow-md rounded-md relative -top-7 bg-white">
      <Select>
        <SelectTrigger className="w-[300px] relative pl-8">
          <SelectValue placeholder="Chọn phim" />
          <div>
            <span
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="absolute left-1.5 h-5 w-5 bg-[#f58020] rounded-full flex justify-center items-center text-white font-semibold text-xs"
            >
              1
            </span>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[300px] relative pl-8">
          <SelectValue placeholder="Chọn rạp" />
          <div>
            <span
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="absolute left-1.5 h-5 w-5 bg-[#f58020] rounded-full flex justify-center items-center text-white font-semibold text-xs"
            >
              2
            </span>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[300px] relative pl-8">
          <SelectValue placeholder="Chọn ngày" />
          <div>
            <span
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="absolute left-1.5 h-5 w-5 bg-[#f58020] rounded-full flex justify-center items-center text-white font-semibold text-xs"
            >
              3
            </span>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[300px] relative pl-8">
          <SelectValue placeholder="Chọn suất" />
          <div>
            <span
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
              className="absolute left-1.5 h-5 w-5 bg-[#f58020] rounded-full flex justify-center items-center text-white font-semibold text-xs"
            >
              4
            </span>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button disabled className="bg-orange-400 w-64">
        Mua vé nhanh
      </Button>
    </div>
  );
};

export default SelectBar;
