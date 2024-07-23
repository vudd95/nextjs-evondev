import IconCategory from "@/components/icons/IconCategory";
import IconExplore from "@/components/icons/IconExplore";
import IconPlay from "@/components/icons/IconPlay";

export const menuItems: {
  url: string;
  title: string;
  icon: React.ReactNode;
}[] = [
  { url: "/", title: "Khu vực học tập", icon: <IconPlay className="size-5" /> },
  {
    url: "/explore",
    title: "Khám phá",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/category",
    title: "Danh mục",
    icon: <IconCategory className="size-5" />,
  },
];
