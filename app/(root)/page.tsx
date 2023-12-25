import { Suspense } from "react";
import Banner from "./components/Banner";
import SelectBar from "./components/SelectBar";
import Movies from "./components/Movies";
import BlogMovie from "./components/BlogMovie";
import Promotion from "./components/Promotion";

export default function Page() {
  return (
    <div className="">
      <Suspense >
          <Banner />
          <SelectBar />
          <Movies />
          <div className="h-1 w-full bg-[#f4f4f4] mt-20 mb-12"/>
          <BlogMovie />
          <div className="h-1 w-full bg-[#f4f4f4] mt-20 mb-12"/>
          <Promotion />
      </Suspense>
    </div>
  );
};