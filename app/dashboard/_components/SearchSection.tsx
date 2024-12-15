import { Search } from "lucide-react";
import React from "react";

function SearchSection({ onSearchInput }: any) {
  return (
    <div className="p-10 bg-gradient-to-br from-[#033034] via-[#068790] to-blue-500 flex justify-center items-center flex-col text-white">
      <h2 className=" text-3xl text-center font-bold">Browse All Templates</h2>
      <p>What would you like to create today?</p>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center my-5 w-[50%] p-2 border rounded-md bg-white mx-auto">
          <Search className="text-primary" />
          <input
            onChange={(event) => onSearchInput(event.target.value)}
            type="text"
            placeholder="Search"
            className="text-primary bg-transparent outline-none w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchSection;
