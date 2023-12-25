import React from "react";
import Image from "next/image";
import Logo from "../../../public/galaxy-logo.webp";
import Ticket from "../../../public/btn-ticket.webp";
import { MENU_HEADER } from "@/constants";
import { ChevronDown, Search, User2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto text-gray-500 flex justify-between py-8">
      <Image width={112} height={32} src={Logo} alt="logo" />
      <div className="text-[15px] flex gap-8 items-center">
        <Image
          className="h-9"
          width={100}
          height={20}
          src={Ticket}
          alt="Ticket"
        />

        {MENU_HEADER.map((item, index) => (
          <span className="flex gap-0.5 items-center" key={index}>
            {item.label} <ChevronDown className="h-5 w-5" />
          </span>
        ))}

        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 right-2 flex justify-center items-center">
              <Search className="h-6 w-6 border-l pl-1.5" />
            </div>
            <Input className="pr-9" />
          </div>
          <div className="flex items-center gap-2 hover:text-rose-400 duration-300 cursor-pointer active:text-rose-600">
            <User2Icon className="h-5 w-5 mb-0.5" />
            <span className=" text-[15px]">Đăng nhập</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
