"use client"

import { FileClock, Home, Settings, WalletIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/istory",
    },
    {
      name: "Billing",
      icon: WalletIcon,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];


  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  }, [])

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center mb-7">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <hr className="my-6" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded cursor-pointer items-center ${path==menu.path && 'bg-primary text-white'}`}
          >
            <menu.icon className="w-6 h-6" />
            <h3 className="text-lg">{menu.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
