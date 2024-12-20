"use client";

import {
  FileClock,
  Home,
  LogOutIcon,
  Settings,
  WalletIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
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
  // useEffect(()=>{
  //   console.log(path)
  // }, [])

  return (
    <div className="h-screen relative p-5 shadow-sm border">
      <div className="flex justify-center mb-7">
        <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <hr className="my-6" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded cursor-pointer items-center ${
                path == menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon className="w-6 h-6" />
              <h3 className="text-lg">{menu.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full ">
        <UsageTrack />
        <SignOutButton>
          <Button className="flex gap-2 mb-2 p-3 rounded-none cursor-pointer items-center w-full">
            LogOut <LogOutIcon />
          </Button>
        </SignOutButton>
      </div>
    </div>
  );
}

export default SideNav;
