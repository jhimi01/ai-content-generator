import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="md:w-64 fixed md:block hidden">
        <SideNav />
      </div>
      <div className="md:ml-64 bg-slate-100 h-full">
        <Header />
        {children}</div>
    </div>
  );
}

export default layout;
