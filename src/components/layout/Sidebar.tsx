// "use client";
import React from "react";
import { menuItems } from "@/constants";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/types";

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
function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon} {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
