// "use client";
import React from "react";
import IconPlay from "../icons/IconPlay";
import IconExplore from "../icons/IconExplore";
import IconCategory from "../icons/IconCategory";
import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveLink from "../common/ActiveLink";

const Sidebar = () => {
  return (
    <div className="sidebar p-5 border-r border-r-gray-200">
      <div className="logo ">
        <a href="/" className="font-bold text-3xl inline-block mb-5">
          <span className="text-primary">U</span>
          cademy
        </a>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem
            url={item.url}
            title={item.title}
            icon={item.icon}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

// component MenuItem
function MenuItem({
  url = "/",
  title = "",
  icon,
}: {
  url: string;
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon} {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
