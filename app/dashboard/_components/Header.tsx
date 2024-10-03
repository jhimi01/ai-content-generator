import { Search, SearchCode } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="p-6 bg-white shadow-sm border-b-2 flex justify-between items-center">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search />
        <input type="text" placeholder="search..." className="outline-none" />
      </div>

      <div className="capitalize bg-primary rounded-full p-1 px-2 text-white text-xs">
        <h3>🔥 join membership just for $9.99/Month</h3>
      </div>
    </div>
  );
}

export default Header;
